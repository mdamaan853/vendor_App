import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "./Navbar";
export default function Payment() {
  return (
    <div>
      <Navbar name="Payment" />
      <div className="container   ">
        <div className="row">
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
                  style={{ backgroundColor: "rgb(181 226 226)" }}
                >
                  <div className="card-body">
                    <h5 className="card-title fw-bold py-1 mb-2" style={{}}>
                      Expenses
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
                      <div style={{ width:"auto", height:"auto" }}>
                        <CircularProgressbar value={66} text={`${66}%`}/>
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
            </div>
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </div>
  );
}
