import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Switch from "react-switch";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "./Navbar";
import profileImage from "../images/profileIMg.jpg";
export default function Payment() {
  return (
    <div>
      <Navbar name="Payment" />
      <div className="container   ">
        <div className="row  my-3 border border-info">
          <div className="col-8">
            <div className="row ">
              <div className="col-sm-6 ">
                <div
                  className="card shadow"
                  style={{ backgroundColor: "rgb(181 226 226)" }}
                >
                  <div className="card-body">
                    <h5 className="card-title fw-bold py-1 mb-2" style={{}}>
                      Wallet Balance
                    </h5>
                    <div className="d-flex justify-content-between">
                      <div
                        className="text-center"
                        style={{
                          color: "#3A3A3A",
                          fontWeight: "500",
                          fontSize: "50px",
                        }}
                      >
                        12,000
                      </div>
                      <div
                        className="text-center"
                        style={{
                          verticalAlign: "middle",
                          color: "#3A3A3A",
                          fontWeight: "600",
                          fontSize: "40px",
                        }}
                      >
                        +13.5%
                      </div>
                    </div>
                    <div
                      className="text-left mb-3"
                      style={{ fontSize: "18px", fontWeight: "normal" }}
                    >
                      Available
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 ">
                <div
                  className="card shadow"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div className="card-body">
                    <h5 className="card-title fw-bold py-1 mb-2" style={{}}>
                      Expenses
                    </h5>
                    <div className="my-3 row">
                      <div
                        className="col"
                        style={{
                          color: "#3A3A3A",
                          fontWeight: "700",
                          fontSize: "18px",
                          // border:"2px solid yellow"
                        }}
                      >
                        <p style={{ color: "#FF6C6C" }}>
                          Spent <span className="px-2 text-dark fs-5">32%</span>
                        </p>
                        <p>
                          Earned <span className="px-2 fs-5">60%</span>
                        </p>
                        {/* <br className="py-3"/> */}
                      </div>
                      <div
                        className=""
                        style={{
                          width: "auto",
                          height: "auto",
                          maxHeight: "120px",
                          maxWidth: "120px",
                          // border:"2px solid green"
                        }}
                      >
                        <CircularProgressbar value={66} text={`${66}%`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="my-3">
                <div
                  className="card shadow"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div className="card-body">
                    <h5
                      className="card-title py-3 fw-bold py-1 mb-2 d-flex justify-content-between px-4 mx-2 "
                      style={{}}
                    >
                      <div>Last recieved</div>
                      <div>Credits</div>
                    </h5>
                    <div style={{ overflowY: "hidden", maxHeight: "300px" }}>
                      {[1, 1, 1, 3, 3, 3, 3, 3].map((data) => {
                        return (
                          <div className="my-3 d-flex justify-content-between  px-4 mx-2">
                            <div
                              className=""
                              style={{
                                color: "#3A3A3A",
                                fontWeight: "620",
                                fontSize: "18px",
                                // border:"2px solid yellow"
                              }}
                            >
                              <div className="d-flex p-0">
                                <img
                                  src={profileImage}
                                  style={{
                                    width: "auto",
                                    height: "auto",
                                    maxHeight: "50px",
                                    maxWidth: "50px",
                                  }}
                                />
                                <p className="m-0">
                                  Patrick miles <br />
                                  <span className="fw-light fs-6">
                                    13-May-2021
                                  </span>
                                </p>
                              </div>
                            </div>
                            <p
                              className="text-center"
                              style={{
                                // border:"2px solid green",
                                fontSize: "20px",
                                fontWeight: 640,
                                color: "#3A3A3A",
                              }}
                            >
                              <span
                                style={{ color: "#838383", fontSize: "25px" }}
                              >
                                +
                              </span>
                              300
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 border border-info">
            <div
              className="card shadow"
              style={{ backgroundColor: "#fffff", height: "auto" }}
            >
              <div className="card-body">
                <h5 className="card-title fw-bold py-1 d-flex justify-content-between px-2 mx-2 ">
                  <p className="m-0 ">Your cards</p>
                  <i
                    className="fa fa-plus-square-o p-0 "
                    style={{
                      fontSize: "25px",
                      fontWeight: 500,
                      color: "#838383",
                    }}
                  ></i>
                </h5>
                <div className="">
                  <div
                    className="card shadow mx-3"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgb(58 241 241),#f0feff)",
                      border: "2px solid #00ACB1",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="mx-4 card-body">
                      <h5
                        className="  "
                        style={{
                          fontStyle: "italic",
                          fontSize: "25px",
                          color: "azure",
                        }}
                      >
                        visa
                      </h5>
                      <div
                        className="py-1 fw-bold"
                        style={{ color: "#838383", fontSize: "20px" }}
                      >
                        Dr. Alex Johnson
                      </div>
                      <div
                        className="py-1"
                        style={{ color: "#838383", fontSize: "15px" }}
                      >
                        1223 4567 ****
                      </div>
                      <div
                        className="py-2  d-flex justify-content-between"
                        style={{ fontSize: "12px", color: "#838383" }}
                      >
                        <div className="pt-2">04/25</div>
                        <div
                          className=""
                          style={{ fontSize: "12px", color: "#838383" }}
                        >
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-info" id="Recievers">
                    <div className="border-danger border mx-3 my-3">
                      <h5 className="fw-bold">Recievers</h5>
                      <div className="border border-3 my-3 d-flex">
                        <button
                          className="btn border border-3 rounded-circle"
                          style={{
                            padding: "0px 13px 5px 13px",
                            fontSize: "30px",
                            color: "#838383",
                            fontWeight: "lighter",
                          }}
                        >
                          +
                        </button>
                        <div className="border border-info m-1">
                          <img
                            src={profileImage}
                            style={{
                              width: "auto",
                              height: "auto",
                              maxHeight: "50px",
                              maxWidth: "50px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
