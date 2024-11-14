import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProductCatalogCard from "../ProductCatalogCard/ProductCatalogCard";

function ProductCatalogList() {
  const products = [
    {
      id: 1,
      imageSrc: "/images/holly_book.png",
      title: "Holly by Stephen",
      description:
        "Ignite your child's imagination with our delightful selection of children's books! ...",
      author: "Stephen",
      genre: "Children's Books",
      price: 10.99,
    },
    {
      id: 2,
      imageSrc: "/images/all_your_perfects_book.png",
      title: "All your perfects by Colleen Hoover",
      description:
        "Dive into the world of suspense and excitement with our thrilling selection of books! ...",
      author: "Colleen Hoover",
      genre: "Suspense",
      price: 12.99,
    },
    {
      id: 3,
      imageSrc: "/images/hunting_adeline_book.png",
      title: "Hunting Adeline by H. D. Carlton",
      description:
        "Indulge in heartwarming tales of love, passion, and serendipity with our curated selection of romance books! ...",
      author: "H. D. Carlton",
      genre: "Romance",
      price: 9.99,
    },
    {
      id: 4,
      imageSrc: "/images/LordOfRings.png",
      title: "Lord of Rings by J.R.R. Tolkien",
      description:
        "An epic fantasy that follows the journey of Frodo Baggins, a hobbit tasked with destroying the powerful and corrupting One Ring...",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      price: 15.99,
    },
    {
      id: 5,
      imageSrc: "/images/FairyTale.png",
      title: "Fairy Tale by Stephen King",
      description:
        "A dark fantasy novel that follows Charlie Reade, a seventeen-year-old who stumbles upon a hidden world filled with magic and terror ...",
      author: "Stephen King",
      genre: "Dark Fantasy",
      price: 14.99,
    },
    {
      id: 6,
      imageSrc: "/images/TheBigFour.png",
      title: "The Big Four by Agatha Christie",
      description:
        "A thrilling mystery featuring the brilliant Belgian detective Hercule Poirot. In this novel, Poirot faces an international crime syndicate...",
      author: "Agatha Christie",
      genre: "Mystery",
      price: 11.99,
    },
  ];

  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const authors = [...new Set(products.map((product) => product.author))];
  const genres = [...new Set(products.map((product) => product.genre))];
  const priceRanges = [
    { label: "1-10", min: 1, max: 10 },
    { label: "10-20", min: 10, max: 20 },
    { label: "20-30", min: 20, max: 30 },
    { label: "30-50", min: 30, max: 50 },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesAuthor = selectedAuthor
      ? product.author === selectedAuthor
      : true;
    const matchesGenre = selectedGenre ? product.genre === selectedGenre : true;
    const matchesPrice = selectedPriceRange
      ? product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max
      : true;
    return matchesAuthor && matchesGenre && matchesPrice;
  });

  return (
    <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
      <Row className="mb-4">
        <Col md={4}>
          <Form.Group controlId="authorSelect">
            <Form.Label>Виберіть автора</Form.Label>
            <Form.Control
              as="select"
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
            >
              <option value="">Всі автори</option>
              {authors.map((author, index) => (
                <option key={index} value={author}>
                  {author}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="genreSelect">
            <Form.Label>Виберіть жанр</Form.Label>
            <Form.Control
              as="select"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="">Всі жанри</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="priceSelect">
            <Form.Label>Виберіть ціну</Form.Label>
            <Form.Control
              as="select"
              value={selectedPriceRange.label}
              onChange={(e) =>
                setSelectedPriceRange(
                  priceRanges.find((range) => range.label === e.target.value)
                )
              }
            >
              <option value="">Всі ціни</option>
              {priceRanges.map((range, index) => (
                <option key={index} value={range.label}>
                  {range.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {filteredProducts.length === 0 ? (
        <Row>
          <p>Нічого не знайдено за вашим запитом:(</p>
        </Row>
      ) : (
        <Row className="g-3">
          {filteredProducts.map((product, index) => (
            <ProductCatalogCard
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
              price={product.price}
              link={product.link}
            />
          ))}
        </Row>
      )}
    </Container>
  );
}

export default ProductCatalogList;
