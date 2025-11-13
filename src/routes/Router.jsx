import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PetsAndSupplies from "../pages/PetsAndSupplies";
import AddListing from "../pages/AddListing";
import ListingDetails from "../pages/ListingDetails";
import MyListings from "../pages/MyListings";
import MyOrders from "../pages/MyOrders";
import Error404 from "../pages/Error404";
import PrivateRoute from "../components/shared/PrivateRoute";

export default function Router({ setIs404 }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Pets & Supplies Pa */}
      <Route path="/pets-and-supplies" element={<PetsAndSupplies />} />
      <Route path="/category-filtered-product/:categoryName" element={<PetsAndSupplies />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/listing/:id"
        element={
          <PrivateRoute>
            <ListingDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/add-listing"
        element={
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-listings"
        element={
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-orders"
        element={
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<Error404 setIs404={setIs404} />} />
    </Routes>
  );
}
