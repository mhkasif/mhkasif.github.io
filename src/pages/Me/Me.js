import React from "react";
import Image from "../../images/me/mhkasif.jpg"
import '../../CSS/Me.scss'
const Me = () => {
  return (
    <div className="me-container">
      <div className="me-quote"><q>We present you the best of the best</q></div>

      <div className="me-data-container">
        <div className="data-left data">
          <div className="title">Web Designer</div>
          <div className="description">
            <img className="me-image" src={Image} alt="" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              voluptatibus magnam aut voluptates reiciendis consequatur
              quibusdam ad accusantium provident earum non totam aspernatur,
              velit esse nobis! Sequi eligendi nulla hic!
            </p>
          </div>
        </div>
        <div className="data-right data">
          <div className="title">Web Designer</div>
          <div className="description">
            <img className="me-image"  src={Image} alt="" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              voluptatibus magnam aut voluptates reiciendis consequatur
              quibusdam ad accusantium provident earum non totam aspernatur,
              velit esse nobis! Sequi eligendi nulla hic!
            </p>
          </div>
        </div>
        <div className="data-left data">
          <div className="title">Web Designer</div>
          <div className="description">
            <img className="me-image" src={Image} alt="" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              voluptatibus magnam aut voluptates reiciendis consequatur
              quibusdam ad accusantium provident earum non totam aspernatur,
              velit esse nobis! Sequi eligendi nulla hic!
            </p>
          </div>
        </div>
        <div className="data-right data">
          <div className="title">Web Designer</div>
          <div className="description">
            <img className="me-image" src={Image} alt="" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              voluptatibus magnam aut voluptates reiciendis consequatur
              quibusdam ad accusantium provident earum non totam aspernatur,
              velit esse nobis! Sequi eligendi nulla hic!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
