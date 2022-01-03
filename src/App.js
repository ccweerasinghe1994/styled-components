import { BasicStyles } from "./components/basic-title/basic-title";
import Button from "@mui/material/Button";
import {
  DefaultButton,
  HipsterButton,
  StyledButtonMUI,
} from "./components/default-button/default-button";

function App() {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <BasicStyles special>Styled components</BasicStyles>
      <BasicStyles>Styled components</BasicStyles>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
      <Button variant="contained">Default MUI button</Button>
      <br />
      <br />
      <StyledButtonMUI variant="contained">
        extended styled button
      </StyledButtonMUI>
    </div>
  );
}

export default App;
