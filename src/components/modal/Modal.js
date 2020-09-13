import React, { useState } from "react";
import Modal from "react-modal";
import Header from "../../Header";

function ShowModal() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Header title="Modal" link="http://reactcommunity.org/react-modal/" />

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
