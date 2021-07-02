import React from 'react'
import Signup from './component/Signup'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Otp from './component/Otp';
import Login from './component/Login';
import Getlink from './component/GetLink';
import Dashboard from './component/Dashboard';
import Form from './component/Form';
import SelectUserCard from './component/SelectUserCard';

export default function Routes() {
    return (
        <div>
        <Router>
            <Switch>
              <Route exact path='/signup' component={Signup}></Route>
              <Route exact path='/otp' component={Otp}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/getlink' component={Getlink}></Route>
              <Route exact path='/dashboard' component={Dashboard}></Route>
              <Route exact path='/form' component={Form}></Route>
              <Route exact path='/selectuser' component={SelectUserCard}></Route>
            </Switch>
       </Router>
        </div>
    )
}
