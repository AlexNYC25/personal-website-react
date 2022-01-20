import React from 'react';

import mongoLogo from '../images/icons/mongodb-original-wordmark.svg'
import mySQLLogo from '../images/icons/icons8-mysql-logo.svg'

export default function DatabaseContainer() {

    return (
        <div className="container">
            <h2 className="display-5"> Databases</h2>
            <div className="row justify-content-center">
                <div className="col-md-2">
                    <img src={mongoLogo} alt="mongodb" className="img-fluid container-fluid " />
                </div>
                <div className="col-md-2">
                    <img src={mySQLLogo} alt="mysql" className="img-fluid container-fluid" />
                </div>
            </div>
        </div>
    );
}