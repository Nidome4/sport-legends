import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
<div className="shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
  <nav className="flex items-center container mx-auto justify-center">
    <div>
      <img src={require ("./assets/images/img01.webp")} alt="Logo" className="w-60 h-60" />
    </div>
    <div>
      <Link to="/" className="text-gray-700 italic text-7xl">
        Sport Legends
      </Link>
    </div>
    <ul className="list-none flex justify-center items-center ml-auto gap-5">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">Acerca de</NavLink>
      </li>
      <li>
        <NavLink to="/product">Productos</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  </nav>
</div>

  );
};

export default Navbar;
