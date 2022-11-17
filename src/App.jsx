import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "./App.css";
import Header from "./components/header";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import productCateg from "./components/productCateg";

export default function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  const instance = axios.create({
    baseURL: "https://dummyjson.com/",
  });

  //hereglegchdin data awj bga

  const getData = async () => {
    const rosponse = await instance.get(`products`);
    console.log(rosponse);
    setData(rosponse.data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="rlcont"
        style={{
          width:"1490px",
          height:"",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {data &&
          data.map((el) => {
            return <Header data={el} />;
          })}
      </div>
    </div>
  );
}

//   const [data, setData] = useState([]);
//   const [value, setValue] = useState();
//   const request = () => {
//     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//       setData(res.data);
//     });
//   };
