import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../header/Header.module.css';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <Navbar expand="lg" className={styles.header}>
            <Container fluid className="mx-2">
                <Navbar.Brand as={Link} to="/" className={styles.logo}>
                    <img
                        src="/images/book_icon.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={toggleMobileMenu}
                />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto" activeKey="/">
                        <Nav.Link as={Link} to="/" className={styles.navItem}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/catalog" className={styles.navItem}>
                            Catalog
                        </Nav.Link>
                        <Nav.Link as={Link} to="/more" className={styles.navItem}>
                            More
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login" className={styles.navItem}>
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <NavDropdown title="Menu" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/catalog">Catalog</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/more">More</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                    </NavDropdown>
                </div>
            )}
        </Navbar>
    );
};

export default Header;
