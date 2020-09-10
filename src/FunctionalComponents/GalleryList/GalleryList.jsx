import React, { useState } from 'react';
import './GalleryList.scss'
import GalleryItem from '../GalleryItem/GalleryItem';

export default function GalleryList() {

  const [catsArray, setCatsArray] = useState([
    {
      title: "Gato 1",
      description: "Amable y juguetón",
      imgUrl: 'https://i.pinimg.com/474x/45/eb/59/45eb598fca8ddf285af8870bd49e2355.jpg'
    },
    {
      title: "Gato 2",
      description: "Vago",
      imgUrl: 'https://pbs.twimg.com/profile_images/710983778802409472/EdOHlXdK_400x400.jpg'
    },
    {
      title: "Gato 3",
      description: "Pianista",
      imgUrl: 'https://c-sf.smule.com/rs-s25/arr/0c/82/f5fea4f7-621d-41d1-b51e-800ca092d54c.jpg'
    },
    {
      title: "Gato 4",
      description: "Dictador",
      imgUrl: 'https://i.pinimg.com/280x280_RS/f9/8d/f2/f98df242adc398b34d61bc94de7badb2.jpg'
    },
    {
      title: "Gato 5",
      description: "No es un gato pero está gordo",
      imgUrl: 'https://lh3.googleusercontent.com/proxy/cFLZiQTs97aiiFT2d6I8T192jEou98_9s0oClUcHCRH8lcdPSqn7CLLIhd9IGFABxWohULzYB7pgJOigwBxHf0-YIByOkqFZeBjXUFHbT70fTtjNa3j2IlaTI9VxkG0X'
    },
    {
      title: "Gato 6",
      description: "Tom",
      imgUrl: 'https://magedalqerbi.cachefly.net/p/Tom_and_Jerry/0.webp'
    }
  ])

  const removeCat = (i) => {
    const cats = [...catsArray];
    cats.splice(i, 1);
    setCatsArray(cats);
  }

  return (
    <div className="container">
      <h1>Lista de gatos altamente influyentes:</h1>
      <div className="row">
        {catsArray.map((catItem, i) => <GalleryItem catsInfo={catItem} index={i} key={i} fnRemoveCat={removeCat}/>)}
      </div>
    </div>
  )
}