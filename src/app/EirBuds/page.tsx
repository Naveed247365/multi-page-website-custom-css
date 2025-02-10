import React from 'react'
import { MdDescription } from 'react-icons/md'

const EirBuds = () => {

  const eirData = [
    {
      id: 1,
      name: 'ronin',
      price: 1000,
      description: 'This is a description',
      image: '/ronin.png'
    },
    {
      id: 2,
      name: 'iphone',
      price: 25000,
      description: 'This is a description',
      image: '/iphone.jpg'
    },
    {
      id: 3,
      name: 'samsung',
      price: 10000,
      description: 'This is a description',
      image: '/samsung.jpg'
    },
    {
      id: 4,
      name: 'best',
      price: 2000,
      description: 'This is a description',
      image: '/best.jpg'
    },
    {
      id: 5,
      name: 'jbl',
      price: 10000,
      description: 'This is a description',
      image: '/jbl.png'
    },
    {
      id: 6,
      name: 'bose',
      price: 10000,
      description: 'This is a description',
      image: '/bose.jpg'
    }
  ]
  return (
    <main>
      <div className='product-list'>
        {eirData.map((eir) => (
          <div key={eir.id} className='product-card'>
            <img src={eir.image} alt={eir.name} />
            <h3>{eir.name}</h3>
            <p>{eir.description}</p>
            <div className='price'>Pkr{eir.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default EirBuds