// Services.jsx
import React from "react";
import { Container, Row, Col } from "reactstrap";
import ServiceCard from "../components/UI/Cards";
import mobileAppImg from "../assets/hero1.png";
import websiteDesignImg from "../assets/hero1.png";
import softwareSolutionsImg from "../assets/hero1.png";
import "../styles/cardComponents.css";
import Img1 from "../assets/card1.png";
import Img2 from "../assets/card2.png";
import Img3 from "../assets/card3.png";

const Services = () => {
  const services = [
    {
      image: Img1,
      title: "Mobile App Development",
      description:
        "Android and iOS Applications: Our expert team creates intuitive, ...read more",
      buttonText: "Get Your App",
    },
    {
      image: Img2,
      title: "Website Design",
      description:
        "Creative and Responsive Design: We design visually stunning and highly... ...read more",
      buttonText: "Get Your Website",
    },
    {
      image: Img3,
      title: "Software Solutions",
      description:
        "Custom Software Development: From enterprise solutions to ... ...read more",
      buttonText: "Build Your Solution",
    },
  ];

  return (
    <Container className="services-container">
      <Row>
        {services.map((service, index) => (
          <Col key={index} sm="12" md="4">
            <ServiceCard {...service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
