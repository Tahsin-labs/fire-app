import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { creatUser, setUser, updateUser, handleGoogleIn } = use(AuthContext);
    const [passError, setPassError] = useState("");
    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/[A-Z]/.test(password)) {
            setPassError("Password must contain at least one UPPERCASE letter.");
            return;
        }

        if (!/[a-z]/.test(password)) {
            setPassError("Password must contain at least one lowercase letter.");
            return;
        }

        if (password.length < 6) {
            setPassError("Password must be at least 6 characters long.");
            return;
        }
        else {
            setPassError("");
        }


   
        creatUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo });
                    navigate("/")
                })
                    .catch((error) => {
                        console.log(error)
                        setUser(user);
                    })

            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });



    }



    const signGoogleRag = () => {
        handleGoogleIn()
            .then(result => {
                const user = result.user
                setUser(user)

            })
            .catch(err => console.log(err))


    }

    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">


                        <h2 className='font-semibold text-2xl text-center'>Regrister Your account</h2>

                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">



                                {/* Name */}
                                <label className="label">Name</label>
                                <input name='name' type="name" className="input" placeholder="Name"
                                    required />

                                {/* Photo URL */}


                                <label className="label">Photo URL</label>
                                <input name="photo" type="photo" className="input" placeholder="Photo URL"
                                    required />








                                {/* email */}
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" required />

                                {/* passeord */}
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" required />

                                {passError && (
                                    <p className="text-red-500 text-sm mt-1">{passError}</p>
                                )}





                                <button onClick={signGoogleRag} className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                                <button type="submit" className="btn btn-neutral mt-4">Register</button>
                                <p>You Have already an account ?   <Link to="/login">Login</Link> </p>
                            </fieldset>

                        </form>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;