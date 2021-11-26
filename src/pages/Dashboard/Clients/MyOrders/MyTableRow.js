import axios from "axios";
import React from "react";
import { MdDelete} from "react-icons/md";
import { useHistory } from "react-router";

const MyTableRow = (props) => {
  const {_id,photoURL,email,address,name,phone,price,status,Watch_Name,imgURL}=props.order
const history = useHistory();
  const deleteOrder = (id) => {
    if (window.confirm('Are you sure to delete this Watchs?')) {
      axios.delete(`https://stark-anchorage-34193.herokuapp.com/orders/${id}`).then((res) => {
        history.go();
    });
    } else {
      console.log('canceled');
    }
  };

  console.log(props.order);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12">
            <img className="h-12 w-12 rounded-full" src={photoURL} alt="" />
          </div>
          <div className="ml-4 text-left">
            <div className="text-sm font-medium text-gray-900">
              Name: {name}
            </div>
            <div className="text-sm text-gray-500">Email: {email}</div>
            <div className="text-sm text-gray-500">Address: {address}</div>
            <div className="text-sm text-gray-500">Phone: {phone}</div>
            <div className="text-sm text-gray-500">Price: {price}</div>
            {
              status === 'done' ? (<div className="text-sm  text-green-500 ">Status: {status}</div>): (<div className="text-sm  text-yellow-500 ">Status: {status}</div>)
            }
            
            
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12">
            <img className="h-12 w-12 rounded-full" src={imgURL} alt="" />
          </div>
          <div className="ml-4 text-left">
            <div className="text-lg font-medium text-gray-300">
              Product Name: <span className='text-textPrimary'>{Watch_Name}</span> 
            </div>
          </div>
        </div>
      </td>
      <td className="py-4 whitespace-nowrap h-full text-right text-sm font-medium">
        <div className="flex items-center justify-around">
          
          <button
            onClick={() => {
              deleteOrder(_id);
            }}
            className="text-xl text-red-600"
          >
            <MdDelete />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyTableRow;
