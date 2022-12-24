import vk from '../img/vkfooter.png'
import vector from '../img/Vector.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer__green'></div>
      <div className='footer__pink'></div>
      <div className="footer__container _container">
        <div className="footer__title">
          <h1>“Серафим”</h1>
          <div className="footer__text">
            <p>детский православный приют-пансион</p>
            <a href="#"><img src={vk}/></a>
          </div>
        </div>
        <div className='footer__body'>
          <nav>
            <ul>
              <li>
                <a href="#">ГЛАВНАЯ</a>
              </li>
              <li>
                <a href="#">НОВОСТИ</a>
              </li>
              <li>
                <a href="#">О ПРИЮТЕ <img src={vector} alt="" /></a>
                <div className='submenu__footer'>
                  <a href="#">О НАС</a>
                  <a href="#">ОТЧЁТЫ</a>
                  <a href="#">ОФИЦИАЛЬНЫЕ ДОКУМЕНТЫ</a>
                  <a href="#">РЕКВИЗИТЫ</a>
                  <a href="#">СОТРУДНИКИ</a>
                </div>
              </li>
              <li>
                <a href="#">ПРИНИМАЕМ ДЕТЕЙ</a>
              </li>
              <li>
                <a href="#">КАК ПОМОЧЬ?</a>
              </li>
              <li>
                <a href="#">КАК НАС НАЙТИ</a>
              </li>
              <li>
                <a href="#">НАШИ ДЕТИ</a>
              </li>
            </ul>
          </nav>
          <div className='footer__span'>
            <span>440008, г. Пенза, ул. Захарова, 6</span><br/>
            <span>8-927-374-47-00</span><br/>
            <span>serafim-deti@mail.ru</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer