import React from 'react'

const ChildrenItem = (props) => {
  return (
    <div className={`card child__card${props.post.id}`}>
      <div className="light">
        <h2>{props.post.title}</h2>
        <span>{props.post.body}</span>
        <div className="arrow">&uarr;</div>
      </div>
    </div>
  )
}

export default ChildrenItem