import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect
import axios from "axios";

const MenuDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [menu, setMenu] = useState([]);

  const getMenuDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${id}`)
      .then((res) => setMenu(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenuDetail();
  }, []);

  return (
    <div>
      <h1>Menu Detail</h1>
      <h3>Nama Menu : {menu.name}</h3>
      <p>Deskripsi : {menu.description}</p>
    </div>
  );
};

export default MenuDetail;
