import React from "react";
import "./Category.css";
import categoryData from "./Category.json";
import firstImage from "../../../assets/category-watch1.webp";
import secondImage from "../../../assets/category-watch2.webp";
import thirdImage from "../../../assets/category-watch3.webp";
import fourthImage from "../../../assets/category-watch4.webp";
import fifthImage from "../../../assets/category-watch5.webp";

const CatImages = {
  catImg1: firstImage,
  catImg2: secondImage,
  catImg3: thirdImage,
  catImg4: fourthImage,
  catImg5: fifthImage
};

const Category = () => {
  return (
    <div className="category">
        <div className="cat-heading">
            <h1>Categories</h1>
        </div>
      <div className="row-wrapper">
        {categoryData.category.map((item, index) => (
          <a href={item.link} key={item.index}>
            <div className="box">
                <div className="cat-image">
                    <img src={CatImages[item.image]} alt={item.title} />
                </div>
                <div className="title">
                    <h4>{item.title}</h4><span>({item.count})</span>
                </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category;
