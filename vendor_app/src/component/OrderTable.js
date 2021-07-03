import React from "react";
import Navbar from "./Navbar";

export default function OrderTable() {
  return (
    <div>
      <Navbar name="Orders"/>
      <div className="container-fluid">
        <div className="row pt-2 mt-2" style={{borderBottom:"15px solid #E2E2E2"}}>
          <div className="col text-center p-0" >
            <p className="display-6 fw-bold m-0 py-2" style={{color: "#838383"}}>
              Products
            </p>
          </div>
          <div className="col text-center ">
            <p className="display-6 fw-bold m-0 py-2" style={{color: "#838383"}}>
              Requests
            </p>
          </div>
        </div>
        <div className="row" style={{borderBottom:"7px solid #E2E2E2"}}>
          <div className="col">
            <div className="d-flex flex-column mx-4">
          <h3 style={{color: "#838383"}} className="m-0 text-center">Nivera</h3>
            <h4 style={{color: "#838383"}} className="m-0 text-center ">Order-123456</h4>
            <p style={{color: "#838383"}} className="m-0 text-center ">
              last updated 2 hours
              <br />
              10 units 1 items
            </p>
          </div>
          </div>
          <div className="col">
            <div className="d-flex h-100 align-items-center my-2 mx-4 justify-content-center">
            <button style={{backgroundColor:"#9AD8D8",color:"#0000049",fontWeight:600}} className="btn mx-2 px-4  py-1 rounded-pill">Accept</button>
            <button style={{backgroundColor:"#F97272",color:"#0000049",fontWeight:600}} className="btn mx-2 px-4  py-1 rounded-pill ">Reject</button>
          </div>
          </div>
        </div>
        <div className="row" style={{borderBottom:"7px solid #E2E2E2"}}>
          <div className="col">
            <div className="d-flex flex-column mx-4">
          <h3 style={{color: "#838383"}} className="m-0 text-center">Nivera</h3>
            <h4 style={{color: "#838383"}} className="m-0 text-center ">Order-123456</h4>
            <p style={{color: "#838383"}} className="m-0 text-center ">
              last updated 2 hours
              <br />
              10 units 1 items
            </p>
          </div>
          </div>
          <div className="col">
            <div className="d-flex h-100 align-items-center my-2 mx-4 justify-content-center">
            <button style={{backgroundColor:"#9AD8D8",color:"#0000049",fontWeight:600}} className="btn mx-2 px-4  py-1 rounded-pill">Accept</button>
            <button style={{backgroundColor:"#F97272",color:"#0000049",fontWeight:600}} className="btn mx-2 px-4  py-1 rounded-pill ">Reject</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
