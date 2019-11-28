import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import Login from './components/Login'
import Home from './components/Home';
import Friends from './components/Friends';
import Jobs from './components/Jobs';
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from "react-router";

const Header = props => {
  const { location } = props;
  return (
    <Navbar className="bg-dark " variant="dark" expand="lg" fixed="top">
    <Navbar.Brand href="">Student Assist App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav justify variant="pills" activeKey={location.pathname} className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/friends">Friends</Nav.Link>
        <Nav.Link href="/job">Jobs</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/login">Sign out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};
const HeaderWithRouter = withRouter(Header);

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
        <HeaderWithRouter />
            <Switch>
             <Route path="/login" component={Login} exact/>
             <Route path="/home" component={Home} />
             <Route path="/friends" component={Friends}/>
             <Route path="/job" component={Jobs}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;