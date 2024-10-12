import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import ServicesList from "../components/UI/ServicesList";
import "../styles/home.css";
import Hel from "../../src/assets/hel.png";
import OurGoals from "../components/UI/OurGoals";
import Seal from "../assets/seal.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Info from "../assets/info.png";
import Cards from "../components/UI/Cards";
import Services from "./CardComponents";

const Home = () => {
  return (
    <div title="Home">
      <section className="hero-section">
        <HeroSlider />
      </section>
      <Container className="service">
        <Row>
          <Col className=" d-flex align-items-start flex-column mb-3">
            <h1 className="about">About</h1>
            <div className="align-items-end">
              <ServicesList />
            </div>
          </Col>
          <Col>
            <img src={Hel} className="img-hel" />
          </Col>
        </Row>
      </Container>
      <h1 className="abt">Services</h1>
      <Container>
        <Services />
      </Container>
      <h1 className="our-goal">Our Goals</h1>
      <div className="goal">
        <OurGoals />
      </div>
      <h1 className="eyt">Empowering Young Talents</h1>

      <Row className="row-eyt">
        <Col>
          <img src={Info} className="info" width="596" />
        </Col>
        <Col>
          <img src={Seal} className="seal" width="322" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
