import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
    const { user, setUser, updateUser } = useContext(AuthContext);

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photo.value;

        updateUser({ displayName: name, photoURL })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL });
                alert("Profile Updated!");
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
            <section className="bg-white w-full max-w-4xl shadow-lg rounded-3xl overflow-hidden border border-gray-100">

                {/* Header */}
                <div className="p-8 md:flex md:items-center md:gap-8">

                    {/* Avatar */}
                    <div className="flex flex-col items-center text-center md:text-left">
                        <div className="w-32 h-32 rounded-full overflow-hidden shadow-sm border">
                            <img
                                src={user?.photoURL}
                                alt="User avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h2 className="text-2xl font-semibold mt-4">{user?.displayName || "Unknown User"}</h2>
                        <p className="text-gray-500 text-sm">{user?.email}</p>
                        <p className="text-xs text-gray-400 mt-1">
                            Member since <span className="font-medium">July 30, 2024</span>
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleUpdate}
                        className="flex-1 mt-8 md:mt-0 bg-gray-50 p-6 rounded-2xl border border-gray-100"
                    >
                        <h3 className="text-xl font-semibold text-center mb-4">Update Profile</h3>

                        <label className="text-sm font-medium text-gray-600">Name</label>
                        <input
                            defaultValue={user?.displayName}
                            name="name"
                            type="text"
                            className="input input-bordered w-full mt-1 mb-4"
                        />

                        <label className="text-sm font-medium text-gray-600">Photo URL</label>
                        <input
                            defaultValue={user?.photoURL}
                            name="photo"
                            type="text"
                            className="input input-bordered w-full mt-1 mb-4"
                        />

                        <button
                            type="submit"
                            className="btn btn-neutral w-full mt-2"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>

                {/* Extra Info Section */}
                <div className="border-t p-8 bg-white">
                    <h4 className="text-lg font-semibold mb-4">Account Details</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div>
                            <p className="text-gray-500 uppercase text-xs tracking-wide">Full Name</p>
                            <p className="mt-1 font-medium text-gray-900">{user?.displayName}</p>
                        </div>

                        <div>
                            <p className="text-gray-500 uppercase text-xs tracking-wide">Email</p>
                            <p className="mt-1 font-medium text-gray-900">{user?.email}</p>
                        </div>

                        <div>
                            <p className="text-gray-500 uppercase text-xs tracking-wide">Phone</p>
                            <p className="mt-1 font-medium text-gray-900">01634904690</p>
                        </div>

                        <div>
                            <p className="text-gray-500 uppercase text-xs tracking-wide">Location</p>
                            <p className="mt-1 font-medium text-gray-900">Chittagong, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
