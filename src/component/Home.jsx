import React, { use } from "react";
import Appk from "./Appk";
import { AuthContext } from "../Provider/AuthProvider";

const appPromise = fetch("/homeApp.json").then((res) => res.json());

const Home = () => {
    const homeApp = use(appPromise);
    // const { user } = use(AuthContext);

    return (
        <div className="pb-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">

            
            <section
                className="max-w-6xl mx-auto px-4 py-10"
                data-aos="zoom-in"
                data-aos-duration="1200"
            >
                {/* <p className="text-right text-gray-400 text-sm">
                    {user && user.email}
                </p> */}

                <div className="carousel w-full rounded-xl overflow-hidden shadow-[0_0_25px_rgba(255,0,255,0.3)]">
                
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co/S7vXh2TT/FQVBS-x-X0-AQNi80.jpg"
                            className="w-full object-cover"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

            
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co/JFC1ympY/free-fortnite-winter-christmas-game-banner-photoshop-template-990x330.jpg"
                            className="w-full object-cover"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co/99kKh8Q3/free-esports-competition-video-game-themed-banner-psd-template.jpg"
                            className="w-full object-cover"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

            
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co/FbGCzxGm/istockphoto-1308185301-170667a.jpg"
                            className="w-full object-cover"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-extrabold text-center mb-4 text-purple-300 drop-shadow-md tracking-wide">
                        Trending Apps
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {homeApp.slice(0, 3).map((app) => (
                            <div
                                key={app.id}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay={app.id * 100}
                                className="hover:scale-[1.02] transition-transform duration-300"
                            >
                                <Appk app={app}></Appk>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        
            <section className="py-16 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 shadow-inner">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
                            Join the Crew
                        </h2>
                        <p className="text-purple-200 mt-3">
                            Updates, drops, new releases — directly to your inbox.
                        </p>

                        <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-purple-500 text-white focus:ring-2 focus:ring-purple-300 outline-none"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-black/60 text-white font-semibold rounded-lg border border-purple-400 hover:bg-black/80 transition shadow-[0_0_15px_rgba(255,0,255,0.4)]"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className="text-xs text-purple-200 mt-3 opacity-80">
                            Zero spam. Leave anytime.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
