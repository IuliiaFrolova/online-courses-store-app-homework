import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function NavbarMenu() {

    return (
        <Navbar sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/Store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/contacts" as={NavLink}>Contacts</Nav.Link>
                </Nav>

                    <Button
                        style={{ width: "3rem", height: "3rem", position: "relative" }}
                        variant="outline-primary"
                        className="bi bi-cart"
                    >
                        <div
                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                            style={{
                                color: "white",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%, 25%)",
                            }}
                        >
                        </div>
                    </Button>
            </Container>
        </Navbar>
    )
}