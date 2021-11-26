import React from 'react';
import { NavLink } from 'react-router-dom';


const ProductCart = (props) => {
    const {_id,Watch_Name,price,imgURL,Description} = props.product;
    return (
 <div >
      <div className="bg-white  shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 ">
        <div>
          <div>
            <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-95">
              <img className="w-auto mx-auto h-56" src={imgURL} alt=''/>
              <div className="px-4 py-5">
                <h1 className="text-xl font-gray-700 font-bold">{Watch_Name}</h1>
                <div className="flex space-x-2 mt-2">
                  <h3 className="text-lg text-gray-600 font-semibold mb-2">$ {price}</h3>
                </div>
                <p className="text-sm tracking-normal truncate mb-5">{Description}</p>
                <NavLink to={`/purchase/${_id}`} className=" mb-5 px-10 w-full text-center bg-indigo-400 py-2 rounded-lg">Bye Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default ProductCart;