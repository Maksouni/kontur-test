import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import InfoBlock from "./components/InfoBlock";
import Fancybox from "./components/FancyBox";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import blockImage1 from "./assets/block-image1.svg";
import blockImage2 from "./assets/block-image2.svg";
import blockImage3 from "./assets/block-image3.svg";
import blockImage4 from "./assets/block-image4.svg";
import blockImage5 from "./assets/block-image5.svg";
import blockImage6 from "./assets/block-image6.svg";
import blockImage7 from "./assets/block-image7.svg";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import gallery1 from "./assets/gallery1.png";
import gallery2 from "./assets/gallery2.png";
import gallery3 from "./assets/gallery3.png";
import gallery4 from "./assets/gallery4.png";
import gallery5 from "./assets/gallery5.png";

function App() {
  const infoBlocksData = [
    {
      id: 1,
      image: blockImage1,
      title: "Огромное количество практики",
      text: "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
    },
    {
      id: 2,
      image: blockImage2,
      title: "Современные методики обучения",
      text: "Спиральное обучение: погружаемся в материал постепенно, виток за витком",
    },
    {
      id: 3,
      image: blockImage3,
      title: "Простое и понятное изложение",
      text: "Вместо заумных терминов – примеры из реального мира",
    },
    {
      id: 4,
      image: blockImage4,
      title: "Гибкий график занятий",
      text: "Учитесь в любое время в удобном для вас темпе",
    },
    {
      id: 5,
      image: blockImage5,
      title: "Прямая связь с опытными программистами",
      text: "Задавайте вопросы и отправляйте свой код на проверку",
    },
    {
      id: 6,
      image: blockImage6,
      title: "Оплата небольшими частями",
      text: "Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу",
    },
    {
      id: 7,
      image: blockImage7,
      title: "Быстрый и легкий возврат",
      text: "Если передумаете учиться – вернем деньги за 3 рабочих дня",
    },
  ];

  return (
    <>
      <Header />
      <div className="carousel-wrapper">
        <Carousel />
      </div>

      <h1 className="title-study">
        Обучение в CoDe – это
        <br />
        удобно и результативно
      </h1>

      <ul className="info-blocks-list">
        {infoBlocksData.map((block) => (
          <li key={block.id}>
            <InfoBlock
              image={block.image}
              title={block.title}
              text={block.text}
            />
          </li>
        ))}
      </ul>

      <div className="text-image-container">
        <div className="img-container">
          <img src={image1} alt="help and support image" />
        </div>
        <div className="text-container">
          <h2>Помощь и поддержка</h2>
          <p>
            Если в процессе обучения возникнут сложности, вы <br /> всегда
            сможете задать вопрос своему наставнику.
          </p>
          <p>
            Раз в несколько уроков вы будете получать большое задание, которое{" "}
            <br /> нужно будет сдавать на проверку код-ревьюеру. Он внимательно{" "}
            <br /> изучит ваш код, найдет ошибки и поможет вам стать лучше.
          </p>
        </div>
      </div>
      <div className="text-image-container">
        <div className="text-container">
          <h2>Методика обучения</h2>
          <p>
            Весь учебный материал структурирован по принципу <br /> «спирального
            обучения». Сначала вы получаете базовые знания, <br /> а затем на
            каждом витке спирали углубляетесь в изученные темы, <br /> доводя их
            понимание до совершенства. Такой подход упрощает <br /> обучение и
            гарантирует, что вы не пропустите ничего важного.
          </p>
        </div>
        <div className="img-container">
          <img src={image2} alt="study methodic" />
        </div>
      </div>

      <div className="fancybox-wrapper">
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className="gallery">
            <a data-fancybox="gallery" href={gallery1} className="item item-1">
              <img src={gallery1} />
            </a>
            <a data-fancybox="gallery" href={gallery2} className="item">
              <img src={gallery2} />
            </a>
            <a data-fancybox="gallery" href={gallery3} className="item">
              <img src={gallery3} />
            </a>
            <a data-fancybox="gallery" href={gallery4} className="item">
              <img src={gallery4} />
            </a>
            <a data-fancybox="gallery" href={gallery5} className="item">
              <img src={gallery5} />
            </a>
          </div>
        </Fancybox>
      </div>

      <YMaps>
        <div className="ymap-container">
          <Map
            defaultState={{
              center: [55.028894, 82.926493],
              zoom: 15,
            }}
            width="100%"
            height="100%"
          >
            <Placemark
              geometry={[55.028894, 82.926493]}
              properties={{
                hintContent: "Депутатская, 46",
                balloonContent: "Депутатская, 46",
              }}
            />
          </Map>
        </div>
      </YMaps>
    </>
  );
}

export default App;
