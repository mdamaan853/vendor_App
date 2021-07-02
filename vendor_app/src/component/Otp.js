import React from "react";
import OtpInput from 'react-otp-input';
import "react-phone-number-input/style.css";
import otpImg from "../images/otp.png";
export default function Otp() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-7 col-md-6 smallImage align-item-center"
            style={{height:"" }}
          >
            <figure
              className=""
              style={{ height: "auto", width: "auto",}}
            >
              <img src={otpImg} style={{
                  width:"100%",
                //   maxWidth: "700px",
                    height: "auto",   
              }} />
            </figure>
          </div>
          <div className="col-5 col-md-6 col-sm-12 py-5 col-xs-12"style={{}}>
            <div
               className="card text-white my-auto mx-auto"
               style={{
                 maxWidth: "450px",
                 height: "auto !important",
                 background: "rgba(203,239,239,1)",
                 width: "auto",
                 minHeight:"300px",
                 maxHeight:"700px"
               }}
            >
              <div className="card-body px-5" >
                <div className="py-1">
                  <h5
                    className="card-title pb-2"
                    style={{ color: "#015D67", fontSize: 25 }}
                  >
                    sign up
                  </h5>
                  <div className="pb-2">
                    <h1 className="" style={{ fontSize: 44}}>
                      <span style={{ color: "#015D67" }}>Hi,</span>
                      <span style={{ color: "#00ACB1" }}>Welcome!</span>
                    </h1>
                    <h4 className="py-3" style={{ color: "#015D67" }}>Please enter the OTP</h4>
                  </div>
                  <div className=" my-2 py-2">
                    <form className="" style={{}}>
                      <div className="card shadow py-3 mb-4" style={{borderRadius:"10px",alignItems:"center" ,}}>
                      <OtpInput
                        // value={this.state.otp}
                        // onChange={this.handleChange}
                        numInputs={4}
                        separator={<span>:</span>}
                        className="OtpInput"
                        
                     />
                      </div>
                      <div className=" d-flex align-items-center py-4">
                        <button
                          className="btn btn-info m-auto px-2 "
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
