import React from "react";
import { Route, Routes } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Notfound from "./pages/404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <section className="">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="/:id" element={<ProductDetails />} />          
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>

        <Footer />
      </section>
    </I18nextProvider>
  );
};

export default App;

