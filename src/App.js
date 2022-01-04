import { HipsterButton } from "./components/default-button/default-button";
import GlobalStyles from "./global-styles";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <GlobalStyles />
      <HipsterButton>Click me</HipsterButton>
      <HipsterButton>Click me</HipsterButton>
      <HipsterButton as="a" href="https://www.google.com">
        i am a link
      </HipsterButton>
      <HipsterButton>Click me</HipsterButton>
    </div>
  );
}

export default App;
