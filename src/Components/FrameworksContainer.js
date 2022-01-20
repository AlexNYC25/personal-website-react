import React from "react";

import nodeLogo from '../images/icons/icons8-nodejs.svg'
import reactLogo from '../images/icons/icons8-react-native.svg'
import expressLogo from '../images/icons/express.svg'

export default function FrameworksContainer() {

    return (
        <div className="container">
            <h2 className="display-5">Frameworks</h2>
            <div className="row justify-content-center">
                <div className="col-md-2 ">
                    <img src={nodeLogo} alt="Node js" className="img-fluid container-fluid" />
                </div>

                <div className="col-md-2 ">
                    <img src={reactLogo} alt="React js" className="img-fluid container-fluid" />
                </div>

                <div className="col-md-2 d-flex">
                    <img src={expressLogo} alt="Express js" className="img-fluid container-fluid" />
                </div>
            </div>
        </div>
    );
}