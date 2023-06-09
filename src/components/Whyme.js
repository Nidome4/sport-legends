import React from "react";
import { FaGlobe, FaCertificate, FaPercentage, FaShieldAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Whyme = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 pb-20">
      <div className="container mx-auto flex flex-col gap-5">
        <h2 className="text-4xl py-14 text-center font-semibold text-gray-700">
          {t("whyme.Porque escogernos a nosotros?")}
        </h2>
        <div className="grid grid-cols-4 gap-10 justify-between">
          <div className="text-center  flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaGlobe className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl text-gray-900 font-semibold">
              {t("whyme.Envio internacional")}
            </h1>
            <p className="text-gray-700 text-lg">
              {t("whyme.Ofrecemos envíos a todo el mundo para que nuestros productos sean accesibles a clientes de todo el mundo.")}
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaCertificate className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl font-semibold">{t("whyme.La mejor calidad")}</h1>
            <p className="text-gray-700 text-lg">
              {t("whyme.Creemos en proporcionar a nuestros clientes solo productos de la mejor calidad.")}
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaPercentage className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl font-semibold">{t("whyme.Las mejores ofertas")}</h1>
            <p className="text-gray-700 text-lg">
              {t("whyme.Nos enorgullecemos de ofrecer las mejores ofertas y descuentos a nuestros clientes.")}
            </p>
          </div>
          <div className="text-center flex flex-col gap-3 bg-gray-100 py-10 px-4">
            <div className="flex justify-center">
              <FaShieldAlt className="text-7xl text-gray-700" />
            </div>
            <h1 className="text-2xl font-semibold">{t("whyme.Pagos seguros")}</h1>
            <p className="text-gray-700 text-lg">
              {t("whyme.Ofrecemos una gama de opciones de pago seguro para garantizar que sus transacciones sean seguras.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyme;

