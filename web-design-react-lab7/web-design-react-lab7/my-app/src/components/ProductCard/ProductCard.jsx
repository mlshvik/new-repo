import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Імпортуємо Link з react-router-dom
import styles from "../ProductList/ProductList.module.css";

function ProductCard(props) {
  const { imageSrc, title, description, id } = props; // Додано id для ідентифікації книги

  return (
    <Col md={4}>
      <Card className={"mx-auto " + styles.cardHome}>
        <Card.Img
          variant="top"
          src={imageSrc}
          alt="Product Image"
          className={styles.cardImgTop}
        />
        <Card.Body>
          <Card.Title className={styles.cardTitle}>{title}</Card.Title>
          <Card.Text className={styles.cardText}>{description}</Card.Text>
          <Link to={`/book/${id}`}>
            <Button variant="primary" className={styles.cardButton}>
              Деталі книги
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
