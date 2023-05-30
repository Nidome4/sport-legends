import { useState, useEffect, useRef } from "react";
import SingleProduct from "../components/SingleProduct";
import TextButton from "../components/TextButton";
import { Link } from "react-router-dom";
import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import Form  from '../components/Form';
import ApiComponent from "../components/ApiComponent";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [payload, setPayload] = useState({});
  const [catPath, setCatPath] = useState("all categories");  
  const [isOpen, setIsOpen] = useState(false);

  const successCreate = (response) => {
    if(response){
      getData();
      window.alert("Created Product");      
    }
  }

  const getPayload = (name,data) => {
    setPayload({
      name: name, 
      data: data
    })
    closePopup();
  }
  
  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const para = useRef(null);  

  const changeCategory =  async (cat) => {
    const res = await fetch("http://localhost:8080/product/"+ cat.id);
    if (!res.ok) throw new Error("Oops! An error has occured");
    const json = await res.json();
    setIsLoading(false);
    setFilterProducts(json.items);
  }

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

  useEffect(() => {    
    getData();
    const getCategories = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8080/category/");
        if (!res.ok) throw new Error("Oops! An error has occured");
        const json = await res.json();
        console.log(json);
        setIsLoading(false);
        setCategories(json.items);
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
          {categories.map((cat) => (
            <p
              ref={para}
              className="select-none cursor-pointer capitalize font-semibold"
              key={cat.id}
              onClick={() => changeCategory(cat)}
            >
              <span>{cat.name}</span>
            </p>
          ))}
        </div>
        <div>
          <p className="text-sky-500 pb-4">
            {<Link to="/">Home </Link>}
            <span className="text-gray-400 px-1">/{catPath}</span>
          </p>
          <TextButton onClick={openPopup} style={{button:"round-button",text:"right"}} val={{icon:"+", text:"Añadir producto"}}/>
          <ReactModal isOpen={isOpen} 
            onRequestClose={closePopup}      
          >            
            <div className="close-button" onClick={closePopup}>
              <AiOutlineClose />
            </div>            
            <h2>Título del Popup</h2>
            <Form setPayload={getPayload}/>      
          </ReactModal>
          <ApiComponent url="http://localhost:8080/product/" method="POST" payload={payload} response={successCreate}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
