<<<<<<< HEAD
<<<<<<< HEAD
import video from "../img/video.mp4";
import serafim from "../img/serafim.webp";
=======
import mox from "../img/video.mp4";
import moxjpg from "../img/mox.jpg";
>>>>>>> parent of c426bd4 (jsx:add new video)
=======
import mox from "../img/video.mp4";
import moxjpg from "../img/mox.jpg";
>>>>>>> parent of c426bd4 (jsx:add new video)
import { useRef } from "react";

const Video = () => {

    let state = true

    const ref = useRef()

    const video_player = () => {
        if(state) {
            ref.current.play()
            state = false
        } else {
            ref.current.pause()
            state = true
        }
    }


  return (
    <section className="video">
        <div className="video__container _container">
            <div className="video__title">
                <h1>Видео</h1>
                <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например</p>
                <button>ПОДРОБНЕЕ <div>&uarr;</div></button>
            </div>
            <div className="videoo">
<<<<<<< HEAD
<<<<<<< HEAD
                <video controls width="538px" height="318px" poster={serafim} id="myVideo" ref={ref}>
                    <source src={video}/>
=======
=======
>>>>>>> parent of c426bd4 (jsx:add new video)
                <video controls width="538px" height="318px" poster={moxjpg} id="myVideo" ref={ref}>
                    <source src={mox}/>
>>>>>>> parent of c426bd4 (jsx:add new video)
                </video>
            </div>
            <div className="video__info">
                <h2>С Новым 2023 годом!</h2>
                <p>Пусть немного с опозданием, но от всей души поздравляем всех с Новым годом! Мира, Добра и Радости!!!</p>
                <button onClick={video_player}>ПОСМОТРЕТЬ <div>=</div></button>
            </div>
        </div>
    </section>
  )
}

export default Video