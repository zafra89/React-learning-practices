import React, {useState} from 'react';
import './ListFuncComp.scss'

export default function ListFuncComp(props) {

  return(
    <>
      <ul>
        {props.listToShow.map(itemInList => <li>{itemInList}</li>)}
      </ul>
    </>
  )
}