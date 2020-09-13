import React from "react";

function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        Docs:
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          Click Here
        </a>
      </p>
    </div>
  );
}

export default Header;
