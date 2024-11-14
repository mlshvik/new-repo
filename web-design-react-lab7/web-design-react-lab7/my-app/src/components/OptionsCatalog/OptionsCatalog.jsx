import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Search from "../search/Search";
import Filter from "../Filter/Filter";
import ApplyButton from "../ApplyButton/ApplyButton";

const filterGenre = (genre, data) => {
  if (genre === "") {
    return data;
  } else {
    return data.filter((item) => item.genre.includes(genre));
  }
};

const filterAuthor = (author, data) => {
  if (author === "") {
    return data;
  } else {
    return data.filter((item) => item.author.includes(author));
  }
};

const filterPrice = (price, data) => {
  if (price === "") {
    return data;
  } else {
    return data.filter((item) => item.price.includes(price));
  }
};

const OptionsCatalog = ({ data }) => {
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleAuthorChange = (event) => {
    const selectedAuthor = event.target.value;
    setAuthor(selectedAuthor);
    const filteredBooks = filterAuthor(selectedAuthor, data);
    setSelectedBooks(filteredBooks);
  };

  return (
    <Container fluid style={{ marginTop: "30px" }}>
      <Row>
        <Col
          md={6}
          style={{ display: "flex", justifyContent: "center", gap: "40px" }}
        >
          <Filter
            name={"Genre"}
            choices={[
              "Fiction",
              "Fantasy",
              "Science Fiction",
              "Mystery",
              "Thriller",
              "Romance",
              "Horror",
              "Biography",
              "Something else",
            ]}
          />
          <Filter
            name={"Author"}
            choices={[
              "Ernest Hemingway",
              "J.R.R. Tolkien",
              "Isaac Asimov",
              "Agatha Christie",
              "Stephen King",
              "H.P. Lovecraft",
              "Walter Isaacson",
              "Someone else",
            ]}
            onChange={handleAuthorChange}
          />
          <Filter
            name={"Price"}
            choices={["1-10$", "11-20$", "21-30$", "31-40$", "41 +$"]}
          />
        </Col>
        <Col md={3} style={{ display: "flex", justifyContent: "left" }}>
          <ApplyButton />
        </Col>
        <Col md={3} style={{ display: "flex", justifyContent: "center" }}>
          <Search />
        </Col>
      </Row>
      {selectedBooks.length > 0 && (
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <h3>Books by {author}</h3>
            {selectedBooks.map((book, index) => (
              <Card key={index} style={{ marginBottom: "10px" }}>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.description}</Card.Text>
                  <Card.Text>Price: ${book.price}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default OptionsCatalog;
