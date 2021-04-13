import React, { useEffect, useState } from "react";
import axios from "axios";
import {NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Navbar() {
  let colors = {
    color: "#17a2b8",
  };
  let bcolors = {
    backgroundColor: "#17a2b8",
  };

  return (
   
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <a className="navbar-brand" href="#">
          Grocery <b style={colors}>Store</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify content-start"
          id="navbarCollapse"
        >
          <div className="navbar-nav">
            <Link to="/home" className="nav-item nav-link">
              Home
            </Link>
            <a href="/categoryDashboard" className="nav-item nav-link">
              Category
            </a>
            
              <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
               
                  <NavDropdown.Item href="/customerDashboard">CustomerDashboard</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/AdminDashboard">Admin dashboard </NavDropdown.Item>
                  </NavDropdown>
              

            <a href="#" className="nav-item nav-link active">
              OrderList
            </a>
            <a className="nav-link disabled" href="#">
              Cart
            </a>
            <a href="#" className="nav-item nav-link active">
              Contact Us
            </a>
          </div>
          <form className="navbar-form form-inline"></form>

          <div className="navbar-nav ml-auto action-buttons">
            <div className="nav-item dropdown show"></div>
            <a
              href="#"
              data-toggle="dropdown"
              className="nav-link dropdown-toggle mr-4"
              aria-expanded="true"
            >
              Login
            </a>

            <div className="nav-item dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                className="btn btn-primary dropdown-toggle sign-up-btn"
                aria-expanded="false"
                style={bcolors}
              >
                Sign up
              </a>
              <div className="dropdown-menu action-form"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="search-box-wrapper">
        <div className="input-group search-box search-box">
          <input
            type="text"
            id="search"
            class="form-control"
            placeholder="Search products.."
          />
          <button
            className="u-margin-left-20 btn btn-outline-info my-2 my-sm-0"
            type="submit"
          >
            Search   </button>
        </div>
      </div> */}
      <form className="text-center text-md-right">
  <div  className="input-group search-box-wrapper">    
  <input type="text" id="search"class="bi bi-search" class="form-control" placeholder="Search products.."/>
  <Link to={`/viewProductByCategory/$`} className="btn btn-lg btn-info"  type="submit">search</Link>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
  </div>
  </form>
    </>
  );
}

export default Navbar;