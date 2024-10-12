import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";
import Icon from "../../assets/icon.png";

const ServicesList = () => {
  return (
    <Col className="">
      <div className="container-sm">
        {servicesData.map((item) => (
          <ServiceItem item={item} key={item.id} />
        ))}
      </div>
    </Col>
  );
};

const ServiceItem = ({ item }) => (
  <Container className="grad-box grad-box1  d-flex align-items-start">
    <Row sm="1" className="">
      <Col>
        {/* <div className="service__item">
          <Row className="d-flex">
            <Row class="justify-content-around p-2 ">
              <img src={Icon} className="icon" />
            </Row>
            <Col className="p-3 flex-grow-1">
              <p className="section__description text ">{item.desc}</p>
            </Col>
          </Row>
        </div> */}
        <div class="row">
          <div class="col-1 p-4">
            <img src={Icon} />
          </div>
          <div class="col-9 justify-content-start text p-3">
            <p className="section__description text ">{item.desc}</p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default ServicesList;
