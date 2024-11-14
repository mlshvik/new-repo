import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from '../heading/Heading.module.css';

const Heading = () => {
    return (
        <Container fluid className="mt-5">
            <Row className={styles.container}>
            <Col md={4}>
                    <Image src="images/girl_reads.png" alt="Image" fluid />
                </Col>
                <Col md={8} className={styles.textContainer}>
                    <div className={styles.text}>
                        <h2>Bookaholic</h2>
                        <p>Welcome to Bookaholics – The Ultimate Online Book Haven!

Bookaholics Anonymous is your go-to spot for all things books, curated for readers who just can’t get enough! Browse our carefully selected titles, from bestselling novels to hidden gems, all just a click away. Join a community of book lovers who know that there’s no such thing as too many books – and let us help you find your next favorite read!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Heading;
