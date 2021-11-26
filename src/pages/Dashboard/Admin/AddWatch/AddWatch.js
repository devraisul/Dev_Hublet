import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddWatch = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://stark-anchorage-34193.herokuapp.com/watchs", data).then((res) => {
      if (res.data.insertedId) {
        alert("Watch Added Successfully.");
        reset();
      }
    });
  };
  return (
    <div className='px-5 py-10'>
      <div className="text-indigo-600 flex flex-col justify-center sm:py-10">
        <div className="relative sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-2xl  mx-auto">
              <div>
                <h1 className="text-3xl mb-4 font-semibold">
                  Add New Watch
                </h1>
              </div>
              <form  onSubmit={handleSubmit(onSubmit)} className="divide-y divide-gray-200">
                <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                    {...register("Watch_Name", { required: true })}
                      autocomplete="off"
                      id="Watch_Name"
                      name="Watch_Name"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Watch Name"
                    />
                    <label
                      for="Watch_Name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Watch Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                    {...register("imgURL", { required: true })}
                      autocomplete="off"
                      id="imgURL"
                      name="imgURL"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      for="imgURL"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      ImgURL
                    </label>
                  </div>
                  <div className="relative">
                    <input
                    {...register("price", { required: true })}
                      autocomplete="off"
                      id="price"
                      name="price"
                      type="number"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      for="Price"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Price
                    </label>
                  </div>
                  <div className="relative">
                    <select
                    {...register("rating", { required: true })}
                      id="rating"
                      name="rating"
                      title="rating"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    >
                      <option value="1">⭐</option>
                      <option value="2">⭐⭐</option>
                      <option value="3">⭐⭐⭐</option>
                      <option value="4">⭐⭐⭐⭐</option>
                      <option value="5">⭐⭐⭐⭐⭐</option>
                    </select>
                    <label
                      for="rating"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Rating
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                    {...register("Description", { required: true })}
                      autocomplete="off"
                      id="Description"
                      name="Description"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Description"
                    />
                    <label
                      for="Description"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Description
                    </label>
                  </div>
                  <div className="relative">
                    <input
                    {...register("submit", { required: true })}
                      className="bg-blue-500 cursor-pointer text-white rounded-md px-2 py-1 cursor-pointerS"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWatch;
