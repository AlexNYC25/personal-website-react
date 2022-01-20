import React from "react";

import gitLogo from '../images/icons/icons8-git.svg'
import githubLogo from '../images/icons/icons8-github.svg'
import postmanLogo from '../images/icons/getpostman-icon.svg'
import vsCodeLogo from '../images/icons/icons8-visual-studio-code-2019.svg'
import netlifyLogo from '../images/icons/netlify-icon.svg'
import herokuLogo from '../images/icons/heroku-icon.svg'

export default function DeveloperToolsContainer() {
    return (
        <div className="container pb-4">
            <h2 className="display-5">Developer Tools</h2>
            <div className="row justify-content-center">
                    <div className="col-md-2 ">
                        <img src={gitLogo} alt="git" className="img-fluid container-fluid" />
                    </div>
                    <div className="col-md-2">
                        <img src={githubLogo} alt="github" className="img-fluid container-fluid" />
                    </div>
                    <div className="col-md-2 ">
                        <img src={postmanLogo} alt="postman" className="img-fluid container-fluid" />
                    </div>
                    <div className="col-md-2">

                        <img src={vsCodeLogo} alt="visual studio code" className="img-fluid container-fluid" />
                    </div>
                    <div className="col-md-2 ">
                            <img src={netlifyLogo} alt="netlify" className="img-fluid container-fluid" />
                    </div>
                    <div className="col-md-2">
                        <img src={herokuLogo} alt="heroku" className="img-fluid container-fluid" />
                    </div>
            </div>
        </div>
    );
}