import React, { useState, useEffect } from "react";
import {
  ListGroup,
  Button,
  Row,
  Col,
  Form,
  Image,
  Container,
} from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            <Row className="border-bottom pb-2 mb-2 font-weight-bold">
              <Col md={2}></Col>
              <Col md={4} className="center hideOnSm">
                Product name
              </Col>
              <Col md={1} className="center hideOnSm">
                Price
              </Col>
              <Col md={2} className="center hideOnSm">
                Rating
              </Col>
              <Col md={2} className="center hideOnSm">
                Quantity
              </Col>
              <Col md={1}></Col>
            </Row>
            <ListGroup>
              {cart.map((product) => (
                <ListGroup.Item key={product.id}>
                  <Row>
                    <Col md={2} className="hideOnSm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="cartItemCenter">{product.name}</div>
                    </Col>
                    <Col xs={2} md={1}>
                      <div className="cartItemCenter">${product.price}</div>
                    </Col>
                    <Col xs={3} md={2} className="hideOnSm">
                      <div className="cartItemCenter">
                        <Rating rating={product.ratings} />
                      </div>
                    </Col>
                    <Col xs={2} md={2}>
                      <div className="cartItemCenter">
                        <Form.Control
                          as="select"
                          value={product.qty}
                          onChange={(e) =>
                            dispatch({
                              type: "CHANGE_CART_QTY",
                              payload: {
                                id: product.id,
                                qty: e.target.value,
                              },
                            })
                          }
                        >
                          {[...Array(product.inStock).keys()].map((x) => (
                            <option key={x + 1}>{x + 1}</option>
                          ))}
                        </Form.Control>
                      </div>
                    </Col>
                    <Col xs={2} md={1}>
                      <div className="cartItemCenter">
                        <Button
                          type="button"
                          variant="light"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product,
                            })
                          }
                        >
                          <AiFillDelete />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col xs={12} md={3}>
            <div className="filters summary">
              <p className="title">Cart ({cart.length})</p>
              <p>Checkout {cart.length} item(s):</p>
              <div className="mb-4">
                {cart.map((product) => (
                  <p className="m-0">{product.name}</p>
                ))}
              </div>
              <span className="font-weight-bolder" style={{ fontSize: 24 }}>
                Total: ${total}
              </span>
              <Button type="button" disabled={cart.length === 0}>
                Proceed to Checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
