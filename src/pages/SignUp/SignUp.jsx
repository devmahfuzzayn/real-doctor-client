import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { registerUser, updateUserProfile } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password };

        // console.log(user);

        registerUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                updateUserProfile(user, name).then((result) => {
                    // console.log("User profile updated successfully");
                    Swal.fire({
                        icon: "success",
                        title: "Sign up successful!",
                    });
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="login">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-2/4 text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="name"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        name="email"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Password
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        name="password"
                                        className="input input-bordered"
                                        required
                                    />
                                    <label className="label">
                                        <p className="label-text-alt">
                                            Already have an Account?
                                            <Link
                                                to="/signin"
                                                className="text-orange-500 font-bold ml-1"
                                            >
                                                Sign In
                                            </Link>
                                        </p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-error text-white">
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
