import './styles.css'

// eslint-disable-next-line react/prop-types
export default function InfoBlock({image, title, text}){
    return(
        <div className="info-block">
            <img src={image} alt="image" />
            <h3 className='title'>{title}</h3>
            <p className='text'>{text}</p>
        </div>
    )
}