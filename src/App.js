import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
// import { About } from "./components/About";
import Navbar from "./components/Navbar";
import OrderConfirm from "./components/OrderConfirm";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeatureProducts from "./components/FeatureProducts";
import NewProducts from "./components/NewProducts";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import Admin from "./components/Admin";
const LazyAbout = React.lazy(()=> import('./components/About'))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={
          <React.Suspense fallback='loading ....'>
             <LazyAbout />
          </React.Suspense>
        }></Route>
        <Route path="order-cofirmed" element={<OrderConfirm />}></Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<FeatureProducts />} />
          <Route path="feature" element={<FeatureProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
