import { Col } from "react-bootstrap";
import {Link } from "react-router-dom";

export const ProductsCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>

      <div className="proj-imgbx">
      <img src={imgUrl || "default-image.jpg"} alt="Project preview" />
      <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </Link>
    </Col>
  )
}
