import React from "react";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-[130px]">
            <div>
                <img
                    src="https://i.ibb.co/L9GS6F2/png-transparent-health-medicine-serpent-wings-staff-symbol-snake-doctor-pharmacy-herald-thumbnail-re.png"
                    alt=""
                    className="w-full max-w-[100px]"
                />
                <p>
                    Real Doctor Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
