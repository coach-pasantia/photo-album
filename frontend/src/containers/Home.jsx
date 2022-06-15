/* React */
import React from 'react'

/* Utils */
import Masonry from 'react-masonry-css'
import { breakpointsCard } from '../utils/Masonry'

/* Styles */
import './styles/Home.css'

const Home = () => {
  const [cards, setCards] = React.useState([])
  // const usuario = ''

  React.useEffect(() => {
    fetch('http://localhost:8000/api/fotos/')
      .then(response => response.json())
      .then(json => setCards(json))
  }, [])

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center mb-5'>
          <Masonry
            breakpointCols={breakpointsCard}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'
          >
            {cards.map(card => (
              <div className='col' key={card.id}>
                <div className='card mb-4 shadow-sm'>
                  <img
                    className='card-img-top'
                    src={card.link}
                    alt=''
                  />
                  <div className='card-body'>
                    <p className='card-text'>{card.etiqueta}</p>
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
                        {card.fecha_creada}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </>
  )
}

export default Home
