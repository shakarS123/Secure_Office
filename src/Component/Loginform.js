import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Loginform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savepass: "",
            saveemail: "",
            saveloginformdata: []
        }
    }
    saveemail = (e) => {
        this.setState({ saveemail: e.target.value })
        console.log(e.target.value)
    }
    savepass = (e) => {
        this.setState({ savepass: e.target.value })
        console.log(e.target.value)
    }
    saveloginform = (e) => {
        let listData = [];
        let objData = {
            pass: this.state.savepass,
            email: this.state.saveemail
        }
        listData.push(objData)
        this.setState({ saveloginformdata: listData })
        console.log(listData)
    }
    render() {
        return (
            <div className="login">
                <Form className=" ">
                    <h3><center>Log In</center></h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="login_email">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => { this.saveemail(e) }} />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label >Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => { this.savepass(e) }} />
                    </Form.Group>
                    <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                    <Form.Group controlId="formBasicCheckbox">

                    </Form.Group>
                    <Button className="btn btn-primary btn-lg btn-block " type="submit" onClick={this.saveloginform}>
                        Login
  </Button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </Form>
            </div>
        )
    }
}

export default Loginform;
