import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/restaurant-icon-png-12.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        Restaurant
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header