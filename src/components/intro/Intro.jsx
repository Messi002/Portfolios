import React from "react";
import "./intro.css";
import img from '../../img/pic2.png'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">MESSI II Innocent</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Machine Learning</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Web 3 Developer</div>
              {/* <div className="i-title-item">Web Developer</div> */}
            </div>
          </div>
        
          <p className="i-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            voluptatem nostrum totam id vero iure, veritatis accusamus odit est
            neque assumenda ad quisquam modi nihil deleniti error quas corporis
            quos.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-right-wrapper">
            <div className="i-right-bg"></div>
            <img src={img} alt="profile pic" className="i-right-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
                        