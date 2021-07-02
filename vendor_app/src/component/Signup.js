import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import SignupImg from "../images/signup.png";
export default function Signup() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mx-5">
          <div
            className="col-lg-6 align-item-center"
            style={{height:"" }}
          >
            <figure
              className="border border-5 "
              style={{ height: "100%", width: "auto" }}
            >
              <img src={SignupImg}  style={{
                  width:"100%",
                //   maxWidth: "700px",
                    height: "auto",   
              }} />
            </figure>
          </div>
          <div className="col-lg-6 col-sm-12"style={{}}>
            <div
              className="card text-white mb-3 mt-5 mx-auto"
              style={{
                //   border:"2px solid blue",
                maxWidth: "450px",
                height: "auto",
                maxHeight:"fit-content",
                background: "rgba(203,239,239,1)",
              }}
            >
              <div className="card-body px-5" >
                <div className="py-3">
                  <h5
                    className="card-title pb-4"
                    style={{ color: "#015D67", fontSize: 25 }}
                  >
                    sign up
                  </h5>
                  <div className="pb-4">
                    <h1 className="fs-1" style={{ fontSize: 55 }}>
                      <span style={{ color: "#015D67" }}>Hi,</span>
                      <span style={{ color: "#00ACB1" }}>Welcome!</span>
                    </h1>
                    <p style={{ color: "#015D67" }}>
                      Let's get you started ! Enter your mobile number
                    </p>
                  </div>
                  <div className=" my-2 py-2">
                    <form className="" style={{maxWidth:"auto"}}>
                      <div className="card shadow py-3 mb-4" style={{borderRadius:"10px"}}>
                        <PhoneInput
                          defaultCountry="IN"
                          placeholder="Enter phone number"
                          // value={value}
                          style={{ border: "white !important" ,padding:"0px 40px"}}
                          // onChange={setValue}
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
                <div className="d-flex justify-content-around align-items-center px-4 py-5" id="icons">
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
