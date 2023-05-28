import Whyme from "../components/Whyme";
import Herotext from "../components/Herotext";
import OurTeam from "../components/OurTeam";
const About = () => {
  return (
    <>
      <Herotext textt="Sobre Nosotros" />
      <section className=" bg-gray-50 py-20 px-20 ">
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl font-semibold text-gray-700">
                Quienes somos?
              </h1>
              <p className="text-lg text-gray-700">
              Somos un equipo de personas apasionadas comprometidas a proporcionar productos de alta calidad y un servicio al cliente excepcional. 
              Nuestra misión es hacer que la ropa sea accesible para todos, sin importar en qué parte del mundo se encuentren. 
              Compre con nosotros y experimente la diferencia de trabajar con un equipo dedicado y centrado en el cliente.
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-[80%] mx-auto"
              src="https://us.123rf.com/450wm/fizkes/fizkes1803/fizkes180300119/97384801-ceo-de-la-compa%C3%B1%C3%ADa-negra-en-traje-discutiendo-la-presentaci%C3%B3n-de-la-estrategia-comercial-en-la.jpg"
              alt="team img"
            />
          </div>
        </div>
      </section>
      <OurTeam />
      <Whyme />
    </>
  );
};

export default About;
