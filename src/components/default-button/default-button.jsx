import styled from "styled-components";
import Button from "@mui/material/Button";

export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`;

//  overriding default button styles

export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background-color: transparent;
  color: #645cff;
  border: 1px solid #645cff;
`;

// extending a react component

export const StyledButtonMUI = styled(Button)`
  text-transform: lowercase;
`;
