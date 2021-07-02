import React from 'react'
import Navbar from './Navbar'
export default function Form() {
    return (
        <div>
            <div className="container-fluid ">
                <Navbar/>
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                    <div className="card" style={{height:"200px",width:"200px",  border:"2px solid #00ACB1",}}>
                    </div> 
                       <p className="text-center " style={{fontSize:"23px" ,fontWeight:"medium"}}>Amaan</p>
                </div>
                </div>
                <div className="col px-5 ">
                    <div  className="py-1">
                    <form>
                        <div>
                        <label className="py-1">Name</label>
                    <input style={{backgroundColor:"#9AD8D8" , border:"2px solid #00ACb1",borderRadius: "10px",
opacity: "0.5"}} className="py-3 form-control form-control-lg" type="text"  aria-label=".form-control-lg example"/>
                    </div>
                    <div className="row">
                    <div className="col">
                    <label className="py-1">Email</label>
                    <input style={{backgroundColor:"#9AD8D8" , border:"2px solid #00ACb1",borderRadius: "10px",
opacity: "0.5"}} className="py-3 form-control" type="text" aria-label="default input example"/>
                    </div>
                    <div className="col ">
                    <label className="py-1">Mobile no.</label>
                    <input style={{backgroundColor:"#9AD8D8" , border:"2px solid #00ACb1",borderRadius: "10px",
opacity: "0.5"}} className="py-3 form-control form-control-sm" type="text"  aria-label=".form-control-sm example"/>
                    </div>
                    </div>
                    <div>
                        <label className="py-1">Address</label>
                    <input style={{backgroundColor:"#9AD8D8" , border:"2px solid #00ACb1",borderRadius: "10px",
opacity: "0.5"}} className="py-3 form-control form-control-sm" type="text"  aria-label=".form-control-sm example"/>
                    </div>
                    <div>
                        <label className="py-1">Shop licence/Ownership document</label>
                    <input style={{backgroundColor:"#9AD8D8" , border:"2px solid #00ACb1",borderRadius: "10px",
opacity: "0.5"}} className="py-3 form-control form-control-sm" type="text"  aria-label=".form-control-sm example"/>
                    </div>
                    <div>
                        <label className="py-1">Shop licence/Ownership document</label>
                    <input style={{backgroundColor:"#9AD8D8" , border:"2px solid #00ACb1",borderRadius: "10px",
opacity: "0.5"}} className="py-3 form-control form-control-sm" type="text"  aria-label=".form-control-sm example"/>
                    </div>
                    <div>
                        <label className="py-1">Shop licence/Ownership document</label>
                    <input style={{backgroundColor:"#9AD8D8" , border:"2px solid #00ACb1",borderRadius: "10px",
opacity: "0.5"}} className="py-3 form-control form-control-sm" type="text"  aria-label=".form-control-sm example"/>
                    </div>
                    <div>
                        <label className="py-1">Shop licence/Ownership document</label>
                    <input style={{backgroundColor:"#9AD8D8" , border:"2px solid #00ACb1",borderRadius: "10px",
opacity: "0.5"}} className="py-3 form-control form-control-sm" type="text"  aria-label=".form-control-sm example"/>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
