import React, {useState} from 'react'
import NewsItem from './NewsItem';

const News = () => {

const [value, setValue] = useState("TEXT");

  return (
    <section className="news">
        <div className="news__container _container">
            <div className="news__text">
                <h1>Новости</h1>
                <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например</p>
                <button>ПОДРОБНЕЕ <div>&uarr;</div></button>
            </div>
            <NewsItem post={{id: 1, title: "НУЖНО КАЖДЫЙ ДЕНЬ!", data: "29.09.22"}}/>
            <NewsItem post={{id: 2, title: "ДВАЖДЫ ДВА — ЧЕТЫРЕ", data: "21.09.22"}}/>
            <NewsItem post={{id: 3, title: "ЗАВТРА В ШКОЛУ!", data: "31.08.22"}}/>
        </div>
    </section>
  )
}

export default News