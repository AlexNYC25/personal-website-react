import React from "react";

export default function ProjectsInProgress() {

    return (
        <div className="container pb-3">
            <h2 className="display-5 pb-3"> Projects in Progress</h2>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card project-card">
                        <img src="" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">What to Watch</h5>
                            <p className="card-text">A web application to keep track of what movies and tv show you want to watch, and what are your favorites.</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}