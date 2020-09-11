import React, { useState } from "react";
import Modal from "react-modal";

function ShowModal() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <h1>Modal</h1>
      <p>
        Docs:
        <a
          href="http://reactcommunity.org/react-modal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </p>
      <button onClick={() => setModal(true)}>Open Modal</button>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={{
          overlay: {
            backgroundColor: "#595959",
          },
          content: {},
        }}
      >
        <h2>Modal Title</h2>
        <p>Modal Text</p>
        <button onClick={() => setModal(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default ShowModal;
