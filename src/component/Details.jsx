import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const Details = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [app, setApp] = useState();

    useEffect(() => {
        const found = data.find((single) => single.id == id);
        setApp(found);
    }, [data, id]);

    return (
        <>{
            app && <div className="relative w-full min-h-screen text-white">


                <div className="absolute inset-0">
                    <img
                        src={app.cover}
                        className="w-full h-full object-cover"
                        alt=""
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>


                <section className="relative z-10 max-w-5xl mx-auto pt-24 px-6 pb-20">

                    <p className="text-gray-400 mb-6 tracking-wider">Trailer</p>


                    <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                        {app.title}
                    </h1>


                    <div className="flex items-center space-x-3 text-gray-300 text-lg">
                        <span>{app.studio || "Unknown Studio"}</span>
                        <span className="text-gray-500">•</span>
                        <span>{app.genre}</span>
                        <span className="text-gray-500">•</span>

                        <span className="flex items-center">
                            ⭐⭐⭐⭐⭐
                            <span className="ml-2">{app.rating}</span>
                        </span>
                    </div>


                    <p className="mt-6 text-gray-300 leading-relaxed max-w-2xl">
                        {app.description}
                    </p>


                    <div className="flex items-center gap-4 mt-8">

                        <button className="px-6 py-3 border-2 border-white rounded-xl bg-white/10 hover:bg-white/20 transition text-lg font-semibold">
                            BUY ${app.price || "59.99"}
                        </button>

                        <button className="px-6 py-3 bg-gray-700 rounded-xl hover:bg-gray-600 transition text-lg">
                            CHOOSE EDITION
                        </button>

                        <div className="px-4 py-3 bg-gray-700 rounded-xl opacity-40">
                            ❤
                        </div>

                        <div className="px-4 py-3 bg-gray-700 rounded-xl opacity-40">
                            🛒
                        </div>
                    </div>

                    <div className="mt-10 flex items-center gap-3">
                        <div className="bg-yellow-500 text-black px-3 py-2 font-bold text-xl rounded">
                            {app.release || "16"}
                        </div>
                        <p className="text-gray-400">Violence</p>
                    </div>


                    <div className="mt-16">
                        <h2 className="text-3xl font-bold mb-4">System Requirements</h2>

                        <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 max-w-xl">
                            <ul className="space-y-2 text-gray-300">
                                <li> OS: {app.requirements.os}</li>
                                <li> Processor: {app.requirements.processor}</li>
                                <li> RAM: {app.requirements.ram} GB</li>
                                <li> Graphics: {app.requirements.graphics}</li>
                                <li> Storage: {app.requirements.storage}</li>
                            </ul>
                        </div>
                    </div>

                </section>
            </div>

        }</>
    );
};

export default Details;
