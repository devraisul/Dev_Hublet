import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrdersTable from './OrdersTable';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      axios.get("https://stark-anchorage-34193.herokuapp.com/orders").then((res) => {
        setOrders(res.data.orders);
        setIsLoading(false);
      });
    }, []);
    return (
        
<div className="flex  justify-center min-h-screen">
	<div className="col-span-12">
		<div className="overflow-auto lg:overflow-visible ">
			<table className="table text-gray-400 border-separate space-y-6 text-sm">
				<thead className="bg-white text-gray-500">
					<tr>
						<th className="p-3">User</th>
						<th className="p-3 text-left">Price</th>
						<th className="py-3 text-left">Status</th>
						<th className="p-3 text-left">Action</th>
						<th className="p-3 text-left"></th>

					</tr>
				</thead>
				<tbody>

        {!isLoading ? (
                    orders.length === 0 ? (
                      <div className="flex justify-center items-center text-gray-800 text-5xl">
                        No Data Found
                      </div>
                    ) : (
                        orders?.map((order) => <OrdersTable key={order._id} order={order} />)
                    )
                  ) : (
                    <div className="flex items-center justify-center h-screen w-full ">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-borderPrimary  h-64 w-64"></div>
              </div>
                  )}
				</tbody>
			</table>
		</div>
	</div>
</div>
);
};

export default OrderList;