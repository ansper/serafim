import React from 'react'
import heart from "../img/heart.png"

const AboutItem = (props) => {
  return (
        <li>
            <img src={heart} alt="heart" />
            <p>{props.list.text}</p>
        </li>
  )
}

export default AboutItem