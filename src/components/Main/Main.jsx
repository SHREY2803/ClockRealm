import React from 'react';
import "./Main.css";
import Slider from './Slider/Slider.jsx';
import Category from './Category/Category.jsx';
import Collection from './Collection/Collection.jsx';
import Banner from './Banner/Banner.jsx';
import Trend from './Trends/Trend.jsx';
import Benefit from './Benefits/Benefit.jsx';
import Instagram from './Instagram/Instagram.jsx';



const Main = () => {
  return (
    <div>
      <Slider />
      <Category />
      <Collection />
      <Banner />
      <Trend />
      <Benefit />
      <Instagram />

    </div>
  )
}

export default Main
