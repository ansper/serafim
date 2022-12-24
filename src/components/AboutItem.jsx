import React, {useState} from 'react'
import heart from "../img/heart.png"

const AboutItem = (props) => {
  return (
        <li>
            <img src={heart} alt="" />
            <p>{props.list.text}</p>
        </li>
  )
}

export default AboutItem