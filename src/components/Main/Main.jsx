import React from 'react';
import "./Main.css";
import Slider from './Slider/Slider.jsx';
import Category from './Category/Category.jsx';
import Collection from './Collection/Collection.jsx';


const Main = () => {
  return (
    <div>
      <Slider />
      <Category />
      <Collection />
    </div>
  )
}

export default Main
