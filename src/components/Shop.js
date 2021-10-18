import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Styles.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import cookbook from "./images/tastybook1.png";

const Shop = () => {
  return (
    <Container>
      <h1> Tasty Cookbooks! </h1>
      <Row>
        <Col md={4}>
          <Image src={cookbook} height="175px" rounded />
        </Col>
        <Col md={4}>
          <Image src={cookbook} height="175px" rounded />
        </Col>
        <Col md={4}>
          <Image src={cookbook} height="175px" rounded />
        </Col>
        <a href=" https://www.amazon.com/Tasty/e/B0779GRM1C/ref=dp_byline_cont_pop_book_1 " >Shop All</a>
      </Row>

      <h1> Tasty Cookware! </h1>
      <Row>
        <Col md={4}>
          <Image src={cookbook} height="175px" rounded />
        </Col>
        <Col md={4}>
          <Image src={cookbook} height="175px" rounded />
        </Col>
        <Col md={4}>
          <Image src={cookbook} height="175px" rounded />
        </Col>
        <a href=" https://www.walmart.com/browse/home/tasty-cookware/4044_1225301_9489794_4388928 " >Shop All</a>
      </Row>
    </Container>
  );
};

export default Shop;


