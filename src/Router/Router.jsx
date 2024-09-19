import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Err from '../Pages/Err';
import SingleProductPage from '../Pages/SingleProductPage';
import MainProduct from '../Pages/MainProduct';
import FAQPage from '../Pages/FAQPage'; 
import ContactPage from '../Pages/ContactPage'; 
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';
import Footer from '../Pages/Footer';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/MainProduct" element={<MainProduct />} />
    <Route path="/product/:id" element={<SingleProductPage />} />
    <Route path="/FAQ" element={<FAQPage />} /> {/* Add route for FAQ page */}
    <Route path="/CONTACT" element={<ContactPage />} /> {/* Add route for Contact page */}
    <Route path='/login' element={<LoginPage/>}/>
    <Route path="/signup" element={<SignupPage />} />
    <Route path="*" element={<Err />} />
  </Routes>
);

export default MainRouter;
