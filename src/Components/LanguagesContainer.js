import React from 'react';

import javascriptLogo from '../images/icons/icons8-javascript.svg'
import pythonLogo from '../images/icons/icons8-python.svg'
import htmlLogo from '../images/icons/icons8-html-5.svg'
import cssLogo from '../images/icons/icons8-css3.svg'

export default function LanguagesContainer() {

    return (
        <div className="container" >
            <h2 className="display-5">Languages</h2>
            <div className="row justify-content-center">
                <div className="col-md-2">
                    <img className="image-fluid container-fluid" src={javascriptLogo} alt="javascript"/>
                </div>
                <div className="col-md-2">
                    <img className="image-fluid container-fluid" src={pythonLogo} alt="python"/>
                </div>
                <div className="col-md-2">
                    <img className="image-fluid container-fluid" src={htmlLogo} alt="html"/>
                </div>
                <div className="col-md-2">
                    <img className="image-fluid container-fluid" src={cssLogo} alt="css"/>
                </div>
            </div>
        </div>
    );
}