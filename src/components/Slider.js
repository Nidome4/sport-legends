import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";
import { useTranslation } from 'react-i18next';

const data = [
  {
    id: 1,
    src: "https://www.playerasmark.com/app/assets/media/2018/10/ropa-deportiva.jpg",
    headline: "slider.headline1",
    body: "slider.body1",
    cta: "slider.cta1",
    category: "laptop",
  },
  {
    id: 2,
    src: "https://www.csd.gob.es/sites/default/files/styles/image_style_cinemascope_21_9_1140x488/public/media/images/2020-05/Protocolo%20deportistas.jpg?itok=e_It4NF5",
    headline: "slider.headline2",
    body: "slider.body2",
    cta: "slider.cta2",
    category: "smartphone",
  },
  {
    id: 3,
    src: "https://www.ecosbox.com/wp-content/uploads/2019/01/zapatos-deportivos.jpg",
    headline: "slider.headline3",
    body: "slider.body3",
    cta: "slider.cta3",
    category: "smartwatch",
  },
  {
    id: 4,
    src: "https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-760w/public/images/article/cover/2020/11/03/hombre-ropa-deportiva-caminando.jpg?ramen_itok=iqwQftIcTf",
    headline: "slider.headline4",
    body: "slider.body4",
    cta: "slider.cta4",
    category: "graphics card",
  },
  {
    id: 5,
    src: "https://babablog.oss-accelerate.aliyuncs.com/2022/04/%E5%B0%81%E9%9D%A2-59.png?x-oss-process=style%2Ffull",
    headline: "slider.headline5",
    body: "slider.body5",
    cta: "slider.cta5",
    category: "earbuds",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { t } = useTranslation();

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <div className="frame relative overflow-x-hidden">
      <div
        className="slider relative "
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide
            key={image.id}
            src={image.src}
            headline={t(image.headline)}
            body={t(image.body)}
            cta={t(image.cta)}
          />
        ))}
      </div>
      <div className="btns absolute z-[1]  text-gray-50 bottom-[50%] w-screen ">
        <div className="flex  justify-between pr-5 pl-1 gap-10 ">
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