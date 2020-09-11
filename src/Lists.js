import React from "react";
import { Link } from "react-router-dom";

function Lists() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/react-icons">React Icons</Link>
        </li>
        <li>
          <Link to="/toast">Toast</Link>
        </li>
        <li>
          <Link to="/modal">Modal</Link>
        </li>
      </ul>
    </div>
  );
}

export default Lists;
