import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Service = () => {
    const loadedService = useLoaderData();
    const { _id, img, title, description, price, facility } = loadedService;

    return (
        <div className="service">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-6">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="pt-6 py-4">{description}</p>
                        <ul className="ml-6 mb-4">
                            {facility.map((f, idx) => (
                                <li className="list-disc" key={idx}>
                                    {f.name}
                                </li>
                            ))}
                        </ul>
                        <p className="text-2xl font-bold text-orange-500 mb-4">
                            Price: ${price}
                        </p>
                        <Link to={`/book/${_id}`}>
                            <button className="btn btn-error text-white">
                                Proceed Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
