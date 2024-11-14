import React, { useState } from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard"; // Імпортуємо ваш компонент для відображення книги

const Search = () => {
  const [data, setData] = useState([]); // Спочатку не показуємо жодних книг
  const [searchQuery, setSearchQuery] = useState(""); // Стан для пошукового запиту

  const handleSearch = (query) => {
    setSearchQuery(query); // Оновлюємо пошуковий запит

    const filteredResults = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setData(filteredResults); // Оновлюємо стан з відфільтрованими даними
  };

  return (
    <div>
      <Form className="mb-3">
        <Col>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search books..."
              value={searchQuery} // Прив'язуємо значення пошукового запиту
              onChange={(e) => handleSearch(e.target.value)} // Викликаємо функцію фільтрації при зміні
            />
          </InputGroup>
        </Col>
      </Form>

      {/* Виводимо відфільтровані книги тільки після введення тексту */}
      {searchQuery && (
        <Row>
          {data.length > 0 ? (
            data.map((product) => (
              <ProductCard
                key={product.title}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
                bookId={product.title} // Можна використовувати title або унікальний ID
              />
            ))
          ) : (
            <p>No books found</p> // Якщо немає книг, що відповідають пошуковому запиту
          )}
        </Row>
      )}
    </div>
  );
};

// Данні книг (можна перенести в окремий файл, якщо потрібно)
const products = [
  {
    imageSrc: "/images/holly_book.png",
    title: "Holly by Stephen",
    description:
      "Ignite your child's imagination with our delightful selection of children's books! ...",
  },
  {
    imageSrc: "/images/all_your_perfects_book.png",
    title: "All your perfects by Colleen Hoover",
    description:
      "Dive into the world of suspense and excitement with our thrilling selection of books! ...",
  },
  {
    imageSrc: "/images/hunting_adeline_book.png",
    title: "Hunting Adeline by H. D. Carlton",
    description:
      "Indulge in heartwarming tales of love, passion, and serendipity with our curated selection of romance books! ...",
  },
  {
    imageSrc: "/images/LordOfRings.png",
    title: "Lord of Rings by J.R.R. Tolkien",
    description:
      "An epic fantasy that follows the journey of Frodo Baggins, a hobbit tasked with destroying the powerful and corrupting One Ring...",
  },
  {
    imageSrc: "/images/FairyTale.png",
    title: "Fairy Tale by Stephen King",
    description:
      "A dark fantasy novel that follows Charlie Reade, a seventeen-year-old who stumbles upon a hidden world filled with magic and terror ...",
  },
  {
    imageSrc: "/images/TheBigFour.png",
    title: "The Big Four by Agatha Christie",
    description:
      "a thrilling mystery featuring the brilliant Belgian detective Hercule Poirot. In this novel, Poirot faces an international crime syndicate...",
  },
];

export default Search;
