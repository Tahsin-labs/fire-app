import React from "react";

const AboutUs = () => {
    return (
        <section className="bg-[#0d0f16] text-gray-300 py-16 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-4">
                    About Us
                </h2>

                {/* Intro */}
                <p className="text-lg leading-relaxed mb-8">
                    We are a small team of developers, artists, and storytellers
                    who believe that games are more than entertainment — they are
                    digital worlds where imagination is allowed to breathe. Our goal
                    is to create a space where players discover new adventures, and
                    creators showcase their craft.
                </p>

                {/* Grid Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-10">

                    {/* Vision */}
                    <div className="bg-[#131620] p-6 rounded-xl shadow-lg shadow-black/40 hover:shadow-indigo-500/20 transition-all">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Our Vision
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Empower indie developers and help gamers explore unique
                            worlds crafted with passion — one project at a time.
                        </p>
                    </div>

                    {/* Team */}
                    <div className="bg-[#131620] p-6 rounded-xl shadow-lg shadow-black/40 hover:shadow-indigo-500/20 transition-all">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            The Team
                        </h3>
                        <p className="text-sm leading-relaxed">
                            A blend of coders, designers, pixel-painters, and sound
                            sculptors working together to build smooth, memorable experiences.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="bg-[#131620] p-6 rounded-xl shadow-lg shadow-black/40 hover:shadow-indigo-500/20 transition-all">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Contact Us
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Have a question, idea, or partnership in mind?
                            Drop us a message anytime:
                        </p>
                        <p className="mt-3 text-indigo-400 font-medium">tahsin@gmail.com</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
