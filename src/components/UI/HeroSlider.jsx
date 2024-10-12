import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/hero-slider.css";
import Header from "../Header/Header";
import { Stack } from "@mui/material";
import CarouselComponent from "./Carosel";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01">
        <Header />
        <Stack direction="vertical" gap={3}>
          <div className="pre-back">
            <div className="slider__content">
              <p className="pt d-flex">Your Vision</p>
              <p className="pt  d-flex pt1">Our Innovation</p>
              <button className=" d-flex  btn">Book a Demo</button>
            </div>
            <div className="container1">{/* <CarouselComponent /> */}</div>
          </div>
        </Stack>
      </div>
    </Slider>
  );
};

export default HeroSlider;
