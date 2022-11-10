import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const request = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    request();
  }, []);
  console.log(data);
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setValue(e.target.value)}
      />
      {data.map((el) => {
        return el.name.includes(value) && <Header data={el} />;
      })}
    </div>
  );
}

export default App;
