import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Navbar from "./Navbar";

export default function Delivery() {
  return (
    <div>
      <Navbar name="Delivery" />
      <div className="container-fluid" style={{}}>
        <Table className="table " style={{}}>
          <Thead className="" style={{ borderBottom: "15px solid #E2E2E2" }}>
            <Tr className="mt-4 " style={{}}>
              <Th
                className="col col-md col-sm col-xl fs-3 fw-bold m-0 py-2"
                style={{ color: "#838383" }}
              >
                Products
              </Th>
              <Th
                className="col col-md col-sm col-xl fs-3 fw-bold m-0 py-2"
                style={{ color: "#838383" }}
              >
                Status
              </Th>
              <Th
                className="col col-md col-sm col-xl fs-3 fw-bold m-0 py-2"
                style={{ color: "#838383" }}
              >
                Pickup
              </Th>
              <Th
                className="col col-md col-sm col-xl fs-3 fw-bold m-0 py-2"
                style={{ color: "#838383" }}
              >
                Return
              </Th>
              <Th
                className="col col-md col-sm col-xl fs-3 fw-bold m-0 py-2"
                style={{ color: "#838383" }}
              >
                Company
              </Th>
              <Th
                className="col col-md col-sm col-xl fs-3 fw-bold m-0 py-2"
                style={{ color: "#838383" }}
              >
                Date
              </Th>
              <Th
                className="col col-md col-sm col-xl fs-3 fw-bold m-0 py-2"
                style={{ color: "#838383" }}
              >
                Amount
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {[1,2,3,4].map((data)=>{
              return(
            <Tr className="" style={{borderBottom:"5px solid #E2E2E2"}}>
              <Td className="col col-md col-sm col-xl">
                <div className="d-flex flex-column ">
                  <h3 style={{ color: "#838383" }} className="m-0 ">
                    Nivera
                  </h3>
                  <h4 style={{ color: "#838383" }} className="m-0  ">
                    Order-123456
                  </h4>
                  <p style={{ color: "#838383" }} className="m-0  ">
                    last updated 2 hours
                    <br />
                    10 units 1 items
                  </p>
                </div>
              </Td>
              <Td className="col col-md col-sm col-xl" style={{verticalAlign: "middle"}}>
              <div className="d-flex h-100 " >
              <button
                style={{
                  backgroundColor: "#9AD8D8",
                  color: "#838383",
                  fontWeight: 600,
                  borderRadius:"10px",
                  
                //   margin: "40px 0px !important"
                }}
                className="btn px-4  py-1"
              >
                Fullfilled
              </button>
                  </div>
              </Td>
              <Td className="col col-md col-sm col-xl" style={{alignContent: "center",verticalAlign: "middle"}}>
                  <div style={{color:"#838383"}} >
                    <time>10.07.2021 <span className="fw-bold">10:07</span></time>
                    <div className=""><i class="p-0 fa fa-map-marker" style={{fontSize:"16px",color:"#00ACB1"}}></i>Delhi</div>
                  </div>
              </Td>
              <Td className="col col-md col-sm col-xl" style={{alignContent: "center",verticalAlign: "middle"}}>
                  <div style={{color:"#838383"}} >
                    <time>10.07.2021 <span className="fw-bold">10:07</span></time>
                    <div className=""><i class="p-0 fa fa-map-marker" style={{fontSize:"16px",color:"#00ACB1"}}></i>Delhi</div>
                  </div>
              </Td>
              <Td className="col col-md col-sm col-xl" style={{alignContent: "center",verticalAlign: "middle"}}>
                  <div style={{color:"#838383"}} >
                    <p className="fs-4">D-card</p>
                    </div>
              </Td>
              <Td className="col col-md col-sm col-xl" style={{alignContent: "center",verticalAlign: "middle"}}>
                  <div style={{color:"#838383"}} >
                    <date className="fs-5">Date</date>
                    </div>
              </Td>
              <Td className="col col-md col-sm col-xl" style={{alignContent: "center",verticalAlign: "middle"}}>
                  <div style={{color:"#838383"}} >
                    <p className="fs-5">Total <span className="fw-bold">233/-</span></p>
                    </div>
              </Td>
            </Tr>
             )})}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
