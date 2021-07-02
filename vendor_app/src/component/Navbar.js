import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg py-4 navbar-light bg-light ">
            <div className="container-fluid ">
              <a
                className="navbar-brand py-2 d-flex align-items-center "
                href="#"
              >
                <i
                  className="fa fa-blind"
                  style={{ fontSize: "46px", color: "black" }}
                ></i>
                <h1
                  id="brand-sm"
                  className="text-center text-dark fw-bold"
                  style={{ font: "normal normal bold 42px/48px Roboto" }}
                >
                  The Blind <br />
                  School
                </h1>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item px-4">
                    <a
                      className="nav-link active text-dark"
                      aria-current="page"
                      href="#"
                      style={{
                        fontSize: "22px",
                        fontFamily: "Poppins",
                        fontWeight: "medium",
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item px-4">
                    <a
                      className="nav-link text-dark"
                      href="#"
                      style={{
                        fontSize: "22px",
                        fontFamily: "Poppins",
                        fontWeight: "medium",
                      }}
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item px-4">
                    <a
                      className="nav-link text-dark"
                      href="#"
                      style={{
                        fontSize: "22px",
                        fontFamily: "Poppins",
                        fontWeight: "medium",
                      }}
                    >
                      History
                    </a>
                  </li>
                  <li className="nav-item px-4">
                    <a
                      className="nav-link text-dark"
                      href="#"
                      style={{
                        fontSize: "22px",
                        fontFamily: "Poppins",
                        fontWeight: "medium",
                      }}
                    >
                      Pharmacy
                    </a>
                  </li>
                  <li className="nav-item px-4 dropdown">
                    <a
                      className="nav-link text-dark dropdown-toggle"
                      style={{
                        fontSize: "22px",
                        fontFamily: "Poppins",
                        fontWeight: "medium",
                      }}
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="" style={{ backgroundColor: "rgb(203 239 239)" }}>
            <div className="container">
              <div className="d-flex align-items-center justify-content-between">
                <div className="">
                  <i
                    class="fa fa-arrow-left"
                    style={{
                      padding: "5px",
                      borderRadius: "10px",
                      border: "2px solid #838383",
                      color: "#838383",
                    }}
                  ></i>
                  <span
                    id="hide-sm"
                    className="small-nav-font"
                    style={{
                      color: "#838383",
                      font: "normal normal medium 32px/48px Poppins",
                      fontSize: "26px",
                    }}
                  >
                    Dashboard
                  </span>
                </div>
                <div className="d-flex align-items-center py-2">
                  <div
                    className="bg-white ms-4 shadow"
                    style={{ color: "#00ACB1", borderRadius: "15px" }}
                  >
                    <i
                      className="fa fa-history small-nav-font"
                      style={{ fontSize: "22px", padding: "14px" }}
                    ></i>
                  </div>{" "}
                  <div
                    className="bg-white ms-4 shadow"
                    style={{ color: "#00ACB1", borderRadius: "15px" }}
                  >
                    <i
                      className="fa fa-bell small-nav-font"
                      style={{ fontSize: "22px", padding: "14px" }}
                    ></i>
                  </div>{" "}
                  <div
                    className="bg-white ms-4 shadow"
                    style={{ color: "#00ACB1", borderRadius: "15px" }}
                  >
                    <i
                      className="fa fa-history small-nav-font"
                      style={{ fontSize: "22px", padding: "14px" }}
                    ></i>
                  </div>
                  <div
                    className="bg-white ms-4 shadow"
                    style={{ color: "#00ACB1", borderRadius: "15px" }}
                  >
                    <i
                      className="fa fa-history small-nav-font"
                      style={{ fontSize: "22px", padding: "14px" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <nav className="navbar navbar-expand-lg navbar-white bg-white">
   <div className="container-fluid p-0 m-0">
    <Link className="navbar-brand "  href="#"><span className="d-flex" style={{fontSize:"1.8rem" ,color:"black" }}><i className="fa fa-blind" style={{fontSize:"46px"}}></i><p className="mb-0 text-center" style={{font: "normal normal bold 36px/40px Roboto"}}>THE BLIND<br/> SCHOOL</p></span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  d-flex justify-content-end " id="navbarText">
      <div className=" d-flex justify-content-end">
       <Link style={{color:"#838383" , font: "normal normal normal 22px/33px Poppins"}} className=" px-4 py-1 mx-2">
       Home
       </Link>
       <Link style={{color:"#838383",font: "normal normal normal 22px/33px Poppins"}} className=" px-4 py-1 mx-2">
       Profile
       </Link>
       <Link style={{color:"#838383",font: "normal normal normal 22px/33px Poppins"}} className=" px-4 py-1 mx-2">
       History
       </Link>
       <Link style={{color:"#838383", font: "normal normal normal 22px/33px Poppins"}} className=" px-4 py-1 mx-2">
       Pharmacy
       </Link>
       <button className="px-4 py-1 mx-2" style={{background:"#00ACB1",borderRadius:"10px" , color:"white" ,font: "normal normal normal 22px/33px Poppins"}}>Log in</button>
    </div>
    </div>
  </div>
</nav> */}
      </div>
    </>
  );
};

export default Navbar;
