import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      savename: "",
      saveemail: "",
      IsSubmit: false,
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
    this.setState({ savePassword: e.target.value, IsSubmit: true });
  };

  render() {
    return (
      <div className="iamge">
          {/* <Button variant="danger">Danger</Button> */}
        <Button variant="danger ml-3" onClick={this.handalclick}>
          <b> Sign Up</b>
        </Button>

        <Modal show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>CREATE ACCOUNT </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {this.state.IsSubmit?
              <div>
                   <select className="state form-control">
              <option> State</option>
              <option> BIHAR</option>
              <option> Mumbai</option>
            </select>
            <select className="City form-control">
              <option> City</option>
              <option> Patna</option>
              <option> pune</option>
            </select>
              </div>:(
                  <div>
             Enter Name:
            <input className="form-control mt-2 mb-2" placeholder="Enter Name" onChange={(e) => {
                this.savename(e);}}></input>
            Enter Email:
            <input className="form-control mt-2" placeholder="Enter Email" onChange={(e) => {
                this.saveemail(e);}} ></input>
            Password:
            <input type="password" className="form-control mt-2" placeholder="Enter password" onChange={(e) => {
                this.savePassword(e);}}></input>
                  </div>
              )
              }
           
          </Modal.Body>
          <Modal.Footer>
            <div>
              <Button variant="primary" onClick={this.savePassword}>
                Submit
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Register;
