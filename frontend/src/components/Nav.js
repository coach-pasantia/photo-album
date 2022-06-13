/* React */
import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { ImMenu } from "react-icons/im";

const Nav = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg bg-white sticky-top py-4">
        <div className="container">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <ImMenu size={30} color="gray" />
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <button
                    type="button"
                    class="btn p-2 shadow-none text-secondary me-5"
                  >
                    <BiUserCircle size={25} /> Sign In
                  </button>
                </li>
                <li class="nav-item">
                  <form class="container-fluid">
                    <div class="input-group">
                      <input
                        type="search"
                        class="form-control p-2 shadow-none border"
                        placeholder="Search by name"
                        aria-label="Search"
                      />
                      <span class="input-group-text" id="basic-addon1">
                        <FaSearch color="gray" />
                      </span>
                    </div>
                  </form>
                </li>
              </ul>
              <button type="button" class="btn btn-secondary btn-lg">
                Add a Photo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
