import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import selectUserImg from "../images/selectUserImg.png";
export default function SelectUserCard() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 align-item-center smallImage" style={{ height: "" }}>
              <img
                src={selectUserImg}
                className="h-100 w-100"
                style={{
                    // maxWidth: "750px",
                    height: "100px !important",
                    // background: "rgba(203,239,239,1)",
                    width: "100%",
                    // border:"5px solid",
                    // minHeight:"300px",
                    // maxHeight:"1700px",
                    // border:"3px solid yellow"

                  }}
              />
          </div>
          <div className="col-lg-6" style={{}}>
              <div className="d-flex h-100 justify-content-center align-items-center">
            <div
              className="card text-white mb-3 mt-3"
              style={{
                maxWidth: "450px",
                height: "auto !important",
                background: "rgba(203,239,239,1)",
                width: "auto",
                minHeight:"300px",
                maxHeight:"800px"
              }}
            >
              <div className="card-body px-5">
                <div className="py-3">
                  <h5
                    className="card-title pb-4"
                    style={{ color: "#015D67", fontSize: 25 }}
                  >
                    One more step
                  </h5>
                  <div className="pb-4">
                    <h1 className="font-sm" style={{ fontSize: 60 ,fontWeight:"bold"}}>
                      <span style={{ color: "#545252" }}>Select </span>
                      <span style={{ color: "#00ACB1" }}>User</span>
                    </h1>
                    <p className="text-dark py-2 my-2">Let use know what you would to start with?</p>
                  </div>

                  <div className=" my-2 py-2">
                    <form className="" style={{}}>
                      <div class="mb-3">
                        <select
                          type="email"
                          placeholder="select"
                          className="form-control shadow"
                          id="exampleFormControlInput1"
                          defaultValue="select"
                          style={{padding:"30px 20px",borderRadius:"15px"}}
                        //   placeholder="name@example.com"
                        >
                            <option>One</option>
                            <option>TWO</option>
                            <option>THREE</option>
                        </select>
                      </div>
                      
                      <div className=" d-flex align-items-center py-4">
                        <button
                          className="btn btn-info m-auto px-2 "
                          style={{backgroundColor: "#00ACB1",color:"white" , width: 120, fontSize: 20 }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className="d-flex justify-content-around align-items-center px-4 py-4"
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
    </div>
  );
}
