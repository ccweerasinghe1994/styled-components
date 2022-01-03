import React from "react";
import styled from "styled-components";
import { colors } from "../../utils";
const AlternativeTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
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
    background-color: ${colors.primary};
    margin: 0 auto;
  }
`;

export default AlternativeTitle;
