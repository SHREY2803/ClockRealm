import React from 'react';
import "./Main.css";
import Slider from './Slider/Slider.jsx';
import Category from './Category/Category.jsx';
import Collection from './Collection/Collection.jsx';
import Banner from './Banner/Banner.jsx';
import Trend from './Trends/Trend.jsx';


const Main = () => {
  return (
    <div>
      <Slider />
      <Category />
      <Collection />
      <Banner />
      <Trend />
    </div>
  )
}

export default Main
