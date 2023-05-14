import React from "react";

const AboutUs = () => {
    return (
        <div className="about-us mt-[130px]">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div className="relative mb-[180px] lg:mb-0">
                        <img
                            src="https://cdn.firstcry.com/education/2022/04/26104239/1686721738.jpg"
                            className="max-w-sm rounded-[10px] shadow-2xl"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000"
                            className="max-w-[327px] max-h-[332px] absolute -right-10 top-1/2 border-[10px] border-white rounded-[10px]"
                            alt=""
                        />
                    </div>
                    <div>
                        <h3 className="font-bold text-orange-500">About Us</h3>
                        <h1 className="text-5xl font-bold leading-[60px]">
                            We are qualified & of experience in this field
                        </h1>
                        <p className="py-6">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable.
                        </p>
                        <br />
                        <p>
                            the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't
                            look even slightly believable.
                        </p>
                        <button className="btn btn-error mt-4">
                            Get More Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
