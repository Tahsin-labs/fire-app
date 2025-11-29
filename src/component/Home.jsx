import React, { use } from 'react';
import Appk from './Appk';
import { AuthContext } from '../Provider/AuthProvider';

const appPromise = fetch("/homeApp.json").then(res => res.json());

const Home = () => {
    const homeApp = use(appPromise);
    const { user } = use(AuthContext);

    return (
        <div className="pb-20">

            {/* Banner Section */}
            <section
                className='max-w-6xl mx-auto px-4 py-10'
                data-aos="zoom-in"
                data-aos-duration="1200"
            >
                <p className="text-right text-gray-300 text-sm">{user && user.email}</p>

                <div className="carousel w-full rounded-xl overflow-hidden shadow-lg">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co/S7vXh2TT/FQVBS-x-X0-AQNi80.jpg"
                            className="w-full"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co/JFC1ympY/free-fortnite-winter-christmas-game-banner-photoshop-template-990x330.jpg"
                            className="w-full"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co/99kKh8Q3/free-esports-competition-video-game-themed-banner-psd-template.jpg"
                            className="w-full"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://i.ibb.co/FbGCzxGm/istockphoto-1308185301-170667a.jpg"
                            className="w-full"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Game Cards Section */}
            <section className='py-16 px-4'>
                <div className='container mx-auto'>
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Trending Apps</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            homeApp.slice(0,3).map(app => (
                                <div
                                    key={app.id}
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay={app.id * 100}
                                >
                                    <Appk app={app}></Appk>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;





