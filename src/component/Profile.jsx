import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {

    const { user, setUser, updateUser } = use(AuthContext)
    
    console.log(user)
    // const [isOpen, setIsOpem] = useState(false)

    // const handleOpenForm = () => {
    //     setIsOpem(!isOpen)

    // }

    const handleUpdate = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoURL });
                alert("Profile Updated!");
            })
            .catch(err => console.log(err));
    };



    return (
        <div className='flex justify-center min-h-screen items-center'>

            {/* <!-- Profile card --> */}
            <section class="bg-white shadow-md rounded-2xl overflow-hidden">
                <div class="p-6 md:flex md:items-center md:gap-6">
                    {/* <!-- Avatar and basic info --> */}
                    <div class="flex items-center gap-4">
                        <div class="w-28 h-28 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
                            {/* <!-- Replace the src with the user's image URL --> */}
                            <img src={user?.
                                photoURL} alt="User avatar" class="w-full h-full object-cover" />
                        </div>
                        <div>
                            {/* <!-- Replace name/email values with server-side variables or client-side values --> */}
                            <h2 class="text-xl font-semibold leading-tight">{user?.displayName}</h2>
                            <p class="text-sm text-gray-500">{user?.email
                            }</p>
                            <p class="mt-2 text-sm text-gray-600">Member since <time datetime="2024-07-30">July 30, 2024</time></p>
                        </div>
                    </div>















                    {/* <!-- Action area on the right for larger screens --> */}
                    {/* <div class=" md:mt-0 md:ml-auto md:flex md:items-center">
                        <button onClick={handleOpenForm}
                            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            aria-label="Update profile">
                           
                            Update Profile
                        </button>
                    </div> */}


                    <form onSubmit={handleUpdate} className="card-body">
                        <h2 className='font-semibold text-2xl text-center'>Update Now</h2>
                        <fieldset className="fieldset">

                            <label className="label">Name</label>
                            <input defaultValue={user?.displayName} name="name" type="name" className="input" placeholder="Your Name"
                            />

                            <label className="label">Photo URL</label>
                            <input defaultValue={user?.photoURL} name="photo" type="text" className="input" placeholder="Photo  URL"
                            />

                            <button type="submit" className="btn btn-neutral mt-4">Update</button>


                        </fieldset>
                    </form>












                </div>


                <div class="border-t border-gray-100 p-6">
                    {/* <!-- Details grid --> */}
                    <dl class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <dt class="text-xs font-medium text-gray-500 uppercase">Full name</dt>
                            <dd class="mt-1 text-sm text-gray-900">Tahsin Habib</dd>
                        </div>


                        <div>
                            <dt class="text-xs font-medium text-gray-500 uppercase">Email</dt>
                            <dd class="mt-1 text-sm text-gray-900">tahsin@gmail.com</dd>
                        </div>


                        <div>
                            <dt class="text-xs font-medium text-gray-500 uppercase">Phone</dt>
                            <dd class="mt-1 text-sm text-gray-900">01634904690</dd>
                        </div>


                        <div>
                            <dt class="text-xs font-medium text-gray-500 uppercase">Location</dt>
                            <dd class="mt-1 text-sm text-gray-900">Chittagong, Bangladesh</dd>
                        </div>
                    </dl>



                </div>
            </section>





        </div>
    );
};

export default Profile;












// <form onSubmit={""} className="card-body">
//     <h2 className='font-semibold text-2xl text-center'>Update Now</h2>
//     <fieldset className="fieldset">
//         {/* email */}
//         <label className="label">Name</label>
//         <input name="name" type="name" className="input" placeholder="Your Name"
//         />
//         {/* password  */}
//         <label className="label">Photo URL</label>
//         <input name="photo" type="text" className="input" placeholder="Photo  URL"
//         />
//         {/* forgat password */}


//         {/* the btn for login */}



//         <button type="submit" className="btn btn-neutral mt-4">Update</button>


//     </fieldset>
// </form>