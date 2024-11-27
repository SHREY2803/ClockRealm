import React from "react";
import "./Collection.css";
import collectionData from "./Collection.json";

import CollectionImg1 from "../../../assets/collection-1.webp";
import CollectionImg2 from "../../../assets/collection-2.webp";
import CollectionImg3 from "../../../assets/collection-3.webp";
import CollectionImg4 from "../../../assets/collection-4.webp";

const finalImages = {
  collectionImg1:CollectionImg1,
  collectionImg2:CollectionImg2,
  collectionImg3:CollectionImg3,
  collectionImg4:CollectionImg4
} 

const Collection = () => {
  return (
    <div className="collection">
      <div className="title">
        <h2>{collectionData.title.name}</h2>
      </div>

      <div className="box-container">
        {collectionData.collection.map((item,index)=>(   
        <div className="box" key={index}>
          <div className="image">
            <a href={item.link}>
              <img src={finalImages[item.image]} alt={item.title} />
            </a>
            <div className="icons">
              <div className="wishlist">
                <a href={item.wishlistLink}>
                <i class="fa-regular fa-heart"></i>
                </a>
              </div>
              <div className="compare">
                <a href={item.compareLink}>
                <i class="fa-solid fa-code-compare"></i>
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
  );
};

export default Collection;
