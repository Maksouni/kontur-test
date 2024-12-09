import Code from '../assets/code.svg'
import CustomButton from './CustomButton'

export default function CarouselSlide() {
    const handleButtonClick = () => {

    }

    return (
        <div className="carousel-slide">
            <img src={Code} alt="code" className='image-slide' />
            <div className='slide-text-container'>
                <h1>
                    Школа
                    <span style={{ color: 'var(--primary-color)' }}>{` {`}</span>
                    <span style={{ fontWeight: 700 }}>программирования</span>
                    <span style={{ color: 'var(--primary-color)' }}>{`} `}</span>
                    <br />для тех, кому нужны
                    <br />реальные навыки,
                    <br />а не просто сертификат
                </h1>
                <hr />
                <p>
                    Закажите звонок, и наш специалист свяжется с
                    <br />вами в ближайшее время
                </p>
                <CustomButton
                    text='Заказать звонок'
                    onClick={handleButtonClick}
                />
            </div>
        </div>
    )
}