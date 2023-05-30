import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SingleProduct = ({ product }) => {
  const { t } = useTranslation();

  const { name, pricing, shortDescription, icon } = product;

  return (
    <div className="single-product flex flex-col bg-gray-50 gap-3 shadow-md hover:shadow-xl hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden">
      <div className="flex justify-center">
        <img
          className="w-72 h-48 object-contain hover:scale-110 duration-500"
          src={require(""+icon)}
          alt={name}
        />
      </div>
      <Link
        to={name}
        state={product}
        className="hover:text-rose-500 duration-300 flex justify-between items-center"
      >
        <h2 className="text-stone-950 font-semibold text-xl capitalize">
          {t("products.productName", { name: product.name.slice(0, 20) })}
        </h2>
      </Link>
      <p className="text-sm text-gray-600">
        {t("products.brand")}:{" "}
        <span className="font-semibold capitalize">{shortDescription}</span>
      </p>
      <p className="text-sm text-gray-600">
        {t("products.price")}:{" "}
        <span className="text-rose-500 font-semibold">{pricing} {t('products.currency')}</span>
      </p>
      <div className="flex justify-between items-center">
        <Link
          to={name}
          state={product}
          className="hover:text-rose-50 text-gray-900 duration-300 flex justify-between items-center"
        >
          <button className="text-sky-400 px-2 py-1 border border-sky-400 rounded-md hover:bg-sky-400 hover:text-sky-50 duration-300">
            {t("products.moreInfo")}
          </button>
        </Link>
        <button
          onClick={() => console.log("añadido")}
          className="bg-sky-400 text-sky-50 hover:bg-sky-50 hover:text-sky-400 duration-300 border border-sky-400 px-2 py-1 rounded-md"
        >
          {t("products.addToCart")}
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
