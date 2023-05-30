import { useEffect, useState } from "react";

const Fetchdata = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:8080/product/");
      if (!res.ok) throw new Error("Oops! An error has occured");
      const json = await res.json();
      setProducts(json.items);
    };
    getData();
  }, []);

  return products;
};

export default Fetchdata;
