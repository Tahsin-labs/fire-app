import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#0a0a0f] text-gray-300 py-12 px-6 mt-20 border-t border-gray-700/40">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                   
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-wider text-white">
                            TahsinLAB...<span className="text-blue-500">.</span>
                        </h2>
                        <p className="text-sm opacity-70 mt-3 leading-relaxed">
                            GameHub is a platform where players can explore indie games,
                            view details, and download titles from passionate developers.
                        </p>
                    </div>

                  
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
                            <li><a href="/game" className="hover:text-blue-400 transition">Games</a></li>
                            <li><a href="/profile" className="hover:text-blue-400 transition">My Profile</a></li>
                            <li><a href="/login" className="hover:text-blue-400 transition">Login</a></li>
                        </ul>
                    </div>

                  
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
                        <p className="text-sm opacity-70 leading-relaxed mb-4">
                            We aim to support small developers by showcasing unique and creative games.
                            Our goal is to make discovering new titles simple and enjoyable.
                        </p>

                        <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
                        <ul className="text-sm opacity-80 space-y-1">
                            <li>Email: tahsin@gail.com</li>
                            <li>Phone: 01634904690</li>
                            <li>Address: Chittagong, Bangladesh</li>
                        </ul>
                    </div>

                </div>

               
            </footer>

        </div>
    );
};

export default Footer;