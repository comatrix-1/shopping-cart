import React from "react";
import {
  Dropdown,
  Navbar,
  Container,
  FormControl,
  Nav,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }} className="mb-3">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search w-75">
          <FormControl
            placeholder="Search a product"
            className="m-auto"
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>
        <Link to="/cart">
          <Button variant="success" style={{ display: "flex" }}>
            <FaShoppingCart fontSize={20} />
            <Badge className="ml-1">{cart.length}</Badge>
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
