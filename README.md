# styled-components

learning styled-components in react

## first step

install styled component

```bash

yarn add styled-component

or

npm i styled component

```

let's cleanup the folder structure.

![image](./documentation/images/file-structure.png)

and change the app.js file.

```jsx
function App() {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <h1 className="title">Styled components</h1>
      <button className="btn">Click Me</button>
    </div>
  );
}

export default App;
```

let's add some global styles.

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title {
  text-align: center;
  text-transform: capitalize;
}

.btn {
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
}
```

output
![home-page-1.png](./documentation/images/home-page-1.png)

to reuse a in-line style
we have to copy paste the styles to a component

```jsx
function App() {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <h1 className="title">Styled components</h1>
      <button className="btn">Click Me</button>
      <div>
        <h2
          style={{
            padding: "2rem",
          }}
        >
          hello world
        </h2>
      </div>
    </div>
  );
}

export default App;
```

what if you want to use global css
problem is with that is we cant use the "title" class name to style different element

```jsx
function App() {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <h1 className="title">Styled components</h1>
      <button className="btn">Click Me</button>
      <div>
        <h2 className="title">hello world</h2>
      </div>
    </div>
  );
}

export default App;
```

example

```css
.title {
  text-align: center;
  text-transform: capitalize;
}

.title {
  color: red;
}
```

output
![home-page-1.png](./documentation/images/class.png)

to solve the problem we have to come up with different class names.
it can get very complicated and harder to track in a large project.

## how to use styled component

### snippets

imports

![styled-component-snippets](./documentation/images/styled-compoennt-snippents.png)
creation
![styled-component-snippets](./documentation/images/creation.png)
props and misc

![styled-component-snippets](./documentation/images/props.png)

let's add the first component to the application.

```jsx
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

```

by doing so we eliminate both issues we can reuse it any where.
basic styles component can be used in components.