import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import AllProducts from "./pages/AllProducts";
import ReturnPolicy from "./pages/services/ReturnPolicy";
import About from "./pages/services/About";
import ContactUs from "./pages/services/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {



  return (
    <div>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/returnpolicy" element={ <ReturnPolicy /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/allproducts" element={ <AllProducts /> } />
            <Route path="/contact" element={ <ContactUs /> } />
            <Route
              path="/order"
              element={
                <ProtectedRoutesforUser>
                  <Order />
                </ProtectedRoutesforUser>
              }
            />
            <Route path="/cart" element={ <Cart /> } />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutesforUser>
                  <Dashboard />
                </ProtectedRoutesforUser>
              }
            />
            <Route path="/login" element={ <Login /> } />
            <Route path="/signup" element={ <Signup /> } />
            <Route path="/productinfo/:id" element={ <ProductInfo /> } />
            <Route
              path="/addproduct"
              element={
                <ProtectedRoutesForAdmin>
                  { " " }
                  <AddProduct />{ " " }
                </ProtectedRoutesForAdmin>
              }
            />
            <Route
              path="/updateproduct"
              element={
                <ProtectedRoutesForAdmin>
                  { " " }
                  <UpdateProduct />{ " " }
                </ProtectedRoutesForAdmin>
              }
            />
            <Route path="/*" element={ <NoPage /> } />
          </Routes>
          <ToastContainer />
        </Router>

      </MyState>
    </div>
  );
};

export default App;

//----------- Protected Routed for user --------------
export const ProtectedRoutesforUser = ( { children } ) => {
  const user = localStorage.getItem( "user" );
  if ( user )
  {
    return children;
  } else
  {
    return <Navigate to={ "/login" } />;
  }
};

// ------------ Protected route for admin ----------
export const ProtectedRoutesForAdmin = ( { children } ) => {
  const admin = JSON.parse( localStorage.getItem( "user" ) );
  console.log( admin.user.email );
  if ( admin.user.email === "arjunadmin4@gmail.com" )
  {
    return children;
  } else
  {
    return <Navigate to={ "/login" } />;
  }
};
