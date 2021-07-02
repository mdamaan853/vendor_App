import React from "react";
import OtpInput from 'react-otp-input';
import "react-phone-number-input/style.css";
import getLinkImg from "../images/getLinkImg.png";
export default function Getlink() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mx-5">
          <div
            className="col-7 col-md-6 smallImage align-item-center"
            style={{height:"" }}
          >
            <figure
              className=""
              style={{ height: "auto", width: "auto",}}
            >
              <img src={getLinkImg} style={{
                  width:"100%",
                //   maxWidth: "700px",
                    height: "auto",   
              }} />
            </figure>
          </div>
          <div className="col-5 col-md-6 col-sm-12 py-5 col-xs-12"style={{}}>
            <div
               className="card text-white my-4 mx-auto"
               style={{
                 maxWidth: "400px",
                 height: "auto !important",
                 background: "rgba(203,239,239,1)",
                 width: "auto",
                 minHeight:"300px",
                 maxHeight:"800px"
               }}
            >
              <div className="card-body px-5" >
                <div className="py-1">
                  <h5
                    className="card-title pb-2"
                    style={{ color: "#015D67", fontSize: 25 }}
                  >
                    Dont't Worry
                  </h5>
                  <div className="py-4">
                    <h1 className="" style={{ fontSize: 44,fontWeight:"bold"}}>
                      <span style={{ color: "#545252" }}>Get Link</span>
                    </h1>
                  </div>
                  <div className=" my-2 py-1">
                    <form className="" style={{}}>
                      <label style={{color: "black",
                        fontWeight: "700",
                        fontSize: "20px",
                        color:"#545252"
                    }} className="py-2">
                          Enter email/phone number
                        </label>
                      {/* <div className="card shadow py-2 mb-4" style={{borderRadius:"10px",alignItems:"center" ,}}> */}
                     <input type="text" className="py-4 w-100 form-control no-border border-0 shadow" style={{borderRadius:"10px"}} />
                      {/* </div> */}
                      <div className=" d-flex align-items-center my-4 py-4">
                        <button
                          className="btn btn-info m-auto px-2 my-2 "
                          style={{width:120,fontSize:20}}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                <div className="d-flex justify-content-around align-items-center px-4 py-2" id="icons">
                    <div>
                <a href="#" className="fa fa-facebook"></a>
                </div>
                <div>
                <a href="#" className="fa fa-twitter"></a>
                </div>
                <div>
                <a href="#" className="fa fa-google"></a>
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
