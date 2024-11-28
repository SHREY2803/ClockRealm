import React from 'react';
import benefitsData from './Benefit.json';
import './Benefit.css';
import firstSvg from "../../../assets/icon1.svg";
import secondSvg from "../../../assets/icon2.svg";
import thirdSvg from "../../../assets/icon3.svg";
import fourthSvg from "../../../assets/icon4.svg";

const svgImg = {
    myIcon1:firstSvg,
    myIcon2:secondSvg,
    myIcon3:thirdSvg,
    myIcon4:fourthSvg,

}

const Benefit = () => {
  return (
    <div className="benefit">
        <div className="row-wrapper">
            {benefitsData.map((item) => (
            <div className="box" key={item.id}>
                <div className="icon">
                    <img src={svgImg[item.icon]} alt={item.title} />
                </div>
                <div className="content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Benefit;
