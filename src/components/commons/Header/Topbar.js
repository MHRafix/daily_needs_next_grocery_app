import React from "react";
import { BiLockAlt } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function Topbar() {
  return (
    <div className="topbar_wrapper">
      <div className="container_wrapper">
        <div className="grid_layout layout_two">
          <div className="annoucement_area">
            <h1 className="annoucement">
              20% cashback for all users | Code: OGOFERS13
            </h1>
          </div>
          <div className="account_area">
            <button className="btn-transparent">
              <span className="flex justify-between items-center">
                <GoLocation /> &nbsp; Your Location
              </span>
            </button>
            <button className="btn-transparent">
              <span className="flex justify-between items-center">
                <BiLockAlt /> &nbsp; Sign In
              </span>
            </button>
            <button className="btn-transparent">
              <span className="flex justify-between items-center">
                <FaUserCircle /> &nbsp; Sign Up
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
