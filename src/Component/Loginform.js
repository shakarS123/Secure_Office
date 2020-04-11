import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Loginform extends Component {
    render() {
        return (
            <div className="login">
                <Form  >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="mt-5"><h2>Email address</h2></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => { this.saveemail(e) }} />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="text"><h2>Password</h2></Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => { this.savepass(e) }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        {/* <Form.Check type="checkbox" label="Check me out" /> */}
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.saveloginform}>
                        Login
  </Button>
                </Form>
            </div>
        )
    }
}

export default Loginform;
