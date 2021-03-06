import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Footer = () =>
{
    return (
        <footer style={{ marginTop: 10, background: '#0000ff' }}>
            <Navbar variant="dark">
                <Container>
                    <Row style={{ width: '100%' }}>
                        <Col sm={12} md={12} lg={4} xl={4}>
                            <Navbar.Brand>Contact Details</Navbar.Brand>
                            <ul className='px-0 mx-0'>
                                <li style={{ color: 'white', listStyle: 'none' }}>
                                    KalpVriksh
                                </li>
                                <li style={{ color: 'white', listStyle: 'none' }}>
                                    1st Floor,
                                </li>
                                <li style={{ color: 'white', listStyle: 'none' }}>
                                    Shakmbhari Complex, Near Variety
                                </li>
                                <li style={{ color: 'white', listStyle: 'none' }}>
                                    Chowk, Bhagalpur-812002
                                </li>
                            </ul>
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4}>
                            <Navbar.Brand>Privacy Policy</Navbar.Brand>
                            <ul className='mx-0 px-0'>
                                <li style={{ listStyle: 'none' }}>
                                    <Nav.Link style={{ color: 'white' }} href="/privacypolicy">Privacy Policy</Nav.Link>
                                </li>
                                <li style={{ listStyle: 'none' }}>
                                    <Nav.Link style={{ color: 'white' }} href="/returnpolicy">Cancellations, Returns & Refunds</Nav.Link>
                                </li>
                                <li style={{ listStyle: 'none' }}>
                                    <Nav.Link style={{ color: 'white' }} href="/termsandconditions">Terms and Conditions</Nav.Link>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4}>
                            <Navbar.Brand>Social Media Links</Navbar.Brand>
                            <ul>
                                <li>
                                    <Nav.Link style={{ color: 'white' }} href="https://www.facebook.com/Kalpvriksh-100274648832018">Facebook</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link style={{ color: 'white' }} href="https://www.instagram.com/kalpvriksh.co.in/">Instagram</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link style={{ color: 'white' }} href="https://twitter.com/Kalpvriksh3">Twitter</Nav.Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Navbar>

            <Navbar bg="dark" variant="dark">
                <Col style={{ color: 'white' }} className='text-center py-3'>
                    Copyright &copy; Kalpvriksh <br />
                    <a href="https://slanzapanika.com" style={{ color: 'white', textTransform: 'capitalize' }}>Designed & Developed By: Darshan (SlanzApanika) </a>
                </Col>
            </Navbar>
        </footer>
    )
}

export default Footer