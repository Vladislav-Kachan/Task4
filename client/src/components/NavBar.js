import React, { useContext } from "react";
import { Context } from "../index";
import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar className="p-2" bg="dark" variant="dark">
        <Navbar.Brand>Web application</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" />
        <Container fluid="sm" className="justify-content-end">
            {user.isAuth &&
                <Nav>
                    <Button variant={"outline-light"} onClick={()=> user.setIsAuth(false)}>Log out</Button>
                </Nav>
                
            }   
        </Container>
    </Navbar>
  );
});

export default NavBar;
