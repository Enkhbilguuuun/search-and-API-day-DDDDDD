import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import { darkModeContext } from "../App";
import axios from "axios";
// import "App.css";
import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function header({ data }) {
  console.log("working", data);
  return (
    <div
      style={{
        width: "490px",
        height: "auto",
      }}
    >
      <Container
     
      >
        <Card
          style={{
            height: "auto",
            width: "500px",
          }}
        >
          <Card.Body style={{ height:"auto" }}>
            <Card.Title>{data.brand}</Card.Title>
            <Card.Img
              style={{ height: "270px", width: "370px" }}
              variant="top"
              src={data.images[0]}
            />
            <hr />
            <Card.Text>
              category: {data.category}
              <hr />
              description: {data.discription}
              <hr />
              price: {data.price}
              <hr />
              stock: {data.stock}
            </Card.Text>
          
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
export default header;
