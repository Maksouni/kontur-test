import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import TextBlock from './components/TextBlock'
import blockImage1 from './assets/block-image1.svg'
import blockImage2 from './assets/block-image2.svg';
import blockImage3 from './assets/block-image3.svg';
import blockImage4 from './assets/block-image4.svg';
import blockImage5 from './assets/block-image5.svg';
import blockImage6 from './assets/block-image6.svg';
import blockImage7 from './assets/block-image7.svg';

function App() {
  const textBlocksData = [
    {
      id: 1,
      image: blockImage1,
      title: "Огромное количество практики",
      text: "Более 500 самостоятельных заданий и 20 полноценных больших проектов"
    },
    {
      id: 2,
      image: blockImage2,
      title: "Современные методики обучения",
      text: "Спиральное обучение: погружаемся в материал постепенно, виток за витком"
    },
    {
      id: 3,
      image: blockImage3,
      title: "Простое и понятное изложение",
      text: "Вместо заумных терминов – примеры из реального мира"
    },
    {
      id: 4,
      image: blockImage4,
      title: "Гибкий график занятий",
      text: "Учитесь в любое время в удобном для вас темпе"
    },
    {
      id: 5,
      image: blockImage5,
      title: "Прямая связь с опытными программистами",
      text: "Задавайте вопросы и отправляйте свой код на проверку"
    },
    {
      id: 6,
      image: blockImage6,
      title: "Оплата небольшими частями",
      text: "Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу"
    },
    {
      id: 7,
      image: blockImage7,
      title: "Быстрый и легкий возврат",
      text: "Если передумаете учиться – вернем деньги за 3 рабочих дня"
    },

  ]


  return (
    <>
      <Header />
      <div className='carousel-wrapper'>
        <Carousel />
      </div>

      <h1 className='title-study'>
        Обучение в CoDe – это<br />удобно и результативно
      </h1>
      <ul className='blocks-list'>
        {textBlocksData.map((block) => (
          <li key={block.id}>
            <TextBlock
              image={block.image}
              title={block.title}
              text={block.text}
            />
          </li>
        ))}

      </ul>

    </>
  )
}

export default App
