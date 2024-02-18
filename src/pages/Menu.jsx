import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Menu() {
  const [menu, setMenu] = useState([]);

  const getMenuData = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => setMenu(res.data.data.Data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenuData();
  }, []);

  console.log("menus");

  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      {menu.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <img
            src={item.imageUrl}
            alt={item.name}
            style={{ width: "500px", height: "auto" }}
          />
          <Link to={`/menu/${item.id}`}>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Detail
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;
