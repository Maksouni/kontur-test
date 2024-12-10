import './styles.css'

export default function Header() {
    return (
        <header>
            <nav>
                <a href='#' className="logo-text">
                    <span style={{ color: 'var(--secondary-color)' }}>C</span>
                    o
                    <span style={{ color: 'var(--primary-color)' }}>D</span>
                    e
                </a>
                <ul className='header-list'>
                    <li>
                        <a href="#">Чему вы научитесь</a>
                    </li>
                    <li>
                        <a href="#">Процесс обучения</a>
                    </li>
                    <li>
                        <a href="#">Стоимость</a>
                    </li>
                    <li>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
                <a href='tel:+7 499 348 93 96' className='phone'>+7 (499) 348 93 96</a>
            </nav>
        </header>
    )
}