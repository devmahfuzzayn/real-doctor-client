import React from "react";

const BookingRow = ({ booking, handleBookingDelete, handleBookingConfirm }) => {
    const { _id, img, service, date, price, status } = booking;

    return (
        <tr>
            <th>
                <button
                    onClick={() => handleBookingDelete(_id)}
                    className="btn btn-sm btn-circle"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                </div>
            </td>
            <td>{service}</td>
            <td>{date}</td>
            <td>${price}</td>
            <th>
                {status === "confirmed" ? (
                    <p className="text-orange-500">Confirmed</p>
                ) : (
                    <button
                        onClick={() => handleBookingConfirm(_id)}
                        className="btn btn-ghost btn-xs"
                    >
                        Confirm
                    </button>
                )}
            </th>
        </tr>
    );
};

export default BookingRow;
