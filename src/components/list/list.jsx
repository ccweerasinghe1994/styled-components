import styled, { css } from "styled-components";
import React from "react";

const fruits = ["apples", "banana", "orange", "peach"];

const Item = styled.li`
  list-style-type: none;
  ${(props) => {
    if (props.odd) {
      return css`
        color: red;
        background-color: antiquewhite;
      `;
    } else {
      return css`
        color: blue;
        background-color: aquamarine;
      `;
    }
  }}
`;

const List = () => {
  return (
    <>
      <ul>
        {fruits.map((item, index) => (
          <Item odd={(index + 1) % 2 !== 0} key={index}>
            {item}
          </Item>
        ))}
      </ul>
    </>
  );
};

export default List;
