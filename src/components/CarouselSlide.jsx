import { useModal } from '../providers/ModalContext'
import CustomButton from './CustomButton'

// eslint-disable-next-line react/prop-types
export default function CarouselSlide({image, title, paragraph}) {
    const { openModal } = useModal()
    const handleButtonClick = () => {
        openModal()
    }

    return (
        <div className="carousel-slide">
            <img src={image} alt="slide-image" className='image-slide' />
            <div className='slide-text-container'>
                <h1>
                    {title}
                </h1>
                <hr />
                <p>
                    {paragraph}
                </p>
                <CustomButton
                    text='Заказать звонок'
                    onClick={handleButtonClick}
                />
            </div>
        </div>
    )
}