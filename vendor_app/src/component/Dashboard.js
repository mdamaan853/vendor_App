// import TuneIcon from '@material-ui/icons/Tune'
// import DateRangeIcon from '@material-ui/icons/DateRange';
// import VideoCallIcon from '@material-ui/icons/VideoCall';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import SettingsIcon from '@material-ui/icons/Settings';
import Navbar from "./Navbar"
import orderImg from "../images/order.png"
import historyImg from "../images/history.png"
import uploadImg from "../images/download.svg"
const Header = () => {
    // return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //         <a className="navbar-brand d-flex align-items-center m-4" href="#">
    //             <i className="fa fa-blind" style={{fontSize:"46px"}}></i>
    //             <h1>The Blind School</h1>
    //         </a>

    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon" />
    //         </button>
            
    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //             <li className="nav-item px-4">
    //             <a className="nav-link active" aria-current="page" href="#">Home</a>
    //             </li>
    //             <li className="nav-item px-4">
    //             <a className="nav-link" href="#">Profile</a>
    //             </li>
    //             <li className="nav-item px-4">
    //             <a className="nav-link" href="#">History</a>
    //             </li>
    //             <li className="nav-item px-4">
    //             <a className="nav-link" href="#">Pharmacy</a>
    //             </li>
    //             <li className="nav-item px-4 dropdown">
    //             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //                 Dropdown
    //             </a>
    //             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                 <li><a className="dropdown-item" href="#">Action</a></li>
    //                 <li><a className="dropdown-item" href="#">Another action</a></li>
    //                 <li><hr className="dropdown-divider" /></li>
    //                 <li><a className="dropdown-item" href="#">Something else here</a></li>
    //             </ul>
    //             </li> 
    //         </ul> 
    //         </div>
    //     </div>
    // </nav>
}

export default function UI() {
    return <div>
        <Navbar />
        <div className="">
            <div className="container my-4">
                {/* ==============================================  */}
                {/* ============ FIrst Row ====== =============== */}
                {/* ==============================================  */}
                <div className="row">
                    <div className="col-md-5 p-1 text-center">
                        <div className="w-50 mx-auto rounded" style={{height:"200px",backgroundColor:"#00ACB1"}}></div>
                        <h3>Name</h3>
                    </div>
                    <div className="col-md-4 p-1">
                        <div className="d-flex align-items-center rounded border mb-2" style={{backgroundColor:"rgb(203 239 239)"}}>
                            <div className="col-4 p-0 text-end">
                                <h4 className="p-3">Upload</h4>
                            </div>
                            <div className="col-8 p-0">
                                <img src={uploadImg } width="100%" alt="upload" />
                            </div>
                        </div>
                        <div className="d-flex rounded border p-4" style={{backgroundColor:"rgb(203 239 239)" }}>
                            <div className="col-12">
                                <div className="my-2 mx-4 text-center text-white p-2" style={{backgroundColor:"#00ACB1" ,borderRadius:"25px"}}>
                                    <h3>Sold</h3>
                                </div>
                            </div>
                            
                        </div>
                            
                    </div>
                    <div className="col-md-3 p-1">
                        <div className="rounded py-4" style={{backgroundColor:"#00ACB1"}}>
                            <img src={historyImg} alt="history" className="w-100" />
                            <h6 className="text-sm text-center text-white">History</h6>


                        </div>

                    </div>
                </div>


                
                {/* ==============================================  */}
                {/* ============ Second Row =============== */}
                {/* ==============================================  */}
         
                <div className="row my-2">
                    <div className="col-md-7 p-1">
                        <div className="d-flex align-items-center rounded" style={{backgroundColor:"#00ACB1",height:"100px"}}>
                            <div className="col-3"><img src={""} alt="order" width="100%" /></div>
                            <div className="col-7 text-white">
                                <h3>Payments</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 p-1">
                        <div className="d-flex p-4 my-auto rounded" style={{backgroundColor:"rgb(203 239 239)",height:"100px"}}>
                            <div className="col-12  my-auto px-4" style={{backgroundColor:"#00ACB1",borderRadius:"25px"}}>
                                <h5 className="text-white text-center py-2 ">Delivery</h5>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-md-3 p-1">
                        <div className="d-flex align-items-center rounded " style={{backgroundColor:"rgb(203 239 239)",height:"100px"}}>
                            <div className="col-4 p-3"><img src={orderImg} alt="order" width="100%" /></div>
                            <div className="col-8">
                                <h5 className="px-2 pt-2">Orders</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
}