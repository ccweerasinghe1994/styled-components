import styled, { keyframes } from "styled-components";
import React from "react";

const spinner = keyframes`
to{
    transform: rotate(260deg);
}

`;

const Wrapper = styled.div`
  width: 6rem;
  height: 6rem;
  border: 9px solid paleturquoise;
  border-radius: 50%;
  border-top-color: aquamarine;
  border-top-width: 5px;
  animation: ${spinner} 0.4s linear infinite;
`;

const Loading = () => {
  return <Wrapper></Wrapper>;
};

export default Loading;
