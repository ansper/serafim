import fund from '../img/fund.png'
import donate from '../img/donate.png'

const Fund = () => {
  return (
    <section className='fund'>
        <div className='fund__container _container'>
          <div className='fund__text'>
            <h1>“Название благотворительного фонда”</h1>
            <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."</p>
            <div className='fund__button'>
              <button>ПОЖЕРТВОВАТЬ</button>
              <img src={donate} alt="" />
            </div>
          </div>
          <img src={fund} alt="" />
        </div>
    </section>
  )
}

export default Fund