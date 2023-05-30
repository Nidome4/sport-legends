import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      src: "https://www.playerasmark.com/app/assets/media/2018/10/ropa-deportiva.jpg",
      headline: t("slider.slide1.headline"),
      body: t("slider.slide1.body"),
      cta: t("slider.slide1.cta"),
      category: "laptop",
    },
    {
      id: 2,
      src: "https://www.csd.gob.es/sites/default/files/styles/image_style_cinemascope_21_9_1140x488/public/media/images/2020-05/Protocolo%20deportistas.jpg?itok=e_It4NF5",
      headline: t("slider.slide2.headline"),
      body: t("slider.slide2.body"),
      cta: t("slider.slide2.cta"),
      category: "smartphone",
    },
    {
      id: 3,
      src: "https://www.ecosbox.com/wp-content/uploads/2019/01/zapatos-deportivos.jpg",
      headline: t("slider.slide3.headline"),
      body: t("slider.slide3.body"),
      cta: t("slider.slide3.cta"),
      category: "smartwatch",
    },
    {
      id: 4,
      src: "https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-760w/public/images/article/cover/2020/11/03/hombre-ropa-deportiva-caminando.jpg?ramen_itok=iqwQftIcTf",
      headline: t("slider.slide4.headline"),
      body: t("slider.slide4.body"),
      cta: t("slider.slide4.cta"),
      category: "graphics card",
    },
    {
      id: 5,
      src: "https://babablog.oss-accelerate.aliyuncs.com/2022/04/%E5%B0%81%E9%9D%A2-59.png?x-oss-process=style%2Ffull",
      headline: t("slider.slide5.headline"),
      body: t("slider.slide5.body"),
      cta: t("slider.slide5.cta"),
      category: "earbuds",
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="frame relative overflow-x-hidden">
      <div
        className="slider relative"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide image={image} key={image.id} />
        ))}
      </div>
      <div className="btns absolute z-[1] text-gray-50 bottom-[50%] w-screen">
        <div className="flex justify-between pr-5 pl-1 gap-10">
          <button
            onClick={prevSlide}
            className="backdrop-blur-xl bg-black bg-opacity-50 text-sky-50 px-4 py-7"
          >
            <span>
              <BsArrowLeft />
            </span>
          </button>

          <button
            onClick={nextSlide}
            className="backdrop-blur-xl bg-black bg-opacity-50 text-sky-50 px-4 py-5"
          >
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
