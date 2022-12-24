import React, {useState} from "react";
import AboutItem from "./AboutItem"
import Aboutpng from "../img/about.png";

const About = () => {
  return (
    <section className="about _container">
        <div className="about__container">
            <h1>О приюте</h1>
            <ul>
                <AboutItem list={{text: 'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста'}}/>
                <AboutItem list={{text: 'За прошедшие годы текст Lorem Ipsum получил много версий'}}/>
                <AboutItem list={{text: 'Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'}}/>
                <AboutItem list={{text: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации'}}/>
                <AboutItem list={{text: 'Если вам нужен Lorem Ipsum для серьёзного проекта'}}/>
            </ul>
            <button>ПОДРОБНЕЕ <div>&uarr;</div></button>
        </div>
        <img src={Aboutpng} alt="" className="home"/>
    </section>
  )
}

export default About