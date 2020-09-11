import React from "react";
import { IconContext } from "react-icons";
import { FaReact, FaFacebookSquare } from "react-icons/fa";
import { MdGames } from "react-icons/md";
import { IoIosChatbubbles, IoLogoBitcoin } from "react-icons/io";

function ReactIcons() {
  return (
    <div>
      <h1>React Icons</h1>
      <p>
        Docs:
        <a
          href="https://react-icons.github.io/react-icons/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </p>
      <h3>Simple icon</h3>
      <FaReact size="10rem" />
      <FaFacebookSquare size="12rem" color="blue" title="facebook" />
      <MdGames size="5rem" title="material design" />
      <h3>Context Provider</h3>
      <p>Same props for all icons</p>
      <IconContext.Provider value={{ color: "purple", size: "5rem" }}>
        <IoIosChatbubbles />
        <IoLogoBitcoin />
      </IconContext.Provider>
    </div>
  );
}

export default ReactIcons;
