import React, { Component } from "react"
import { Link } from 'react-router-dom'
import AuthState from './AuthState'


export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Shannon
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pokemon">
                  Pokemon
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SignIn">
                  SignIn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SignUp">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <AuthState/>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
