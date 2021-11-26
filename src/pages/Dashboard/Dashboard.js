import React from "react";
import {
  BiCommentMinus,
  BiDollar,
  BiHome,
  BiListCheck,
  BiListOl,
  BiLogOut,
} from "react-icons/bi";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import AddAdmin from "./Admin/AddAdmin/AddAdmin";
import OrderList from "./Admin/OrdersList/OrderList";
import WatchList from "./Admin/WatchList/WatchList";
import AddWatch from "./Admin/AddWatch/AddWatch";
import MyOrders from "./Clients/MyOrders/MyOrders";
import Pay from "./Clients/Pay/Pay";
import SubmitReview from "./Clients/SubmitReview/SubmitReview";
import { MdAdd, MdAdminPanelSettings, MdDashboard, MdShoppingBag } from "react-icons/md";

const DashBoard = () => {
  const { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  return (
    <>
      <div className="w-full bg-indigo-600 md:h-screen md:flex">
        <div className="bg-gray-50 w-full md:w-1/6 fixed md:relative md:flex-col flex justify-around md:justify-start">
          <button
            title="Go Home"
            onClick={goHome}
            className=" px-3 flex items-center justify-center text-indigo-300 font-semibold py-4 my-3  md:justify-start"
          >
            <BiHome className="text-xl" />
            <span className="ml-3 hidden md:block">Go Home</span>
          </button>
          {admin ? (
            <>
              {/* Admin Routers */}
              <NavLink
                title="Dashboard"
                to={`${url}`}
                className="px-3 flex items-center justify-center text-red-500 font-semibold py-4 my-3 md:shadow-md md:justify-start"
                activeClassName="text-red-500"
              >
                <MdDashboard className="text-xl" />
                <span className="ml-3 hidden md:block">Dashboard</span>
              </NavLink>
              <NavLink
                title="All Watches"
                to={`${url}/all_watches`}
                activeClassName="text-indigo-600"
                className=" px-3  flex items-center justify-center py-4 my-3 md:shadow-md md:justify-start"
              >
                <MdShoppingBag className="text-xl" />
                <span className="ml-3 hidden md:block">All Watches</span>
              </NavLink>
              <NavLink
                title="Add Watch"
                to={`${url}/add_watch`}
                activeClassName="text-indigo-600"
                className=" px-3  flex items-center justify-center py-4 my-3 md:shadow-md md:justify-start"
              >
                <MdAdd className="text-xl" />
                <span className="ml-3 hidden md:block">Add Watch</span>
              </NavLink>
              <NavLink
                title="Add Admin"
                to={`${url}/add_admin`}
                activeClassName="text-indigo-600"
                className=" px-3  flex items-center justify-center py-4 my-3 md:shadow-md md:justify-start"
              >
                <MdAdminPanelSettings className="text-xl" />
                <span className="ml-3 hidden md:block">Add Admin</span>
              </NavLink>

              <NavLink
                title="Manage Order"
                to={`${url}/manage_orders`}
                activeClassName="text-indigo-600"
                className=" px-3  flex items-center justify-center py-4 my-3 md:shadow-md md:justify-start"
              >
                <BiListOl />
                <span className="ml-3 hidden md:block">Manage Order</span>
              </NavLink>
            </>
          ) : (
            <>
              {/* User Routers */}
              <NavLink
                title="Dashboard"
                to={`${url}/my_orders`}
                className=" px-3 flex items-center justify-center text-red-500 font-semibold py-4 my-3 md:shadow-md md:justify-start"
                activeClassName="text-red-500"
              >
                <MdDashboard className="text-xl" />
                <span className="ml-3 hidden md:block">Dashboard</span>
              </NavLink>

              <NavLink
                title="My Orders"
                to={`${url}/my_orders`}
                activeClassName="text-indigo-600"
                className=" px-3  flex items-center justify-center py-4 my-3 md:shadow-md md:justify-start"
              >
                <BiListCheck className="text-xl" />

                <span className="ml-3 hidden md:block">My Orders</span>
              </NavLink>
              <NavLink
                title="Add Review"
                to={`${url}/add_review`}
                activeClassName="text-indigo-600"
                className="px-3  flex items-center justify-center py-4 my-3 md:shadow-md  md:justify-start"
              >
                <BiCommentMinus className="text-xl" />
                <span className="ml-3 hidden md:block">Add Review</span>
              </NavLink>
              <NavLink
                title="Pay"
                to={`${url}/pay`}
                activeClassName="text-indigo-600"
                className=" px-3  flex items-center justify-center py-4 my-3 md:shadow-md md:justify-start"
              >
                <BiDollar className="text-xl" />

                <span className="ml-3 hidden md:block">Pay</span>
              </NavLink>
            </>
          )}
          <button
            title="Log Out"
            href="/"
            onClick={logOut}
            className=" px-3  flex items-center justify-center py-4 my-3 md:shadow-md font-semibold text-red-600 md:justify-start"
          >
            <BiLogOut className="text-xl" />
            <span className="ml-3 hidden md:block">Log Out</span>
          </button>
        </div>

        <div className="dashboardContent overflow-auto bg-indigo-600 pt-20 md:pt-10 min-h-screen h-auto w-full">
          <Switch>
            {/* Admin Routers */}
            <Route exact path={path}>
              {admin ? <WatchList /> : <MyOrders />}
            </Route>
            <Route path={`${path}/all_watches`}>
              <WatchList />
            </Route>
            <Route path={`${path}/add_watch`}>
              <AddWatch />
            </Route>
            <Route path={`${path}/add_admin`}>
              <AddAdmin />
            </Route>
            <Route path={`${path}/manage_orders`}>
              <OrderList />
            </Route>

            {/* User Routers */}
            <Route path={`${path}/pay`}>
              <Pay />
            </Route>
            <Route path={`${path}/add_review`}>
              <SubmitReview />
            </Route>
            <Route path={`${path}/my_orders`}>
              <MyOrders />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
