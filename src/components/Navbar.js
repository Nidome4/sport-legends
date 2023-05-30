import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('es');

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="shadow-lg backdrop-blur-lg py-5 text-gray-900 bg-gray-50">
      <nav className="flex items-center container mx-auto justify-center">
        <div style={{ left: '-5%', position: 'relative' }}>
          <img src={require('./assets/images/logo.png')} alt="Logo" className="w-20 h-20" />
        </div>
        <div>
          <Link to="/" className="text-gray-700 italic text-7xl">
            Sport Legends
          </Link>
        </div>
        <ul className="list-none flex justify-center items-center ml-auto gap-5">
          <li>
            <NavLink to="/">{t('navbar.home')}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{t('navbar.about')}</NavLink>
          </li>
          <li>
            <NavLink to="/product">{t('navbar.products')}</NavLink>
          </li>
        </ul>
        <div className="ml-auto">
          <div className="dropdown">
            <select value={language} onChange={(e) => handleChangeLanguage(e.target.value)}>
              <option value="es">{t('languages.spanish')}</option>
              <option value="en">{t('languages.english')}</option>
              <option value="de">{t('languages.german')}</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
