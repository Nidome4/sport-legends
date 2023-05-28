import { useState, useEffect, useRef } from "react";
import SingleProduct from "../components/SingleProduct";
import { Link } from "react-router-dom";

const Products = () => {
  const [categories1, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const [catPath, setCatPath] = useState("all categories");

  const para = useRef(null);

  const categories = [
    "smartphone",
    "laptop",
    "smartwatch",
    "earbuds",
    "Keyboard",
    "graphics card",
  ];

  const changeCategory =  async (cat) => {
    const res = await fetch("https://itproducts.onrender.com/products/"+ cat.id);
    if (!res.ok) throw new Error("Oops! An error has occured");
    const json = await res.json();
    setIsLoading(false);
    setFilterProducts(json);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://itproducts.onrender.com/products");
        if (!res.ok) throw new Error("Oops! An error has occured");
        const json = await res.json();
        setIsLoading(false);
        setProducts(json);
        setFilterProducts(json);
      } catch (err) {
        setIsLoading(false);
        setErr(err.message);
      }
    };
    getData();
    const getCategories = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://itproducts.onrender.com/products");
        if (!res.ok) throw new Error("Oops! An error has occured");
        const json = await res.json();
        setIsLoading(false);
        setCategories(json);
      } catch (err) {
        setIsLoading(false);
        setErr(err.message);
      }
    }
    getCategories();
  }, []);

  if (isLoading)
    return (
      <p className="h-screen flex flex-col justify-center items-center text-2xl">
        Cargando...
      </p>
    );
  if (err)
    return (
      <p className="h-screen flex flex-col justify-center items-center text-2xl">
        <span>{err}</span>
        <Link to="/product" className="text-lg text-gray-500 font-semibold">
          &larr;Refresh page
        </Link>
      </p>
    );

  return (
    <div className="container mx-auto pb-20">
      <h2 className="text-center text-3xl py-10">Todos los productos</h2>
      <div className="flex justify-between gap-10">
        <div className="w-[20%] bg-gray-50 flex flex-col gap-3 px-3 pt-2">
          <h3
            className="select-none cursor-pointer flex justify-between"
            onClick={() => {
              setFilterProducts(products);
              setCatPath("all categories");
            }}
          >
            <span className="font-semibold">Todas las categorias</span>
            <span>{`(${products.length})`}</span>
          </h3>
          {categories.map((cat, i) => (
            <p
              ref={para}
              className="select-none cursor-pointer capitalize font-semibold"
              key={i}
              onClick={() => {
                const filters = products.filter(
                  (product) => product.category === cat
                );
                setFilterProducts(filters);
                setCatPath(categories[i]);
              }}
            >
              <span>{cat}</span>
            </p>
          ))}
        </div>
        <div>
          <p className="text-gray-500 pb-4">
            {<Link to="/">Home </Link>}/
            <span className="text-sky-400 px-1">{catPath}</span>
          </p>
          <div className="grid grid-cols-3 gap-10 ">
            {filterProducts &&
              filterProducts.map((product) => (
                <SingleProduct key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
