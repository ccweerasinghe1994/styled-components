import GlobalStyles from "./global-styles";
import List from "./components/list/list";
import Products from "./components/products/products";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <GlobalStyles />
      <List />
      <Products />
    </div>
  );
}

export default App;
