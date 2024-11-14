import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Col,
  Row,
  Card,
  Image,
} from "react-bootstrap";
import styles from "../ItemDetails/ItemDetails.module.css";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  const products = [
    {
      author: "Author1",
      title: "Book1",
      description: "Description1",
      price: 10,
      imageSrc: "path_to_image1",
    },
    {
      author: "Author2",
      title: "Book2",
      description: "Description2",
      price: 15,
      imageSrc: "path_to_image2",
    },
  ];

  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleAuthorChange = (event) => {
    const author = event.target.value;
    setSelectedAuthor(author);
    const books = products.filter((product) => product.author === author);
    setSelectedBooks(books);
  };

  // Отримуємо унікальних авторів з масиву products
  const uniqueAuthors = Array.from(
    new Set(products.map((product) => product.author))
  );

  return (
    <Container className={styles.container}>
      <Card>
        <Row>
          <Col sm={8}>
            <Card.Body>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column md="2">
                    Author
                  </Form.Label>
                  <Col md="4">
                    <Form.Control
                      as="select"
                      value={selectedAuthor}
                      onChange={handleAuthorChange}
                    >
                      <option value="">Select Author</option>
                      {uniqueAuthors.map((author) => (
                        <option key={author} value={author}>
                          {author}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Form.Group>
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* Відображення інформації про обрані книги */}
      {selectedBooks.length > 0 && (
        <Card className={styles.selectedBookCard}>
          {selectedBooks.map((book) => (
            <Row key={book.title}>
              <Col sm={4}>
                <Image
                  src={book.imageSrc}
                  alt={book.title}
                  fluid
                  className={styles.picture}
                />
              </Col>
              <Col sm={8}>
                <Card.Body>
                  <Card.Title className={styles.title}>{book.title}</Card.Title>
                  <Card.Text className={styles.description}>
                    {book.description}
                  </Card.Text>
                  <Card.Text className={styles.price}>
                    Price: ${book.price}
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          ))}
          <Row className={styles.bottomRow}>
            <Col sm={4}>
              <Button variant="primary" className={styles.buttons}>
                <Link to={"/catalog"} className={styles.goBack}>
                  Go back
                </Link>
              </Button>
            </Col>
            <Col sm={4} className={styles.buttonsRow}>
              <Button variant="primary" className={styles.buttons}>
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Card>
      )}
    </Container>
  );
};

export default ItemDetails;
