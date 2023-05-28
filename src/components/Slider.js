import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://www.playerasmark.com/app/assets/media/2018/10/ropa-deportiva.jpg",
    headline: "Diseños Originales",
    body: "Destaca con Diseños Originales: Únicos, Creativos e Inigualables.",
    cta: "Comprar Ahora",
    category: "laptop",
  },
  {
    id: 2,
    src: "https://www.csd.gob.es/sites/default/files/styles/image_style_cinemascope_21_9_1140x488/public/media/images/2020-05/Protocolo%20deportistas.jpg?itok=e_It4NF5",
    headline: "Variedad Flexible para cualquier ocasion ",
    body: "Encuentra la Variedad Flexible para Cualquier Ocasión: Adapta tu estilo a cada momento con nuestra amplia selección de opciones.",
    cta: "Comprar Ahora",
    category: "smartphone",
  },
  {
    id: 3,
    src: "https://www.ecosbox.com/wp-content/uploads/2019/01/zapatos-deportivos.jpg",
    headline: "Comodidad y adaptiblidad para los pies",
    body: "Descubre la Comodidad y Adaptabilidad para tus Pies: Encuentra el equilibrio perfecto entre confort y estilo con nuestra línea de calzado diseñada para satisfacer tus necesidades.",
    cta: "Comprar Ahora",
    category: "smartwatch",
  },
  {
    id: 4,
    src: "https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-760w/public/images/article/cover/2020/11/03/hombre-ropa-deportiva-caminando.jpg?ramen_itok=iqwQftIcTf",
    headline: "Frescura y filtracion de aire",
    body: "Disfruta de la Frescura y Filtración de Aire: Mantén tus espacios frescos y purificados con nuestra tecnología de última generación, que garantiza un ambiente saludable y revitalizante.",
    cta: "Comprar Ahora",
    category: "graphics card",
  },
  {
    id: 5,
    src: "https://babablog.oss-accelerate.aliyuncs.com/2022/04/%E5%B0%81%E9%9D%A2-59.png?x-oss-process=style%2Ffull",
    headline: "Comodidad en cualquier momento",
    body: "Experimenta la Comodidad en Cualquier Momento: Nuestra gama de productos te brinda confort sin compromisos, para que te sientas bien en todo momento y en cualquier situación.",
    cta: "Comprar Ahora",
    category: "earbuds",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative overflow-x-hidden">
      <div
        className="slider relative "
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide image={image} key={image.id} />
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
