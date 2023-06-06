import vk from '../img/vk.png'
import vector from '../img/VectorWhite.png'

const Header = () => {
  return (
    <header>
        <div className="top__header">
            <div className='_container'>
                <span>440008, г. Пенза, ул. Захарова, 6</span>
                <span>8-927-374-47-00</span>
                <span><a href="https:\\mail.ru">serafim-deti@mail.ru</a></span>
            </div>
        </div>
        <div className='header__container _container'>
          <nav>
            <ul>
              <li>
                <a href="/">ГЛАВНАЯ</a>
              </li>
              <li>
                <a href="/">НОВОСТИ</a>
              </li>
              <li>
                <a href="/">О ПРИЮТЕ <img src={vector} alt="" /></a>
                <div className='submenu'>
                  <a href="/">О НАС</a>
                  <a href="/">ОТЧЁТЫ</a>
                  <a href="/">ОФИЦИАЛЬНЫЕ ДОКУМЕНТЫ</a>
                  <a href="/">РЕКВИЗИТЫ</a>
                  <a href="/">СОТРУДНИКИ</a>
                </div>
              </li>
              <li>
                <a href="/">ПРИНИМАЕМ ДЕТЕЙ</a>
              </li>
              <li>
                <a href="/">КАК ПОМОЧЬ?</a>
              </li>
              <li>
                <a href="/">КАК НАС НАЙТИ</a>
              </li>
              <li>
                <a href="/">НАШИ ДЕТИ</a>
              </li>
            </ul>
          </nav>
          <div>
            <div className='fees__container'>
              <span>4</span>
              <span>5</span>
              <span>9</span>
              <span>6</span>
              <span>1</span>
              <span className='rub'>₽</span>
            </div>
            <span className='yourDobro'>ваша доброта</span>
          </div>
        </div>
        <h1 className='_container'>“Серафим”</h1>
        <div className='header__text'>
          <p>детский православный приют-пансион</p>
          <a href="/"><img src={vk} alt='vk'/></a>
        </div>
    </header>
  )
}

export default Header