import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Appk from './Appk';
const appPromise = fetch("/homeApp.json").then(res => res.json());
const Game = () => {
    const homeApp = use(appPromise);
    // const { user } = use(AuthContext);
    return (
        <div>
            <section className='py-16 px-4'>
                <div className='container mx-auto'>
                    <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Enjoy Your Games</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Game;
