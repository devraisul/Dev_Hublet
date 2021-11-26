import axios from "axios";
import React from "react";
import { MdDelete, MdDoneAll } from "react-icons/md";
import { useHistory } from "react-router";

const OrdersTable = (props) => {
  const history = useHistory();

  const done = (id) => {
    if (window.confirm("Are you sure this order is done?")) {
      axios.put(`https://stark-anchorage-34193.herokuapp.com/orders/done/${_id}`).then((res) => {
        history.go();
      });
    } else {
      console.log("canceled");
    }
  };
  const deleteOrder = (id) => {
    if (window.confirm("Are you sure to delete this order?")) {
      axios.delete(`https://stark-anchorage-34193.herokuapp.com/orders/${_id}`).then((res) => {
        history.go();
      });
    } else {
      console.log("canceled");
    }
  };

  const {
    _id,
    imgURL,
    name,

    address,
    number,
    status,
    price,
  } = props.order;

  return (
    <tr className="bg-white">
      <td className="p-3">
        <div className="flex align-items-center">
          <img
            className="rounded-full h-12 w-12  object-cover"
            src={imgURL}
            alt=""
          />
          <div className="ml-3 text-left">
            <div className="text-black font-bold">{name}</div>
            <div className="text-gray-400">{number}</div>
            <div className="text-gray-400">{address}</div>
          </div>
        </div>
      </td>

      <td className="p-3 font-bold">{price}.00$</td>
      <td className="py-3">
        {status === 'pending' ? (
          <span className="bg-yellow-300 text-gray-50 rounded-md px-2">
          {status}
        </span>
        ) : (
          <span className="bg-green-400 text-gray-50 rounded-md px-2">
          {status}
        </span>
        )}
        
      </td>
      <td className="p-3 ">
        {!props.isSingleUser && (
          <button
            onClick={done}
            className="text-black hover:text-gray-700 mr-2"
          >
            <MdDoneAll />
          </button>
        )}

        <button
          onClick={deleteOrder}
          className="text-black hover:text-gray-700  ml-2"
        >
          <MdDelete />
        </button>
      </td>
      <td></td>
    </tr>
  );
};

export default OrdersTable;
