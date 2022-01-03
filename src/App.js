import styled from "styled-components";

const BasicStyles = styled.h1`
  text-align: center;
  text-transform: capitalize;
`;

function App() {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <BasicStyles>Styled components</BasicStyles>
      <button className="btn">Click Me</button>
      <div>
        <h2 className="title">hello world</h2>
      </div>
    </div>
  );
}

export default App;
