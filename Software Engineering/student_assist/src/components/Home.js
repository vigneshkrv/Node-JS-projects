
import React, { Component } from 'react';
import { Grid, Header, Form,  Message, Input, Segment, Select } from 'semantic-ui-react';
import { Button, Row,Col} from 'react-bootstrap';
import { Auth } from 'aws-amplify'; 
import Amplify from 'aws-amplify';

const loadImageError = (e)=> {
    e.target.src = 'https://via.placeholder.com/40';
}

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class MyAccount extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            authState: this.props.authState,
            nickname:'',
            email:'',
            given_name:'',
            middle_name:'',
            family_name:'',
            birthdate:'',
            gender:'',
            phone_number:'',
            address:'',
            website:'',
        }
    }

    
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    }
    

    render(){
        
        let loading = true;
       
        
        const {nickname,email,given_name,middle_name,family_name,birthdate,gender,phone_number,address,website} = this.state;
        
        return(
            
               <div className="log2 container"> 
             <img src={"https://s3-prod.chicagobusiness.com/GettyImages-1057157166.jpg"} alt="bg" class="bg"></img>

               <div style={{textAlign:"center"}}>
                <Header as="h1">Account Information</Header>
                <div className="nav-profile2"><img src={"https://www.maxim.com/.image/t_share/MTU3ODY0MzkxNDY1NzcyMzYx/dwayne-the-rock-johnson-promo.jpg"} alt="profile" onError={loadImageError}/></div>

              <Form onSubmit={this.handleSubmit} loading={loading} >
            <Row className="mt-3">
               
                <Col md={{ span: 3, offset: 3 }}>  <Form.Input name='nickname' value={"The Rock"} label='Display Name' placeholder='Display name' width={6} onChange={this.handleChange} error={false} /></Col>
                <Col lg="2"> <Form.Input label='Username' value={"dwayne@johnson.com"} width={10}  /></Col>
                
            </Row>
                <Row className="mt-3">
                  <Col md={{ span: 3, offset: 3 }}><Form.Input name='given_name' value={"Dwayne"} label='First name' placeholder='First Name' width={6} onChange={this.handleChange} error={false} /></Col>
                 <Col lg="2"><Form.Input name='family_name' value={"Johnson"} label='Last Name' placeholder='Last Name' width={6} onChange={this.handleChange} error={false} /></Col>
                </Row>
                
                <Row className="mt-3">
               
                <Col md={{ span: 3, offset: 3 }}>  <Form.Input name='nickname' value={"05-02-1972"} label='D.O.B' placeholder='02/11/1992' width={6} onChange={this.handleChange} error={false} /></Col>
                <Col lg="2"> <Form.Input label='Gender' value={"Kind of a Rock"} width={10}  /></Col>
                
                 </Row>

                 <Row className="mt-3">
               
               <Col md={{ span: 3, offset: 3 }}>  <Form.Input name='Contact' value={"+1 123456987"} label='Contact' placeholder='+1 5584323248' width={6} onChange={this.handleChange} error={false} /></Col>
               <Col lg="2"> <Form.Input label='password' placeholder='*********' value={"*********"} width={10}  /></Col>
               
                </Row>
                
                <Row className="mt-3">
                <Col md={{ span: 3, offset: 3 }}> <Form.Input name='address' value={"10th Volcano, underground gym"} label='Address' placeholder='2/77 New Street, Newport 3015 Melbourne, Victoria, Australia ' width={20} height={30} onChange={this.handleChange} error={false} /></Col >
                <Col lg="2"> <Form.Input label='pincode' value={"115511"} width={10}  /></Col>
                </Row>
                <h2 className="justify-content-center mt-5">Notification Panel</h2>
                <div className="log3 mt-4">
                <Message
                  success
                  header='New Assignment has been added'
                  content="Your course cs 487 has a  new assignment waiting for submission."
                />
                
                <Message
                  error
                  header='Survey Waiting ! '
                  content='Survey for the Fall 2019 courses are pending. Kindly submit your survey '
                />
                </div>
                <Button variant="danger" className="mt-3 mb-3" type='submit'>Submit</Button>
              </Form>
              </div>
              </div> 
                
            
           
        );
    }
    
}

export default MyAccount;
