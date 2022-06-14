/* React */
import React from 'react'

/* Utils */
import Masonry from 'react-masonry-css'
import { breakpointsCard } from '../utils/Masonry'

/* Styles */
import './styles/Home.css'

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mb-5'>
          <Masonry
            breakpointCols={breakpointsCard}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            <div className='col'>
              <div className='card mb-4 shadow-sm'>
                <img
                  className='card-img-top'
                  src='https://cdn.pixabay.com/photo/2021/11/30/08/24/strawberries-6834750_960_720.jpg'
                  alt=''
                />
                <div className='card-body'>
                  <p className='card-text'>Tittle Photo</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Delete
                      </button>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Edit
                      </button>
                    </div>
                    <p className='text-muted'>
                      01/01/2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card mb-4 shadow-sm'>
                <img
                  className='card-img-top'
                  src='https://cdn.pixabay.com/photo/2021/11/15/21/39/rose-6799478_960_720.jpg'
                  alt=''
                />
                <div className='card-body'>
                  <p className='card-text'>Tittle Photo</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Delete
                      </button>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Edit
                      </button>
                    </div>
                    <p className='text-muted'>
                      01/01/2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card mb-4 shadow-sm'>
                <img
                  className='card-img-top'
                  src='https://cdn.pixabay.com/photo/2012/03/03/23/54/animal-21668_960_720.jpg'
                  alt=''
                />
                <div className='card-body'>
                  <p className='card-text'>Tittle Photo</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Delete
                      </button>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Edit
                      </button>
                    </div>
                    <p className='text-muted'>
                      01/01/2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card mb-4 shadow-sm'>
                <img
                  className='card-img-top'
                  src='https://cdn.pixabay.com/photo/2022/05/20/11/58/beetle-7209311_960_720.jpg'
                  alt=''
                />
                <div className='card-body'>
                  <p className='card-text'>Tittle Photo</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Delete
                      </button>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Edit
                      </button>
                    </div>
                    <p className='text-muted'>
                      01/01/2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card mb-4 shadow-sm'>
                <img
                  className='card-img-top'
                  src='https://cdn.pixabay.com/photo/2019/10/07/01/22/drop-of-water-4531474_960_720.jpg'
                  alt=''
                />
                <div className='card-body'>
                  <p className='card-text'>Tittle Photo</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Delete
                      </button>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Edit
                      </button>
                    </div>
                    <p className='text-muted'>
                      01/01/2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col'>
              <div className='card mb-4 shadow-sm'>
                <img
                  className='card-img-top'
                  src='https://cdn.pixabay.com/photo/2021/09/07/18/10/cat-6604565_960_720.jpg'
                  alt=''
                />
                <div className='card-body'>
                  <p className='card-text'>Tittle Photo</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Delete
                      </button>
                      <button className='btn btn-sm btn-outline-secondary p-2'>
                        Edit
                      </button>
                    </div>
                    <p className='text-muted'>
                      01/01/2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Masonry>
        </div>
      </div>
    </>
  )
}

export default Home
