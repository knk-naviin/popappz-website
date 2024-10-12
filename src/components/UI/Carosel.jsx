import React from "react";
import { Carousel } from "react-bootstrap";
import Img1 from "../../assets/img1.png";
import "../../styles/carosel.css"; // Import your custom CSS

const CarouselComponent = () => {
  return (
    <Carousel className="carousel-inner" interval={4000}>
      <Carousel.Item className="carousel-item">
        <div className="card">
          <img src={Img1} width="304" height="157" />
          <txt className="txt">Hello</txt>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <div className="card">
          <img src={Img1} width="304" height="157" />
          <txt className="txt">Welcome</txt>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-item ">
        <div className="card">
          <img src={Img1} width="304" height="157" />
          <txt className="txt">Boys</txt>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
