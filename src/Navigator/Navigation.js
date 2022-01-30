import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AddSubscriber from "../components/AddSubscriber";
import ShowSubscriber from "../components/ShowSubscriber";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<ShowSubscriber />} />
          <Route path="Add" element={<AddSubscriber />} />
        </Routes>
      </div>
    );
  }
}

export default Navigation;
