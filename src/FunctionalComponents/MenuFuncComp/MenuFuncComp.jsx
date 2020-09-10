import React, { useState } from 'react';
import './MenuFuncComp.scss'
import { Link } from "react-router-dom";

export default function MenuFuncComp() {

  return (
    <nav>
      <Link to="/counter">Counter</Link>
      <Link to="/catsgallery">Gallery of Cats</Link>
      <Link to="/list">List</Link>
    </nav>
  )
}