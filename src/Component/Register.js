import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      savename: "",
      saveemail: "",
      savePassword: [],
    };
  }
  handalclick = () => {
    this.setState({ show: !this.state.show });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  savename = (e) => {
    this.setState({ savename: e.target.value });
  };
  saveemail = (e) => {
    this.setState({ saveemail: e.target.value });
  };
  savePassword = (e) => {
    this.setState({ savePassword: e.target.value });
  };

  render() {
    return (
      <div className="iamge">
        <button className="button" onClick={this.handalclick}>
          <b> Sign In</b>
        </button>

        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>CREATE ACCOUNT </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Enter Name:
            <input
              className="form-control mt-2 mb-2"
              placeholder="Enter Name"
              onChange={(e) => {
                this.savename(e);
              }}
            ></input>
            Enter Email:
            <input
              className="form-control mt-2"
              placeholder="Enter Email"
              onChange={(e) => {
                this.saveemail(e);
              }}
            ></input>
            Password:
            <input
              className="form-control mt-2"
              placeholder="Enter password"
              onChange={(e) => {
                this.savePassword(e);
              }}
            ></input>
          </Modal.Body>
          <Modal.Footer>
            <div>
              <Button variant="primary" onClick={this.savePassword}>
                Sign Up
              </Button>
              
            </div>
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Register;
