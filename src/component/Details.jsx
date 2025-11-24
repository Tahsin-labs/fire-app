import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {

    const data = useLoaderData()
    const { id } = useParams()
    const [app, setApp] = useState({});
    console.log(data, id, app)

    useEffect(() => {
        const appDetails = data.find(singleApp => singleApp.id == id);
        setApp(appDetails);

    }, [data, id])
    return (
        <div>
            <section class="max-w-6xl mx-auto p-6 mt-6">

                {/* Game Title  */}
                <h1 class="text-4xl font-bold mb-4">{app.title}</h1>

                {/* <!-- Game Cover & Info --> */}
                <div class="grid md:grid-cols-2 gap-10 mt-6">

                    {/* <!-- Cover Image --> */}
                    <div>
                        <img
                            src="https://i.ibb.co/2W0F2qz/game-cover.jpg"
                            alt="Game Cover"
                            class="rounded-xl shadow-lg w-full"
                        />
                    </div>

                    {/* <!-- Details --> */}
                    <div class="space-y-5">

                        {/* <!-- Rating --> */}
                        <p class="text-lg">
                            ⭐ <span class="font-semibold">Rating:</span> {app.rating}
                        </p>
                        {/* 
        <!-- Genre --> */}
                        <p class="text-lg">
                            🎮 <span class="font-semibold">Genre:</span> {app.genre}
                        </p>
                        {/* 
        <!-- Size --> */}
                        <p class="text-lg">
                            📦 <span class="font-semibold">Size:</span> {app.size}
                        </p>

                        {/* <!-- Release Date --> */}
                        <p class="text-lg">
                            📅 <span class="font-semibold">Release:</span> {app.release}
                        </p>

                        {/* <!-- Description --> */}
                        <p class="text-gray-300 leading-relaxed">
                            {app.description}
                        </p>

                        {/* <!-- Download Button --> */}
                        <button class="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-lg font-semibold">
                            ⬇ Download Now
                        </button>

                    </div>
                </div>





                {/* <!-- System Requirements --> */}
                <h2 class="text-2xl font-bold mt-12 mb-4">System Requirements</h2>

                <div class="bg-gray-800 p-6 rounded-xl">
                    <ul class="space-y-2 text-gray-300">
                        <li>✔ OS:{app.os}</li>
                        <li>✔ Processor: {app.processor}</li>
                        <li>✔ RAM: {app.ram} GB</li>
                        <li>✔ Graphics:{app.graphics}</li>
                        <li>✔ Storage:{app.storage}</li>
                    </ul>
                </div>

            </section>
        </div>
    );
};

export default Details;