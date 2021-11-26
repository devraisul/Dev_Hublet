import axios from "axios";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useHistory } from "react-router";

const WatchTable = (props) => {

  const history = useHistory();
    const deleteWatch = (id) => {

      if (window.confirm('Are you sure to delete this watch?')) {
        axios.delete(`https://stark-anchorage-34193.herokuapp.com/watchs/${id}`).then((res) => {
            history.go();
        });
      } else {
        console.log('canceled');
      }
        
      }

  const { _id, Watch_Name, imgURL, Description,price } = props.watch;
  return (


<tr className="bg-white">
      <td className="p-3">
        <div className="flex align-items-center">
          <img
            className="rounded-full h-12 w-12  object-cover"
            src={imgURL}
            alt=""
          />
          <div className="ml-3 flex text-left justify-center items-center">
            <div className=" font-bold text-gray-900">{Watch_Name}</div>

          </div>
        </div>
      </td>
      <td className="p-3"><div className="text-black">{Description.slice(0, 30)}...</div></td>
      <td className="p-3 font-bold text-gray-900 px-2">{price}.00$</td>
      <td className="p-3 font-bold text-gray-900 px-2"></td>
      
      <td className="p-3 text-gray-900">
      <button title='delete' onClick={() => {
              deleteWatch(_id)
            }} className='text-xl'>
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

export default WatchTable;
