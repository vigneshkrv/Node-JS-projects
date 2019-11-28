import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const login = () => {
    return (
    
       <div className="Login-component">
           <img src={"https://cdn.vox-cdn.com/thumbor/AhMT8thvxo5vMferw_wf8Hg4NMM=/0x0:3912x2388/1200x800/filters:focal(1644x882:2268x1506)/cdn.vox-cdn.com/uploads/chorus_image/image/65516135/COMED_10XX19_2.0.jpg"} alt="bg" class="bg"></img>
          <div className="log1 container align-items-center">
            <Row className="justify-content-md-center pt-5"><h1>Login</h1></Row>
            <div style={{marginRight:90}}>
                <Row className="justify-content-md-center mt-4"> 
                <Col lg='2'><label className>Username:</label></Col>
                <Col lg='2'><input type="text" className="p-1"/></Col>
                </Row>
                <Row className="justify-content-md-center mt-4"> 
                <Col lg='2'><label>password:</label></Col>
                <Col lg='2'><input type="password"className="p-1"/></Col>
                </Row>
                <Row className="justify-content-md-center mt-4" style={{marginLeft:90}}> 
                <Col sm lg='3'><Link to="/home"><Button variant="primary">Log In</Button></Link></Col>
                </Row>
            </div>
       </div>
       </div>
    );
}
 
export default login;