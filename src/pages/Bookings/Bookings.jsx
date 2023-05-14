import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Footer from "../Home/Footer/Footer";
import Swal from "sweetalert2";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setBookings(data);
            });
    }, []);

    const handleBookingDelete = (_id) => {
        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = bookings.filter(
                        (booking) => booking._id !== _id
                    );
                    Swal.fire({
                        icon: "success",
                        title: `Service deleted successfully`,
                    });
                    setBookings(remaining);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleBookingConfirm = (_id) => {
        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status: "confirmed" }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const updatedBooking = bookings.find(
                        (booking) => booking._id === _id
                    );
                    updatedBooking.status = "confirmed";
                    const remaining = bookings.filter(
                        (booking) => booking._id !== _id
                    );
                    const modifiedBookings = [updatedBooking, ...remaining];
                    setBookings(modifiedBookings);
                }
            });
    };

    return (
        <div>
            <div className="bookings my-[130px]">
                <div className="content text-center">
                    <h2 className="text-3xl font-semibold">
                        Total Bookings: {bookings.length}
                    </h2>
                    <p className="mt-2">Name: {user?.displayName}</p>
                    <p className="mt-2">Email: {user?.email}</p>
                </div>
                <div className="bookings-table mt-10">
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                            />
                                        </label>
                                    </th>
                                    <th>Image</th>
                                    <th>Service</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <BookingRow
                                        key={booking._id}
                                        booking={booking}
                                        handleBookingDelete={
                                            handleBookingDelete
                                        }
                                        handleBookingConfirm={
                                            handleBookingConfirm
                                        }
                                    ></BookingRow>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Bookings;
