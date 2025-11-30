import React from 'react';
import { Link } from 'react-router';

const Appk = ({ app }) => {

    const { id, title, description, coverPhoto, ratings } = app;

    return (
        <Link to={`/details/${id}`} className="block">
            <div className="card bg-base-100 w-full shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden">

                
                <figure className="h-48 sm:h-52 md:h-56 lg:h-64">
                    <img
                        className="w-full h-full object-cover"
                        src={coverPhoto}
                        alt={title}
                    />
                </figure>

            
                <div className="   bg-gray-600 card-body p-4">
                    <h2 className="card-title text-lg md:text-xl">{title}</h2>

                    <p className="text-sm text-white line-clamp-2">
                        {description}
                    </p>

                    
                    <div className="flex justify-between items-center mt-4">

                        
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex gap-2 items-center">
                            <img
                                src={'https://i.ibb.co.com/3YdrfN8k/fi-18110198.png'}
                                alt=""
                                className="w-4 h-4"
                            />
                            <button>Download</button>
                        </span>

                        
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded flex items-center gap-2">
                            <img
                                src={'https://i.ibb.co.com/sv4h3zmJ/icon-ratings.png'}
                                alt=""
                                className="w-4 h-4"
                            />
                            <span>{ratings}</span>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Appk;
