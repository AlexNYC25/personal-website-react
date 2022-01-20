import React from "react";

let markdownPreview = require('../images/projects/markdown.png')
let whatToWatchBackend = require('../images/projects/whatToWatch-backend.png');
let urlShortener = require('../images/projects/urlshortner.png');

export default function FavoriteProjects() {

    return (
        <div className="container pb-3">
            <h2 className="display-5 pb-3">Favorite Projects</h2>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card project-card">
                        <img src={whatToWatchBackend} alt="What to watch backend" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">What to Watch Backend</h5>
                            <p className="card-text">A stand alone REST API used to keep track of what movies and tv shows a user wants to watch, and thier favorites.</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card project-card">
                        <img src={markdownPreview} alt="React Markdown previewer" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">React Markdown Previewer</h5>
                            <p className="card-text">A React.js frontend web page that accepts markdown formated text and displays what would be displayed after processing.</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card project-card">
                        <img src={urlShortener} alt="URL shortner" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">URL Shortner</h5>
                            <p className="card-text">A Node.js backend application using Express.js to handle URL's to be saved on MongoDB database then redirected to from shortened URL's</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    
}