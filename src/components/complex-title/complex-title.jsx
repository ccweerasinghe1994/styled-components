import React from "react";
import styled from "styled-components";
const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="box"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: var(--primary);
    margin: 0 auto;
  }

  .box {
    border: var(--border);
    height: 1rem;
  }
`;

export default ComplexTitle;
