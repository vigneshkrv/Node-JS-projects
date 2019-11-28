import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row,Col} from 'react-bootstrap';
// npm install --save-dev @iconify/react @iconify/icons-ion
import { Icon, InlineIcon } from '@iconify/react';
import chatboxEllipsesOutline from '@iconify/icons-ion/chatbox-ellipses-outline';


const pageSizes = [10, 20, 30, 40, 50, 60];
const tableHeaders = [
    { colRef: 'name', colLabel: 'Username'},
    { colRef: 'firstname', colLabel: 'First Name'},
    { colRef: 'lastname', colLabel: 'Last Name'},
    { colRef: 'employeeid', colLabel: 'Employee Id'},
    { colRef: 'email', colLabel: 'Email'},
    { colRef: 'score', colLabel: 'Risk Score'},
]
const loadImageError = (e)=> {
    e.target.src = 'https://via.placeholder.com/40';
}


class Jobs extends Component {
    state = {
        users: ["Arturo", "Guadalupe","Karen","Vignesh", "Yongsi"],
        pageNumber: 0,
        pageSize: 10,
        sortBy: {colName: 'score', colDir: 'DESC'}
    }

    onSort = (colName)=> {
        const { sortBy } = this.state;
        const colDir = sortBy && sortBy.colDir === 'ASC' ? 'DESC' : 'ASC';
        this.setState({sortBy: {colName: colName, colDir}, pageNumber: 0})
    }

    doSearch = (e)=> {
        e.preventDefault()
        this.setState({pageNumber: 0})
        return false 
    }

    onSelectedUser = (user)=> {
        this.props.history.push(`/management/${user.name}`);
    }
    render() {
        const { users, pageNumber, pageSize, sortBy } = this.state;
        
        return (
      <div>
        <div className="col-12 grid-margin">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between box-select mr-0 mr-sm-3">
              <p className="box-select-name mb-0 text-muted">Show </p>
              
            </div>
            <form onSubmit={this.doSearch}>
              <div className="form-group d-flex search-field mb-0 form-report">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Here"
                  onChange={e =>
                    this.setState({ searchValue: e.target.value })
                  }
                />
                <button type="submit" className="btn btn-primary ml-3">
                  <i className="mdi mdi-magnify" />
                </button>
              </div>
            </form>
          </div>
        </div>
                <div className="card col-md-12">
          <div className="card-body  grid-margin stretch-card">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="table-sorter-wrapper col-lg-12 table-responsive">
                <table id="sortable-table-2" className="table">
                  <thead >
                    <tr >
                     <td>Title</td>
                      <td>Location</td>
                      <td>Domain</td>
                      <td>Experience Req</td>
                      <td>Position</td>
                      <td>Application</td>
                    </tr>
                  </thead>
                  <tbody>
                   <tr>
                      <td >MERN stack developer</td>
                      <td >Chicago, IL</td>
                      <td >Computer Science</td>
                      <td >Yes</td>
                      <td >Full time</td>
                      <td ><Button variant="success">Apply</Button></td>
                   </tr>

                   <tr>
                      <td >Information security analyst</td>
                      <td >Los Angeles, CA</td>
                      <td >Internet & Security</td>
                      <td >No</td>
                      <td >Intern</td>
                      <td ><Button variant="success">Apply</Button></td>
                   </tr>

                   <tr>
                      <td >Design Architect</td>
                      <td >San Francisco, CA</td>
                      <td >Architecture</td>
                      <td >Yes</td>
                      <td >Part-time</td>
                      <td ><Button variant="info">Done</Button></td>
                   </tr>

                   <tr>
                      <td >Software Developer</td>
                      <td >San Francisco, CA</td>
                      <td >Computer science, IT</td>
                      <td >yes</td>
                      <td >Full time</td>
                      <td ><Button variant="success">Apply</Button></td>
                   </tr>

                   <tr>
                      <td >Data Analyst</td>
                      <td >Jackson, MP</td>
                      <td >IT & software</td>
                      <td >No</td>
                      <td >Full time </td>
                      <td ><Button variant="info">Done</Button></td>
                   </tr>

                   <tr>
                      <td >MERN stack developer</td>
                      <td >Chicago, IL</td>
                      <td >Computer Science</td>
                      <td >Yes</td>
                      <td >Full time</td>
                      <td ><Button variant="info">Done</Button></td>
                   </tr>

                   <tr>
                      <td >Information security analyst</td>
                      <td >Los Angeles, CA</td>
                      <td >Internet & Security</td>
                      <td >No</td>
                      <td >Intern</td>
                      <td ><Button variant="success">Apply</Button></td>
                   </tr>

                   <tr>
                      <td >Design Architect</td>
                      <td >San Francisco, CA</td>
                      <td >Architecture</td>
                      <td >Yes</td>
                      <td >Part-time</td>
                      <td ><Button variant="success">Apply</Button></td>
                   </tr>

                   <tr>
                      <td >Software Developer</td>
                      <td >San Francisco, CA</td>
                      <td >Computer science, IT</td>
                      <td >yes</td>
                      <td >Full time</td>
                      <td ><Button variant="info">Done</Button></td>
                   </tr>

                   <tr>
                      <td >Data Analyst</td>
                      <td >Jackson, MP</td>
                      <td >IT & software</td>
                      <td >No</td>
                      <td >Full time </td>
                      <td ><Button variant="success">Apply</Button></td>
                   </tr>

                   <tr>
                      <td >MERN stack developer</td>
                      <td >Chicago, IL</td>
                      <td >Computer Science</td>
                      <td >Yes</td>
                      <td >Full time</td>
                      <td ><Button variant="success">Apply</Button></td>
                   </tr>

                   <tr>
                      <td >Information security analyst</td>
                      <td >Los Angeles, CA</td>
                      <td >Internet & Security</td>
                      <td >No</td>
                      <td >Intern</td>
                      <td ><Button variant="success">Apply</Button></td>
                   </tr>

                   <tr>
                      <td >Design Architect</td>
                      <td >San Francisco, CA</td>
                      <td >Architecture</td>
                      <td >Yes</td>
                      <td >Part-time</td>
                      <td ><Button variant="success">Apply</Button></td>
                   </tr>

                   <tr>
                      <td >Software Developer</td>
                      <td >San Francisco, CA</td>
                      <td >Computer science, IT</td>
                      <td >yes</td>
                      <td >Full time</td>
                      <td ><Button variant="success">Apply</Button></td>
                   </tr>

                   <tr>
                      <td >Data Analyst</td>
                      <td >Jackson, MP</td>
                      <td >IT & software</td>
                      <td >No</td>
                      <td >Full time </td>
                      <td ><Button variant="success">Apply</Button></td>
                   </tr>
                   
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div>
        </div>
    );
    }
}




export default Jobs;