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
                            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                            className="w-full"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                            className="w-full"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                            className="w-full"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
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
            <section className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-10'>
                {
                    homeApp.map(app => (
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
            </section>

        </div>
    );
};

export default Home;
