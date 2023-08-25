import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs, where, query } from 'firebase/firestore'
import Part from './Part'

export default function Female() {

  const [ shoes, setShoes ] = useState()

 useEffect(() => {
  const shoeRef = collection(db, "shoe")
  const q = query(shoeRef, where("type", "==", "female"))
  
  getDocs(q)
    .then((querySnapshot) => {
      let shoes = []
      querySnapshot.docs.forEach((doc) => {
        shoes.push({ ...doc.data(), id: doc.id})
      })
      // console.log(shoes)
      setShoes(shoes)
    })
    .catch(err => {
      console.log(err.message)
    })
 }, [])

  
  return (
    <div className="container">
      <div className='page female'> {shoes &&
        shoes.map((shoe) => (
            <Part key={shoe.id} shoe={shoe} />
        ))}
        
      </div>
    </div>
  )
}
