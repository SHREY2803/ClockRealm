import React from 'react';
import './Trend.css';
import trendsData from './Trend.json';
import TrendsImg1 from '../../../assets/pink_galaxy.png';
import TrendsImg2 from '../../../assets/Trend2.webp';
import TrendsImg3 from '../../../assets/Trend3.webp';
import TrendsImg4 from '../../../assets/final_fitbit.png';



const finalImages = {
    trendsImg1:TrendsImg1,
    trendsImg2:TrendsImg2,
    trendsImg3:TrendsImg3,
    trendsImg4:TrendsImg4
  } 

const Trend = () => {
  return (
    <div className='trend'>
       <div className="title">
        <h2>{trendsData.title.name}</h2>
      </div>
      <div className="box-container">
        {trendsData.trends.map((item,index)=>(   
        <div className="box" key={index}>
          <div className="image">
            <a href={item.link}>
              <img src={finalImages[item.image]} alt={item.title} />
            </a>
            <div className="icons">
              <div className="wishlist">
                <a href={item.wishlistLink}>
                <i className="fa-regular fa-heart"></i>
                </a>
              </div>
              <div className="compare">
                <a href={item.compareLink}>
                <i className="fa-solid fa-code-compare"></i>
                </a>
              </div>
            </div>
            <div className="actions">
              <div className="quickview">
                <a href={item.quickViewLink}>Quickview</a>
              </div>
              <div className="cart">
                <a href={item.cartLink}>Quick Shop</a>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="name">
              <h3>
                <a href={item.link}>
                  {item.title}
                </a>
              </h3>
            </div>
            <div className="price">
              <h5>
                {item.price}
              </h5>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Trend
