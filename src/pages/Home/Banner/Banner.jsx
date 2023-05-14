import React from "react";

const Banner = () => {
    return (
        <div className="banner mt-10">
            <div className="carousel w-full max-h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://media.istockphoto.com/id/638647194/photo/taking-you-from-good-health-to-great-health.jpg?s=170667a&w=0&k=20&c=eb0yp97TUR86AY4scaC1A4bdKArezq_8HelGMbOHWaA="
                        className="w-full object-cover"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://media.istockphoto.com/id/1342708859/photo/portrait-of-a-male-doctor.jpg?s=170667a&w=0&k=20&c=4MfNkUQndQ-KfKXwQKZnIXgZGc5XKiVQAxNgdUIf0HM="
                        className="w-full object-cover"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://media.istockphoto.com/id/1144971891/photo/make-the-appointment.jpg?s=170667a&w=0&k=20&c=VMSo4ysX_pm5Chn7bk46c98437YwvD6_vsEG5yz2sDk="
                        className="w-full object-cover"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://media.istockphoto.com/id/1307543528/photo/mixed-race-nurse-using-digital-tablet-at-hospital.jpg?s=170667a&w=0&k=20&c=xyPPkEsXR-JAZTbu3QHH-DtEfU4wgbj95AUj0KB9DDs="
                        className="w-full object-cover"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
