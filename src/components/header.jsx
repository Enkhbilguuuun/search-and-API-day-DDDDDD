import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import { darkModeContext } from "../App";
import axios from "axios";
// import "App.css";
import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function header({ data }) {
  console.log(data);
  return (
    <div>
      <Card style={{ display: "flex", flexDirection: "column" }}>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            email: {data.email}
            <br />
            Username: {data.username}
          </Card.Text>
          <Button variant="primary" href="https://pointerpointer.com/">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default header;
