import React from "react";
import styled from "styled-components";
import { colors,setBorder } from "../../utils";
const AlternativeTitle = ({ title }) => {
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
    background-color: ${colors.primary};
    margin: 0 auto;
  }
  .box {
    border: ${setBorder({color:'red',type:"solid",width:"1"})};
    height: 1rem;
  }
`;

export default AlternativeTitle;
