import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import SignupImg from "../images/signup.png";
export default function Login() {
  return ( 
    <div>
      <div className="container-fluid">
        <div className="row mx-5">
          <div className="col-lg-6 align-item-center smallImage" style={{ height: "" }}>
            <figure
              className="border border-5 "
              style={{ height: "auto", width: "auto" }}
            >
              <img
                src={SignupImg}
                style={{
                    maxWidth: "750px",
                    height: "100px !important",
                    // background: "rgba(203,239,239,1)",
                    width: "100%",
                    minHeight:"300px",
                    maxHeight:"1700px",
                    // border:"3px solid yellow"

                  }}
              />
            </figure>
          </div>
          <div className="col-lg-6" style={{}}>
            <div
              className="card text-white mb-3 mt-3 mx-auto"
              style={{
                maxWidth: "450px",
                height: "auto !important",
                background: "rgba(203,239,239,1)",
                width: "auto",
                minHeight:"300px",
                maxHeight:"700px"
              }}
            >
              <div className="card-body px-5">
                <div className="py-3">
                  <h5
                    className="card-title pb-4"
                    style={{ color: "#015D67", fontSize: 25 }}
                  >
                    Log in
                  </h5>
                  <div className="pb-4">
                    <h1 className="fs-1" style={{ fontSize: 55 }}>
                      <span style={{ color: "#545252" }}>Hi,</span>
                      <span style={{ color: "#00ACB1" }}>Good day!</span>
                    </h1>
                  </div>
                  <div className=" my-2 py-2">
                    <form className="" style={{}}>
                      <div class="mb-3">
                        <label style={{color: "black",
                        fontWeight: "700",
                        fontSize: "25px",
                        color:"#545252"
                    }} className="py-2">
                          Username
                        </label>
                        <input
                          type="email"
                          className="form-control shadow"
                          id="exampleFormControlInput1"
                          style={{padding:"30px 20px",borderRadius:"15px"}}
                        //   placeholder="name@example.com"
                        />
                      </div>
                      <div class="mb-3">
                      <label style={{color: "black",
                        fontWeight: "700",
                        fontSize: "25px",
                        color:"#545252"
                    }} className="py-2">
                          Password
                        </label>
                        <input
                        type="password"
                          className="form-control shadow"
                          id="exampleFormControlTextarea1"
                        //   placeholder="Password"
                          style={{padding:"30px 20px",borderRadius:"15px"}}
                        />
                      </div>
                      <p className="text-secondary px-2 text-decoration-underline">Trouble signing in ?</p>
                      <div className=" d-flex align-items-center py-2">
                        <button
                          className="btn btn-info m-auto px-2 "
                          style={{backgroundColor: "#00ACB1", width: 120, fontSize: 20 }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className="d-flex justify-content-around align-items-center px-4 py-1"
                    id="icons"
                  >
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
