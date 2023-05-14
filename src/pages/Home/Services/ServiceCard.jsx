import React from "react";
import { FaArrowRight, FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;

    return (
        <div className="service-card">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={img}
                        alt="Service"
                        className="w-full max-w-[314px] h-[208px] rounded-lg"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="font-bold text-orange-500">Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/service/${_id}`}>
                            <button>
                                <FaArrowRight className="text-orange-500 text-[24px]"></FaArrowRight>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
