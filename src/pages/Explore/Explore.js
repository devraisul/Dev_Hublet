import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCart from '../Home/Products/ProductCart';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Explore = () => {
    const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://stark-anchorage-34193.herokuapp.com/watchs")
      .then((res) => {
        setProducts(res.data.watchs);
        setIsLoading(false);
      });
  }, []);
    return (<>
    <Header/>
        <div className="min-h-screen bg-indigo-400 flex justify-center items-center py-20">
      <div className="container mx-auto p-12 bg-gray-100 rounded-xl">
        <h1 className="text-4xl uppercase font-bold from-current mb-8">
          OUR PRODUCTS
        </h1>

         <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
        {!isLoading ? ( products.length === 0 ? <div className='flex justify-center items-center text-gray-800 text-5xl'>No Data Found</div> :
              products.map((product) => (
                <ProductCart key={product._id} product={product} />
              ))
            ) : (
              <div className="flex items-center justify-center h-screen w-full ">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-borderPrimary  h-64 w-64"></div>
              </div>
            )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
    );
};

export default Explore;