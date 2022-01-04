import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Wrapper>
      <img
        src="https://images.unsplash.com/photo-1641239734683-3dfab7836418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="dish "
      />
      <footer>
        <h4>product name</h4>
        <p>$35</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: clamp(100px, 300px, 400px);
  background-color: aliceblue;
  border-radius: 3px;
  margin: 0 auto;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  img {
    width: 100%;
    border-radius: 3px;
    transition: all 0.6s ease-in-out;
  }
  footer {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    align-items: center;

    h4 {
      font-weight: 700;
      &::before {
        content: "Name: ";
        color: blueviolet;
      }
    }
  }

  &:hover {
    box-shadow: 5px 3px 43px #9e9c9c3b;
    cursor: pointer;
  }

  &:hover img {
    transform: scale(1.01);
  }
`;

export default Card;
