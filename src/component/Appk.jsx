import React from 'react';
import { Link, Links } from 'react-router';

const Appk = ({ app }) => {

    const { id, title, description, coverPhoto, ratings,  } = app;
    console.log(app)
    return (
        <div>



            <Link to={`/details/${id}`}>
                <div className="card bg-base-100 w-96 shadow-sm ">
                    <figure>
                        <img className='w-full h-64 object-cover' 
                            src={coverPhoto}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex gap-2"><img src={'https://i.ibb.co.com/3YdrfN8k/fi-18110198.png'} alt="" className='w-4 h-4' /><span>  <Link href={""}> <button Link="">downlord</button></Link>  </span>  </span>
                            <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded flex items-center gap-2">
                                <img src={'https://i.ibb.co.com/sv4h3zmJ/icon-ratings.png'} alt="" className='w-4 h-4' />
                                <span>{ratings}</span>
                            </span>
                        </div>



                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Appk;