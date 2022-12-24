import mox from "../img/video.mp4";
import moxjpg from "../img/mox.jpg";

const Video = () => {

const myVideo = document.getElementById("myVideo");

const play_pause = () => {
    if(myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.paused();
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
                <video controls width="538px" height="318px" poster={moxjpg} id="myVideo">
                    <source src={mox}/>
                </video>
            </div>
            <div className="video__info">
                <h2>С Новым 2023 годом!</h2>
                <p>Пусть немного с опозданием, но от всей души поздравляем всех с Новым годом! Мира, Добра и Радости!!!</p>
                <button onClick={() => {play_pause()}}>ПОСМОТРЕТЬ <div>=</div></button>
            </div>
        </div>
    </section>
  )
}

export default Video