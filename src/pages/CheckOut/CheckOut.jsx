import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData, useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Swal from "sweetalert2";

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, img, title, price } = service;
    const [selectedDate, setSelectedDate] = useState(null);

    const handleCheckOut = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value || user?.displayName;
        const email = user?.email;
        const date =
            (selectedDate && format(selectedDate, "PP")) || "Not Selected";
        const message = form.message.value;

        const book = {
            name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price,
            message,
        };
        // console.log(book);

        fetch(`http://localhost:5000/bookings/`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(book),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: `${title} Order Confirmed`,
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.reload();
                        }
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content w-full flex-col">
                    <div className="card w-full shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleCheckOut}>
                                <div className="flex gap-x-4">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">
                                                Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="name"
                                            name="name"
                                            defaultValue={user?.displayName}
                                            className="input input-bordered"
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">
                                                Email
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="email"
                                            name="email"
                                            defaultValue={user?.email}
                                            className="input input-bordered"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-x-4">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-xl">
                                                Date
                                            </span>
                                        </label>
                                        <DayPicker
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={setSelectedDate}
                                            modifiersStyles={{
                                                selected: {
                                                    backgroundColor: "orange",
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">
                                                Due Amount
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="price"
                                            name="price"
                                            defaultValue={"$" + price}
                                            className="input input-bordered"
                                        />
                                    </div>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">
                                            Your message
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="message"
                                        name="message"
                                        className="input input-bordered h-[150px]"
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        className="btn btn-error text-white"
                                        type="submit"
                                        value="Order Confirm"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
