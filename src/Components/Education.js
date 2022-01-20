import React from "react";

import queensCollegeLogo from '../images/icons/Queens_College_Logo.svg'
import freeCodeCampLogo from '../images/icons/FreeCodeCamp_logo.svg'

export default function Education() {

    return (
        <div className="container py-5">
            <div className="" id="college-education" >
                <h2 className="display-5">Education</h2>
                <div className="row">
                    <div className="col-md-3">
                        <img className="" src={queensCollegeLogo} alt="queens college" />
                    </div>
                    <div className="col-md-9">
                        <h4>Relevent Coursework</h4>
                        <div class="list-group">
                            <div class="list-group-item list-group-item-action coursework">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Intro to Algorithm Problem Solving</h5>
                                </div>
                                <p class="mb-1">
                                    Introduction to using algorithms to solve problems, using basic data structures and algorithms.
                                    Using the C++ programming language to solve problems using functions and arguments.
                                </p>
                            </div>
                            <div class="list-group-item list-group-item-action coursework">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Object-Oriented Programing using C++/Java</h5>
                                </div>
                                <p class="mb-1">
                                    Utilizing object-oriented programming concepts to solve problems using classes and objects, while 
                                    paying attention to each languages issues and syntax.
                                </p>
                            </div>
                            <div class="list-group-item list-group-item-action coursework">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Design and Analysis of Algorithms</h5>
                                </div>
                                <p class="mb-1">
                                    Utilizing the design and analysis of algorithms for problem solving, such as sorting, searching, divide and conquer, and greedy algorithms.
                                </p>
                            </div>
                            <div class="list-group-item list-group-item-action coursework">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Database Systems</h5>
                                </div>
                                <p class="mb-1">
                                    The study of database systems, including the use of relational databases(SQL databases), learning about relational algebra, and the use of SQL queries,
                                    managing queries with respect to transactions and concurrency.

                                </p>
                            </div>
                            <div class="list-group-item list-group-item-action coursework">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Software Engineering</h5>
                                </div>
                                <p class="mb-1">
                                    The study of software engineering, including the use of object-oriented programming, design patterns, and software development life cycle such as
                                    requirements analysis, design, implementation, testing, and maintenance, culminating in a project with documentation.
                                </p>
                            </div>
                            <div class="list-group-item list-group-item-action coursework">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Internet and Web Technologies</h5>
                                </div>
                                <p class="mb-1">
                                    The study of web technologies, including the use of HTML, CSS, JavaScript, as well as the use of web servers and web applications. While focusing on
                                    the use of web technologies, learning about the use of web services and web APIs, and internet protocal standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row pt-4">
                    <div className="col-md-3 pt-5">
                        <img className="img-fluid" src={freeCodeCampLogo} alt="queens college" />
                    </div>
                    <div className="col-md-9 ">
                        <h4>Certifications</h4>
                        <div class="list-group ">
                            <div class="list-group-item list-group-item-action coursework">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Responsive Web Design</h5>
                                </div>
                                <p className="mb-1">
                                    In this certification, HTML and CSS are taught and used to create a responsive website. Topics also include 
                                    advance visual design, accessibility, and responsive design using flexbox.
                                </p>
                            </div>
                            <div class="list-group-item list-group-item-action coursework">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">JavaScript Algorithms and Data Structures</h5>
                                </div>
                                <p className="mb-1">
                                    In this certification, JavaScript is taught and used to solve problems using algorithms and data structures. With the use of 
                                    ES6 javascript, regular expressions, data structures, and algorithms are used to create various projects based on requirements.
                                </p>
                            </div>
                            <div class="list-group-item list-group-item-action coursework">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Front End Development Libraries</h5>
                                </div>
                                <p className="mb-1">
                                    Front end development libraries are taught and used to create projects using libraries such as React, jQuery, and Bootstrap, culminating
                                    in multiple front end projects.
                                </p>
                            </div>
                            <div class="list-group-item list-group-item-action coursework">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Back End Development and APIs</h5>
                                </div>
                                <p className="mb-1">
                                    Back end development and APIs are taught and used to create projects using databases, APIs, and server-side programming. Specifically,
                                    using NPM to manage dependencies, using Express to create server-side applications, and using MongoDB to create databases.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}