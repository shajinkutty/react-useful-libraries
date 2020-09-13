import React, { forwardRef } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import Header from "../../Header";

const ColoredComponent = ({ title }) => {
  return <span style={{ color: "orange" }}>{title}</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ width: "80px" }}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  );
});
function ToolTip() {
  return (
    <div>
      <Header title="Tooltip" link="https://github.com/atomiks/tippyjs-react" />

      <div style={{ paddingBottom: "1rem" }}>
        <Tippy content="ToolTip">
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "1rem" }}>
        <Tippy arrow={false} content="ToolTip">
          <button>Hide Arrow</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "1rem" }}>
        <Tippy delay={1000} content="ToolTip">
          <button>Delay 1s</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "1rem" }}>
        <Tippy placement="left" content="ToolTip">
          <button>Placement left</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "1rem" }}>
        <Tippy
          content={<span style={{ color: "yellow" }}>Color Tool tip</span>}
        >
          <button>Colored Tooltip</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "1rem" }}>
        <Tippy content={<ColoredComponent title="Component tooltip" />}>
          <button>Component Tooltip</button>
        </Tippy>
      </div>
      <p>Custom child</p>
      <div style={{ paddingBottom: "1rem" }}>
        <Tippy content={<ColoredComponent title="Custom child tooltip" />}>
          <CustomChild />
        </Tippy>
      </div>
    </div>
  );
}

export default ToolTip;
