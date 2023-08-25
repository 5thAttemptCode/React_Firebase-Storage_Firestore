import React from 'react'

export default function Part({shoe}) {
  return (
    <div className='part'>
      <p>{shoe.sneaker}</p>
      <p>{shoe.type}</p>
      <img src={shoe.image} alt="HELLO" />
    </div>
  )
}

