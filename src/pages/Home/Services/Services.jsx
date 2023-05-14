import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="services mt-[100px] lg:mt-10">
            <div className="content text-center">
                <h3 className="font-bold text-orange-500">Service</h3>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p className="mt-4">
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable.
                </p>
            </div>
            <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {services.map((service) => (
                    <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>
                ))}
            </div>
        </div>
    );
};

export default Services;
