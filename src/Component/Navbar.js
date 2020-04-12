import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-sm bg-light"> 
    
                    
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav navbar-nav navbar-center"> Login Form <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;