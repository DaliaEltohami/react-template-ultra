import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarSection,
  List,
  ListItem,
  Logo,
  LogoText,
  NavbarSectionContent,
} from "./style";
import Container from "../styles/Container.styled";

function Navbar() {
  return (
    <NavbarSection>
      <Container>
        <NavbarSectionContent>
          <Logo>
            <LogoText>Ultra Profile</LogoText>
          </Logo>

          <List>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <a href="#">Work</a>
            </ListItem>
            <ListItem>
              <a href="#">Portfolio</a>
            </ListItem>
            <ListItem>
              <a href="#">Resume</a>
            </ListItem>
            <ListItem>
              <a href="#">About</a>
            </ListItem>
            <ListItem>
              <Link to="/contact">Contact</Link>
            </ListItem>
          </List>
        </NavbarSectionContent>
      </Container>
    </NavbarSection>
  );
}
export default Navbar;
