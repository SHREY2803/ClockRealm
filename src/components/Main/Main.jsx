import React from 'react';
import "./Main.css";
import Slider from './Slider/Slider.jsx';
import Category from './Category/Category.jsx';
import Collection from './Collection/Collection.jsx';
import Banner from './Banner/Banner.jsx';


const Main = () => {
  return (
    <div>
      <Slider />
      <Category />
      <Collection />
      <Banner />
    </div>
  )
}

export default Main
