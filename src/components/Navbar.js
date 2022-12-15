import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Navbar = () => {

  const history = useHistory()

  const Logout = async () => {
    try {
      await axios.delete('https://clear-eel-jersey.cyclic.app/logout')
      // await axios.delete('http://localhost:5000/logout')
      history.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars text-light"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a href='/' className="nav-link active" aria-current="page">
                <div>
                  <i className="fas fa-home fa-lg mb-1"></i>
                </div>
                Home
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item text-center mx-2 mx-lg-1">
              <a className="nav-link" href="#!">
                <div>
                  <i className="fas fa-globe-americas fa-lg mb-1"></i>
                  <span className="badge rounded-pill badge-notification bg-success">11</span>
                </div>
                News
              </a>
            </li>
          </ul>

          <button type="button" class="btn btn-danger" onClick={Logout}>Log Out</button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar