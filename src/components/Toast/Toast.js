import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  hideProgressBar: true,
});
function Toast() {
  const toastify = () => {
    toast("Default Notification", {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
    toast.success("success", {
      position: toast.POSITION.TOP_CENTER,
    });
    toast.error("Error", {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.dark("Stop Auto close", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: false,
    });
  };
  return (
    <div>
      <h1>Toastificaions</h1>
      <p>
        Docs:
        <a
          href="https://fkhadra.github.io/react-toastify/introduction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </p>
      <button onClick={toastify}>Notify</button>
    </div>
  );
}

export default Toast;
