import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs, query } from 'firebase/firestore'
import Part from './Part'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

export default function All() {

  //_______________FIRESTORE____________________
  const [ shoes, setShoes ] = useState()

 useEffect(() => {
  const shoeRef = collection(db, "shoe")
  const q = query(shoeRef)
  
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


 //_______________STORAGE____________________


 
  return (
    <div className="container">
        <div className='page'> {shoes &&
            shoes.map((shoe) => (
                <Part key={shoe.id} shoe={shoe} />
                
            ))}

        </div>
    </div>
  )
}