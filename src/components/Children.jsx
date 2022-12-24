import React, {useState} from 'react'
import ChildrenItem from './ChildrenItem';
import ChildBot from '../img/child_bot.png'

const Children = () => {

const [value, setValue] = useState("TEXT");

  return (
    <div>
        <section className="children">
            <div className="children__header _container">
                <h1>Наши дети</h1>
                <button>ПОДРОБНЕЕ <div>&uarr;</div></button>
            </div>
            <div className="children__container _container">
                <ChildrenItem post={{id: 1, title: 'Илья (7 лет)', body: `Мечтает, как и остальные ребята, кто не ездил с нами, увидеть море`}}/>
                <ChildrenItem post={{id: 2, title: 'Костя (9 лет)', body: 'Мечтает попасть в Московский зоопарк и увидеть живого слона!'}}/>
                <ChildrenItem post={{id: 3, title: 'Иван (6 лет)', body: 'Мечтает вместе с нами отправиться на море'}}/>
                <ChildrenItem post={{id: 4, title: 'Арина (9 лет)', body: 'Мечтает о поездке в Московский зоопарк'}}/>
                <ChildrenItem post={{id: 5, title: 'Малинка (5 лет)', body: 'Ждёт лето, чтобы вместе со всеми ребятами отправиться на отдых!'}}/>
                <ChildrenItem post={{id: 6, title: 'Кирилл (6 лет)', body: 'Мечтает вместе с нами отправиться на море'}}/>
                <ChildrenItem post={{id: 7, title: 'Артём (11 лет)', body: 'Мечтает вместе со всеми отправиться к морю'}}/>
                <ChildrenItem post={{id: 8, title: 'Ариша (6 лет)', body: 'Очень хочет побывать в аквапарке'}}/>
            </div>
        </section>
        <img src={ChildBot} alt="" />
    </div>
  )
}

export default Children