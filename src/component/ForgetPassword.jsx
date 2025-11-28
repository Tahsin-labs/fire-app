import React, { use, useRef, } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';


const ForgetPassword = () => {
    const { auth } = use(AuthContext)
    const emailRef = useRef(null)



    const handleForgetPass = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        console.log(email)
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset email sent!");
            })
            .catch((err) => {
                console.log(err)
                toast.error("Check your email or create an account first.");
            });
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white w-full max-w-md shadow-lg rounded-lg p-6">

                <h2 className="text-2xl font-semibold text-center mb-4">
                    Reset Your Password
                </h2>

                <form className="space-y-4">

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}

                            className="w-full border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <button
                        onClick={handleForgetPass}

                        type="btn"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Reset Password
                    </button>
                </form>

                <div> <Link to="/login">  <button>Back to Loging</button>  </Link> </div>



            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default ForgetPassword;