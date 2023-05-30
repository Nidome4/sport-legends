import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';
import Herotext from "../components/Herotext";
import OurTeam from "../components/OurTeam";
import Whyme from "../components/Whyme";

const About = () => {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <Herotext textt={t('about.Sobre Nosotros')} />
      <section className=" bg-gray-50 py-20 px-20 ">
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl font-semibold text-gray-700">
                {t('about.Who we are?')}
              </h1>
              <p className="text-lg text-gray-700">
                {t('about.Description')}
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
    </I18nextProvider>
  );
};

export default About;

