import styled, { css } from "styled-components";
import ComplexTopic from "../complex-title/complex-title";

import React from "react";
const products = [
  {
    id: 1,
    name: "chair",
    price: 30,
  },
  {
    id: 2,
    name: "bed",
    price: 150,
  },
  {
    id: 3,
    name: "couch",
    price: 500,
  },
];

const Products = () => {
  return (
    <div>
      <ComplexTopic title={"all products"} />
      <ul>
        {products.map(({ price, name, id }) => {
          return (
            <Card price={price} key={id}>
              <p className="name">{name}</p>
              <p className="price">${price}</p>
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

const Card = styled.li`
  width: 200px;
  display: flex;
  justify-content: space-between;
  padding: 0% 0.5rem;
  padding-top: 1rem;
  align-items: center;
  border: 1px solid #f1e57e60;
  list-style-type: none;
  background-color: #d1d0c413;
  margin: 1rem 2rem;
  box-shadow: 0rem 0.1rem 0.1rem blanchedalmond;

  .name {
    font-weight: 600;
  }
  .price {
    font-weight: 600;
    ${({ price }) => {
      if (price < 100) {
        return css`
          color: green;
        `;
      } else if (price >= 100 && price <= 200) {
        return css`
          color: #38c5d8;
        `;
      } else {
        return css`
          color: red;
        `;
      }
    }}
  }
`;

export default Products;
