import React from "react";
import { Link } from "react-router-dom";

function WhiteLinkButton({url,text}) {
  return (
    <>
      <Link to={url} className="white-link-button">{text}</Link>
    </>
  );
}

export default WhiteLinkButton;
