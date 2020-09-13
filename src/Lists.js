import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", title: "Home" },
  { to: "/react-icons", title: "React Icons" },
  { to: "/toast", title: "Toast" },
  { to: "/modal", title: "Modal" },
  { to: "/tippy", title: "Tippy" },
  { to: "/count-up", title: "Count Up" },
  { to: "/idle-timer", title: "Idle Timer" },
  { to: "/color-picker", title: "Color Picker" },
  { to: "/credit-cards", title: "Credit Cards" },
  { to: "/date-picker", title: "Date Picker" },
];

function Lists() {
  return (
    <div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
