import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";
import Header from "../../Header";

function IdleTimerComponent() {
  const idleTimerRef = useRef(null);
  // modal is idle for 5 second
  const sessionModalRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onIdle = () => {
    console.log("user Idle");
    setIsModalOpen(true);
    // modal is idle for 5 second
    sessionModalRef.current = setTimeout(logout, 5000);
  };
  const logout = () => {
    setIsModalOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionModalRef.current);
  };
  const stayActive = () => {
    setIsModalOpen(false);
    console.log("User still active");
    clearTimeout(sessionModalRef.current);
  };
  return (
    <div>
      <Header
        title="Idle Timer"
        link="https://www.npmjs.com/package/react-idle-timer"
      />

      {isLoggedIn ? <h1>Hello Shajin</h1> : <h1>Hello Guest</h1>}
      <Modal isOpen={isModalOpen}>
        <p>You will be loged out soon</p>
        <div>
          <button onClick={logout}>Logged out</button>
          <button onClick={stayActive}>Keep me sign in</button>
        </div>
      </Modal>

      <IdleTimer ref={idleTimerRef} timeout={5000} onIdle={onIdle} />
    </div>
  );
}

export default IdleTimerComponent;
