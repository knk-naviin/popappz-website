// import React from "react";
// import Msk from "../../assets/msk.png";
// import "../../styles/cards.css";
// import { Container, Col, Row } from "reactstrap";
// import cardData from "../../assets/data/cardData";
// const Cards = () => {
//   return (
//     <div className="card-box d-flex ">
//       {cardData.map((item) => (
//         <CardsItem item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };

// const CardsItem = ({ item }) => (
//   <div className="card-item  col-6 col-md-3">{item.desc}</div>
// );

// export default Cards;
// ServiceCard.jsx
import React from "react";
import "../../styles/cards.css";
import { Col } from "reactstrap";

const ServiceCard = ({ image, title, description, buttonText }) => {
  return (
    <div className="card-box">
      <img src={image} className="img" alt={title} />
      <Col>
        <h2 className="title">{title}</h2>
        <p className="desc">{description}</p>
        <button className="btn">{buttonText}</button>
      </Col>
    </div>
  );
};

export default ServiceCard;
