import React from 'react'
import { Link } from 'react-router-dom'

function BlueLinkButton({url,text}) {
  return (
    <>
      <Link to={url} className="blue-link-button blue-link-button-text">{text}</Link>
    </>
  )
}

export default BlueLinkButton