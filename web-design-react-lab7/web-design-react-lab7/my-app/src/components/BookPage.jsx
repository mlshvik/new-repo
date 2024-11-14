import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Приклад масиву даних про книги з доданими id
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

function BookDetails() {
  const { id } = useParams(); // Отримуємо id книги з URL
  const navigate = useNavigate(); // Отримуємо функцію для навігації

  const [book, setBook] = useState(null);

  useEffect(() => {
    // Функція для отримання даних книги з масиву
    const fetchBookDetails = () => {
      const bookData = products.find((book) => book.id === parseInt(id));
      setBook(bookData);
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <div>Завантаження...</div>;
  }

  return (
    <div>
      <div style={{ gap: "20px", justifyContent: "center", display: "flex" }}>
        <div style={{ gap: "30px", display: "grid" }}>
          <img
            src={book.imageSrc}
            alt={book.title}
            style={{ maxWidth: "200px" }}
          />
          <button
            onClick={() => navigate(-1)}
            style={{
              backgroundColor: "blue",
              color: "white",
              borderBottomColor: "transparent",
            }}
          >
            Повернутися назад
          </button>
        </div>
        <div>
          <h1>{book.title}</h1>
          <p>Автор: {book.author}</p>
          <p>Жанр: {book.genre}</p>
          <p>Опис: {book.description}</p>
          <p>Ціна: {book.price} грн</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
