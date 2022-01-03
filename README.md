- [styled-components](#styled-components)
  - [first step](#first-step)
    - [install styled component](#install-styled-component)
  - [how to use styled component](#how-to-use-styled-component)
    - [snippets](#snippets)
  - [passing props](#passing-props)
    - [extending css](#extending-css)
    - [extending React component](#extending-react-component)

# styled-components

learning styled-components in react

## first step

### install styled component

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

this is a react component we are building.
BasicStyles component is a react component there for we have to use Capital letters for the First letter.

```html
<div style="padding: 2rem;">
  <h1 class="sc-dkPtRN hUtUcw">Styled components</h1>
  <h1 class="sc-dkPtRN hUtUcw">Styled components</h1>
  <h1 class="sc-dkPtRN hUtUcw">Styled components</h1>
  <h1 class="sc-dkPtRN hUtUcw">Styled components</h1>
  <button class="btn">Click Me</button>
  <div><h2 class="title">hello world</h2></div>
</div>
```

as you can see styled component provides a unique class names for the elements.

let's create a default button styled components.

```jsx

const DefaultButton = styled.button`
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


```

and use it

```jsx
function App() {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <BasicStyles>Styled components</BasicStyles>
      <DefaultButton>click me</DefaultButton>
    </div>
  );
}

export default App;
```
as we can see out js file gets bigger as we add more components 

solution is to create a separate component folder.
![styled-component-snippets](./documentation/images/component-folder-strucure.png)

## passing props

because this is a react component we can pass props to it.

but accessing it inside the styled component is bit different.

these are the different ways we can pass props.
```jsx
import styled from "styled-components";

export const BasicStyles = styled.h1`
  text-align: center;
  text-transform: capitalize;
  /* color: ${(props) => props.special && "red"}; */
  /* color: ${({ special }) => special && "red"}; */
  color: ${({ special }) => (special ? "red" : "black")};
`;

```
### extending css

```jsx
import styled from "styled-components";
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

```
let's use it.

```jsx

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
    </div>
  );
}

```
output
![styled-component-snippets](./documentation/images/reusing-styles.png)

### extending React component

```jsx
import styled from "styled-components";
import Button from "@mui/material/Button";

// extending a react component

export const StyledButtonMUI = styled(Button)`
  text-transform: lowercase;
`;


```
```jsx
      <Button variant="contained">Default MUI button</Button>
      <br />
      <br />
      <StyledButtonMUI variant="contained">
        extended styled button
      </StyledButtonMUI>
```

![styled-component-snippets](./documentation/images/extending-extending-react-component.png)




![styled-component-snippets](./documentation/images/props.png)
![styled-component-snippets](./documentation/images/props.png)
![styled-component-snippets](./documentation/images/props.png)
![styled-component-snippets](./documentation/images/props.png)
```jsx```
```jsx```
```jsx```