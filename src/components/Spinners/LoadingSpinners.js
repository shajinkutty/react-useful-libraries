import React from "react";
import {
  BarLoader,
  BeatLoader,
  BounceLoader,
  ClimbingBoxLoader,
  ScaleLoader,
} from "react-spinners";
// for styling
import { css } from "@emotion/core";
import Header from "../../Header";

const loaderCss = css`
  margin-bottom: 25px;
  margin-top: 25px;
`;

function LoadingSpinners() {
  return (
    <div>
      <Header
        title="Loading Spinners"
        link="https://www.npmjs.com/package/react-spinners"
      />
      <div>
        <BarLoader css={loaderCss} color="orange" loading width={300} />
        <BeatLoader css={loaderCss} size={24} loading color="purple" />
        <BounceLoader css={loaderCss} loading color="blue" />
        <ClimbingBoxLoader loading css={loaderCss} color="green" />
        <ScaleLoader css={loaderCss} loading />
      </div>
    </div>
  );
}

export default LoadingSpinners;
