import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Purchase = () => {
  const { user } = useAuth();
  const { _id } = useParams();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [buyWatch, setBuyWatch] = useState([]);

  useEffect(() => {
    axios
      .get(`https://stark-anchorage-34193.herokuapp.com/watchs/${_id}`)
      .then((res) => {
        setBuyWatch(res.data);
      });
  }, [_id]);

  const onSubmit = (data) => {
    axios.post("https://stark-anchorage-34193.herokuapp.com/orders", data).then((res) => {
      if (res.data.insertedId) {
        alert("Order Placed Successfully.");
        history.push("/dashboard/my_orders");
      }
    });
  }
  return (
    <>
        <Header />
    <div className="bg-white py-5 px-5 md:px-10 h-auto">
      
      {buyWatch.length !== 0 ? (
        <div className="lg:flex">
          <div className="text-gray-400 bg-white-800 w-full body-font overflow-hidden rounded-lg">
            <div className="container p-5 mx-auto">
              <div className="mx-auto flex flex-col">
                <img
                  alt="e-commerce"
                  className="w-full lg:h-auto h-44 object-cover object-center rounded"
                  src={buyWatch.imgURL}
                />
                <div className=" w-full p-5 text-left">
                  <h1 className="text-4xl title-font font-medium mb-1 flex items-center justify-between text-indigo-500">
                    {buyWatch.Watch_Name}
                    <span className="title-font font-medium text-3xl text-black">
                     $ {buyWatch.price}
                      
                    </span>
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="mb-1 w-4 h-4 text-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="ml-1">{buyWatch.rating} Rating</span>
                    </span>
                  </div>
                  <p className="leading-relaxed">{buyWatch.Description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full mt-10 lg:mt-0  flex justify-center items-start"
          >
            <div className="text-left md:w-2/3 text-black bg-white-800 rounded-lg p-8 flex flex-col relative z-10 shadow-lg">
              <h2 className="text-textPrimary text-3xl mb-12 text-center font-medium title-font">
                Place Order
              </h2>
              <div className="flex justify-between">
                <div className="relative mb-4 mr-1 w-1/2">
                  <input
                    {...register("imgURL", { required: true })}
                    className="hidden"
                    value={`${buyWatch.imgURL}`}
                    type="text"
                  />
                  <input
                    {...register("photoURL", { required: true })}
                    className="hidden"
                    value={`${user.photoURL}`}
                    type="text"
                  />

                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Your Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    defaultValue={`${user.displayName}`}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="ml-1 relative mb-4 w-1/2">
                  <label
                    htmlFor="Watch_Name"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Destination
                  </label>
                  <input
                    {...register("Watch_Name", { required: true })}
                    value={`${buyWatch.Watch_Name}`}
                    type="text"
                    id="Watch_Name"
                    name="Watch_Name"
                    className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-800"
                >
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  defaultValue={user.email}
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="address"
                  className="leading-7 text-sm text-gray-800"
                >
                  Address
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="Your Address"
                  id="address"
                  name="address"
                  className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="number"
                  className="leading-7 text-sm text-gray-800"
                >
                  Mobile Number
                </label>
                <input
                  {...register("number", { required: true })}
                  type="number"
                  placeholder="Mobile"
                  id="Number"
                  name="number"
                  className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="price"
                  className="leading-7 text-sm text-gray-800"
                >
                  Price
                </label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  value={`${buyWatch.price}`}
                  id="price"
                  name="price"
                  className="w-full bg-gray-800 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <input
              {...register("status", { required: true })}
                type="text"
                value="pending"
                id="status"
                name="status"
                className="hidden"
              />
              <input
                type="submit"
                value="Place Order"
                className="cursor-pointer text-black bg-bgPrimary border-0 py-2 px-6 bg-indigo-500 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              />
            </div>
          </form>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen w-full ">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-borderPrimary  h-64 w-64"></div>
        </div>
      )}
      
    </div>
    <Footer />
    </>
  );
};
export default Purchase;
