import React, { Component } from 'react'

const data = require("../MOCK_MESSAGES.json");

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand text-white">MDT</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link"><i className="fa fa-home"></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="fa fa-male"></i> Person</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="fa fa-car"></i> Vehicle</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="fa fa-binoculars"></i> BOLOs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><i className="fa fa-envelope"></i> Messages <span className="badge badge-pill badge-warning">{data.length}</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown">
                                    <i className="fa fa-user"></i> Account
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item"> <i className="fa fa-cogs"></i> Settings</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item"><i className="fa fa-sign-out"></i> Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
