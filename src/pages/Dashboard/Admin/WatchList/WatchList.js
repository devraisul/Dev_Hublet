import axios from "axios";
import React, { useEffect, useState } from "react";
import WatchTable from "./WatchTable";

const WatchList = () => {
  const [watch, setWatch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://stark-anchorage-34193.herokuapp.com/watchs").then((res) => {
      setWatch(res.data.watchs);
      setIsLoading(false);
    });
  }, []);

  return (
<div className="flex px-5 justify-center min-h-screen">
	<div className="col-span-12">
		<div className="overflow-auto lg:overflow-visible ">
			<table className="table text-gray-400 border-separate space-y-6 text-sm">
				<thead className="bg-white text-gray-500">
					<tr>
						<th className="p-3">Product Name</th>
						<th className="p-3 text-left">Description</th>
						<th className="p-3 text-left">Price</th>
						<th className="p-3 text-left"></th>
						<th className="p-3 text-left">Action</th>
					</tr>
				</thead>
				<tbody>

        {!isLoading ? (
                  watch.length === 0 ? (
                    <div className="flex justify-center items-center text-white text-5xl">
                      No Data Found
                    </div>
                  ) : (
                    watch?.map((watch) => <WatchTable key={watch._id} watch={watch} />)
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

export default WatchList;
