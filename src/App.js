import AlternativeTitle from "./components/alternative-title/alternative-title";
import ComplexTitle from "./components/complex-title/complex-title";
import Random from "./components/random/random";

function App() {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <ComplexTitle title={"more complex title"} />
      <AlternativeTitle title={"alternative title"}/> 
    </div>
  );
}

export default App;
