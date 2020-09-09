import React from 'react';
import './GalleryItem.scss'

export default function GalleryItem(props) {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <figure>
        <img src={props.listInfo.imgUrl} alt="" />
        <figcaption>
          <h2>{props.listInfo.title}</h2>
          <h4>{props.listInfo.description}</h4>
        </figcaption>
      </figure>
      {/*<button onClick={() => {props.fnRemoveCat(props.index)}}>X</button>*/}
    </div>
  )
}