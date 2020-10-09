import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import logometriplica from '../images/logo-metriplica.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <h1>Botón principal</h1>
              <Link className="btn btn-primary" to="/badges">
                Next
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              //<img
                src={logometriplica}
                alt="metriplica"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
