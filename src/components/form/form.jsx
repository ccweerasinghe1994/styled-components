import styled, { css } from "styled-components";
import React from "react";
import { DefaultButton } from "../default-button/default-button";

const Form = () => {
  return (
    <Wrapper>
      <h2>some random stuff</h2>
      <Button>click me</Button>
      <form>
        <h2>Form</h2>
        <Input type="text" />
        <Input type="email" placeholder={"email"} />
        <Input type="password" />
        <Input type="text" />
        <Button type={"submit"}>submit here</Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  form {
    width: 300px;
    background-color: #bebebe29;
    padding: 2rem;
    margin-top: 1rem;
  }
`;

const Button = styled.button.attrs((props) => {
  return {
    type: props.type || "button",
  };
})`
  background-color: var(--primary);
  border: none;
  padding: 0.25rem;
  color: #fff;
  cursor: pointer;
  ${({ type }) => {
    return (
      type === "submit" &&
      css`
        display: block;
        width: 100%;
        margin-top: 1rem;
        border-radius: 0.25rem;
      `
    );
  }}
`;

const Input = styled.input.attrs((props) => {
  return {
    type: props.type || "text",
    placeholder: props.placeholder || "enter a value here",
  };
})`
  box-sizing: border-box;
  width: 100%;
  padding: 0.25rem;
  border: 2px solid #d9dce0;
  margin-top: 1rem;
`;
export default Form;
