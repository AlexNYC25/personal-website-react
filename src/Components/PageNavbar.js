import React from 'react'


export default function PageNavbar() {


    let navbarContents = <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" >
        <li class="nav-item">
            <a class="nav-link" href="#" >
                Projects
            </a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">
                Blog
            </a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">
                Education
            </a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">
                Resume
            </a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">
                Github
            </a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="#">
                LinkedIn
            </a>
        </li>
    </ul>;


    return (
        <nav id='app-navbar' class="navbar navbar-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <p className="h5">Alexis Montes</p>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Alexis Montes</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body"  >
                        {navbarContents}
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}