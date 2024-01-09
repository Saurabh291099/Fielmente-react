import React from 'react'
import { Link } from 'react-router-dom'

function BlueLinkButton({url,text,style,className}) {
  return (
    <>
      <Link to={url} className={`blue-link-button blue-link-button-text ${className}`} style={style}>{text}</Link>
    </>
  )
}

export default BlueLinkButton