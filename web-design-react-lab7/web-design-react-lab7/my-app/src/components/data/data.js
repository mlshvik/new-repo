import React from 'react';
import ProductCatalogList from '../ProductCatalogList/ProductCatalogList'; // Переконайтеся, що правильний шлях

const ParentComponent = () => {
    const products = [
        { imageSrc: '/images/OldManAndTheSea.png', title: 'The Old Man and The Sea', description: 'by Ernest Hemingway', price: '30', link: '1' },
        { imageSrc: '/images/LordOfRings.png', title: 'The Lord of The Rings', description: 'by J. R. R. Tolkien', price: '40', link: '2' },
        { imageSrc: '/images/FairyTale.png', title: 'Fairy Tale', description: 'by Stephen King', price: '27', link: '3' },
        { imageSrc: '/images/TheBigFour.png', title: 'The Big Four', description: 'by Agatha Christie', price: '32', link: '4' },
        { imageSrc: '/images/IRobot.png', title: 'I, Robot', description: 'by Isaac Asimov', price: '36', link: '5' },
        { imageSrc: '/images/FourNovels.png', title: 'Four Novels', description: 'by Jane Austen', price: '27', link: '6' },
        { imageSrc: '/images/TalesOfHorror.png', title: 'Tales Of Horror', description: 'by H.p. Lovecraft', price: '32', link: '7' },
    ];

    return <ProductCatalogList data={products} />;
};

export default ParentComponent;
