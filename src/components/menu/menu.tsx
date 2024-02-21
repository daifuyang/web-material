import { createElement } from 'react';
import Nav from 'react-bootstrap/Nav';

export interface MenuProps {

}

export default function Menu() {
    return (
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    )
}