import React from "react";
import CountUp, { useCountUp } from "react-countup";
import Header from "../../Header";

function Countup() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    end: 2000,
    duration: 5,
    startOnMount: false,
  });
  return (
    <div>
      <Header
        title="Count Up"
        link="https://www.npmjs.com/package/react-countup#simple-example"
      />

      <div>
        <p>{countUp}</p>

        <button onClick={start}>Start</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => update(2000)}>Update</button>
      </div>
      <p>Simple countup</p>
      <CountUp end={500} />
      <p>5s duration</p>
      <CountUp duration={5} end={500} />
      <p>Set initial value</p>
      <CountUp duration={5} start={100} end={1000} />
      <p>Prefix , decimal</p>
      <CountUp duration={5} start={100} end={1000} prefix="$" decimals={2} />
      <p>Suffix , decimal</p>
      <CountUp duration={5} start={100} end={1000} suffix="INR" decimals={2} />
      <p>Render prop example</p>
      <CountUp
        start={-875.039}
        end={160527.012}
        duration={2.75}
        separator=" "
        decimals={4}
        decimal=","
        prefix="EUR "
        suffix=" left"
        onEnd={() => console.log("Ended! 👏")}
        onStart={() => console.log("Started! 💨")}
      >
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} />
            <button onClick={start}>Start</button>
          </div>
        )}
      </CountUp>
    </div>
  );
}

export default Countup;
