import React from "react";
import "./Instagram.css";
import instraGramData from "./Instagram.json";
import instaPic1 from "../../../assets/hand_watch1.jpg";
import instaPic2 from "../../../assets/hand_watch2.jpg";
import instaPic3 from "../../../assets/hand_watch3.jpg";
import instaPic4 from "../../../assets/hand_watch4.jpg";
import instaPic5 from "../../../assets/insta1.webp";

const instaImgaes = {
  instaImg1: instaPic1,
  instaImg2: instaPic2,
  instaImg3: instaPic3,
  instaImg4: instaPic4,
  instaImg5: instaPic5,
};

const Instagram = () => {
  return (
    <div className="insta">
      <div className="title">
        <h2>{instraGramData.title.name}</h2>
      </div>
      <div className="box-container">
        {instraGramData.boxes.map((item, index) => (
          <div className="box" key={index}>
            <a href={item.link} className="over-link" target="_blank">
              <img src={instaImgaes[item.image]} alt="insta picture" />
              <div className="overlay">
                <i class="fa-brands fa-instagram"></i>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
