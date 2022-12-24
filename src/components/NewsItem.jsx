import React, {useState} from 'react'

const NewsItem = (props) => {
  return (
    <div className={`card card${props.post.id}`}>
        <div className="black">
            <h2>{props.post.title}</h2>
            <span>{props.post.data}</span>
            <div className="arrow">&uarr;</div>
        </div>
    </div>
  )
}

export default NewsItem