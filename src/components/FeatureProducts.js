import Fetchdata from "../components/Fetchdata";
import SingleProduct from "./SingleProduct";
import { useTranslation } from "react-i18next";

const FeatureProducts = () => {
  const products = Fetchdata();
  const { t } = useTranslation();

  return (
    <section className="container mx-auto">
      <h2 className="text-4xl py-10 text-center font-medium text-gray-700">
        {t("featureProducts.1")}
      </h2>
      <div className="grid grid-cols-3 gap-10 w-[80%] mx-auto pb-20">
        {products &&
          products
            .filter((product) => product.id % 2 === 0)
            .map((product) => {
              return <SingleProduct key={product.id} product={product} />;
            })}
      </div>
    </section>
  );
};

export default FeatureProducts;
