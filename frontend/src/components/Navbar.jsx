/* React */
import React from 'react'

/* Icons */
import { FaSearch } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'
import { ImMenu } from 'react-icons/im'

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-white sticky-top py-4'>
        <div className='container'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'>
                <ImMenu size={30} color='gray' />
              </span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <button
                    type='button'
                    className='btn p-2 shadow-none text-secondary me-5'
                  >
                    <BiUserCircle size={25} /> Sign In
                  </button>
                </li>
                <li className='nav-item'>
                  <form className='container-fluid'>
                    <div className='input-group'>
                      <input
                        type='search'
                        className='form-control p-2 shadow-none border'
                        placeholder='Search by name'
                        aria-label='Search'
                      />
                      <span className='input-group-text' id='basic-addon1'>
                        <FaSearch color='gray' />
                      </span>
                    </div>
                  </form>
                </li>
              </ul>
              <button type='button' className='btn btn-secondary btn-lg ms-2'>
                Add a Photo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
