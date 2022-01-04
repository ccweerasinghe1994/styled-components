import {
  DefaultButton,
  HipsterButton,
} from "./components/default-button/default-button";
import GlobalStyles from "./global-styles";
import styled from "styled-components/macro";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <GlobalStyles />
      <DefaultButton>Click Me</DefaultButton>
      <DefaultButton large>Large Button</DefaultButton>
    </div>
  );
}

export default App;
