import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../UserLogins/Login";
import SignUp from "../UserLogins/SignUp";
import Home from "./Home";
import Menu from "../LunchOrders/Menu";
import MenuByDate from "../LunchOrders/MenuByDate";
import FillSnacks from "../VendorsDetails/FillSnacks";
import SubmittedLunch from "../VendorsDetails/SubmittedLunch";
import SubmittedSnacks from "../VendorsDetails/SubmittedSnacks";
import LunchFeedback from "../FeedBacks/LunchFeedback";
import FillContents from "../VendorsDetails/FillContents";
import FillMeal from "../VendorsDetails/FillMeal";
import Admin from "../UserLogins/Admin";

const Body = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Menu />} />
          <Route path="/menu/:date" element={<MenuByDate />} />
          <Route path="/fill-contents" element={<FillContents />} />
          <Route path="/fill-meals" element={<FillMeal />} />
          <Route path="/fill-snacks" element={<FillSnacks />} />
          <Route path="/submitted-contents" element={<SubmittedLunch />} />
          <Route path="/submitted-snacks" element={<SubmittedSnacks />} />
          <Route path="/feedback-lunch" element={<LunchFeedback />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Body;
