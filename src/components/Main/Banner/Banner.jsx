import React from 'react';
import './Banner.css'
import bannerData from "./Banner.json";
import BannerImage1 from "../../../assets/banner1.webp";
import BannerImage2 from "../../../assets/banner2.webp";
import BannerImage3 from "../../../assets/banner3.webp";

const imageMap = {
  "banner1.webp": BannerImage1,
  "banner2.webp": BannerImage2,
  "banner3.webp": BannerImage3,
};

const Banner = () => {
  return (
    <div className='banner'>
      <div className='row-wrapper'>
        {bannerData.map((item) => (
          <div
            className="box"
            key={item.id}
            style={{ backgroundImage: `url(${imageMap[item.background]})` }}
          >
            <div className="content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link}>Shop Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
