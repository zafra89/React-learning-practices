import React from 'react';
import './GalleryItem.scss'

export default function GalleryItem(props) {
  const catsInfo = props.catsInfo;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 item">
      <figure>
        <img src={catsInfo.imgUrl} alt=""/>
        <figcaption>
          <h2>{catsInfo.title}</h2>
          <h5>{catsInfo.description}</h5>
        </figcaption>
      </figure>
      <button onClick={() => {props.fnRemoveCat(props.index)}}>X</button>
    </div>
  )
}