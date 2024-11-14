import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

function ProductList() {
  const products = [
    {
      id: 0,
      imageSrc: "/images/holly_book.png",
      title: "Holly by Stephen",
      description:
        "Ignite your child's imagination with our delightful selection of children's books! From charming picture books for toddlers to engaging chapter books for early readers, our collection caters to all ages. Each title is thoughtfully chosen to inspire a love for reading, with vibrant illustrations and captivating stories that promote learning and creativity.",
    },
    {
      id: 1,
      imageSrc: "/images/all_your_perfects_book.png",
      title: "All your perfects by Colleen Hoover",
      description:
        "Dive into the world of suspense and excitement with our thrilling selection of books! From psychological twists to gripping mysteries, our collection features captivating stories that will keep you on the edge of your seat. Each title is expertly crafted to deliver unexpected plot twists and adrenaline-pumping action.",
    },
    {
      id: 2,
      imageSrc: "/images/hunting_adeline_book.png",
      title: "Hunting Adeline by H. D. Carlton",
      description:
        "Indulge in heartwarming tales of love, passion, and serendipity with our curated selection of romance books! From timeless love stories to modern romances with a twist, our collection has something for every romantic at heart. Each story is filled with unforgettable characters and emotional journeys that will sweep you off your feet.",
    },
    {
      id: 3,
      imageSrc: "/images/LordOfRings.png",
      title: "Lord of Rings by J.R.R. Tolkien ",
      description:
        "An epic fantasy that follows the journey of Frodo Baggins, a hobbit tasked with destroying the powerful and corrupting One Ring. Created by the Dark Lord Sauron, the Ring holds the potential to enslave Middle-earth. Joined by a fellowship of allies, including the wise wizard Gandalf and the brave Aragorn, Frodo must face countless dangers to reach Mount Doom, where the Ring can be destroyed.",
    },
    {
      id: 4,
      imageSrc: "/images/FairyTale.png",
      title: "Fairy Tale by Stephen King",
      description:
        "A dark fantasy novel that follows Charlie Reade, a seventeen-year-old who stumbles upon a hidden world filled with magic and terror. After befriending a reclusive old man named Mr. Bowditch and his loyal dog, Radar, Charlie inherits a set of keys to a mysterious shed. Inside, he discovers a portal to an alternate universe — a realm filled with ancient horrors, magical creatures, and a kingdom suffering under the rule of a tyrannical evil.",
    },
    {
      id: 5,
      imageSrc: "/images/TheBigFour.png",
      title: "The Big Four by Agatha Christie",
      description:
        'a thrilling mystery featuring the brilliant Belgian detective Hercule Poirot. In this novel, Poirot faces an international crime syndicate known as "The Big Four," a secretive organization plotting global domination. Each member of this group possesses unique skills and influence, making them nearly untouchable: a ruthless financier, a brilliant scientist, a powerful politician, and a mysterious figure known only as "Number Four."',
    },
  ];

  const [visibleProducts, setVisibleProducts] = useState(3);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisible) =>
      Math.min(prevVisible + 3, products.length)
    );
  };

  const showLessProducts = () => {
    setVisibleProducts((prevVisible) => Math.max(prevVisible - 3, 3));
  };

  const handleProductClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  return (
    <Container style={{ marginTop: "100px", marginBottom: "50px" }}>
      <Row>
        {products.slice(0, visibleProducts).map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
            onClick={() => handleProductClick(product.title)}
            button={
              <Link to={`/product/${product.title.replace(/\s+/g, "-")}`}>
                <Button
                  variant="primary"
                  style={{ backgroundColor: "#333", borderStyle: "none" }}
                >
                  View Details
                </Button>
              </Link>
            }
          />
        ))}
      </Row>
      <div className="text-center">
        {visibleProducts < products.length && (
          <Button
            onClick={showMoreProducts}
            variant="primary"
            style={{
              backgroundColor: "#333",
              borderStyle: "none",
              margin: "5px",
            }}
          >
            Show More
          </Button>
        )}
        {visibleProducts > 3 && (
          <Button
            onClick={showLessProducts}
            variant="secondary"
            style={{
              backgroundColor: "#555",
              borderStyle: "none",
              margin: "5px",
            }}
          >
            Show Less
          </Button>
        )}
      </div>
    </Container>
  );
}

export default ProductList;
