import React, { use } from 'react';
import Appk from './Appk';

const appPromise = fetch("/homeApp.json").then(res => res.json());

const Game = () => {
    const homeApp = use(appPromise);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pb-20">


            <section className="py-16 px-4">
                <div className="container mx-auto">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-purple-300 drop-shadow-lg tracking-wide">
                        Enjoy Your Games
                    </h2>

                
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {homeApp.map(app => (
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

        </div>
    );
};

export default Game;
