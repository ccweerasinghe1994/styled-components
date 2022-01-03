- [styled-components](#styled-components)
  - [first step](#first-step)
    - [install styled component](#install-styled-component)
  - [how to use styled component](#how-to-use-styled-component)
    - [snippets](#snippets)
  - [passing props](#passing-props)
    - [extending css](#extending-css)
    - [extending React component](#extending-react-component)
    - [complex components](#complex-components)
    - [CSS Variables](#css-variables)
    - [Utils Approach](#utils-approach)
    - [Custom Border Example](#custom-border-example)
    - [Card - Setup](#card---setup)
    - [Card - Style Container](#card---style-container)
    - [Card - Nesting](#card---nesting)
    - [Card - Media Queries, Hover and Pseudo Elements](#card---media-queries-hover-and-pseudo-elements)
    - [Global Styles](#global-styles)
    - [Theming](#theming)
    - [Animations](#animations)
    - ['AS' Prop](#as-prop)
    - [Macro and 'CSS' Prop](#macro-and-css-prop)
    - [CSS Helper Function](#css-helper-function)
    - [Form Setup](#form-setup)
    - [Submit Button Styles](#submit-button-styles)
    - [ATTRS - Input Example](#attrs---input-example)
    - [More Complex Props - List Example](#more-complex-props---list-example)
    - [More Complex Props - Products Example](#more-complex-props---products-example)

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

![styled-component-snippets](./documentation/images/extending-react-component.png)


### complex components

complex component

```jsx
import React from "react";
import styled from "styled-components";
const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: #645cff;
    margin: 0 auto;
  }
`;

export default ComplexTitle;

```

use it in home component

```jsx
import ComplexTitle from "./components/complex-title/complex-title";

function App() {
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <ComplexTitle title={"more complex title"} />
    </div>
  );
}

export default App;

```
![styled-component-snippets](./documentation/images/complex-component.png)


here we can use simple class names because these class names are only applied to this specific component.

let's explore it more.

let's create a random component.

```jsx
import React from "react";
import styled from "styled-components";
const Random = () => {
  return (
    <Wrapper>
      <div className="underline"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: rgb(255, 184, 92);
    margin: 4rem auto;
  }
`;

export default Random;


```
here we are using the underline class name again but it is not overriding the above component.
![styled-component-snippets](./documentation/images/complex-example-2.png)

sll the styles in your global css files can be applied as normal with styled component.
but you can override those classes in you styled component.

### CSS Variables
let's go to our ```index.css``` file and 
```css
:root {
  --primary: #645cff;
}
```

then use it in our ```complex component```

```jsx
import React from "react";
import styled from "styled-components";
const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: var(--primary);
    margin: 0 auto;
  }
`;

export default ComplexTitle;


```



### Utils Approach

instead of using global css we can use ```js file``` to store variables.

let's create a ``` utils.js ``` file

```js
export const colors = {
    primary:"#645cff"
}

```


```jsx

import React from "react";
import styled from "styled-components";
import { colors } from "../../utils";
const AlternativeTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: uppercase;
    text-align: center;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: ${colors.primary};
    margin: 0 auto;
  }
`;

export default AlternativeTitle;




```
output

![utils image](./documentation/images/utils.png)






###  Custom Border Example 
![styled-component-snippets](./documentation/images/)
```jsx```


###  Card - Setup
![styled-component-snippets](./documentation/images/)
```jsx```

###  Card - Style Container
![styled-component-snippets](./documentation/images/)
```jsx```

###  Card - Nesting
![styled-component-snippets](./documentation/images/)
```jsx```

###  Card - Media Queries, Hover and Pseudo Elements
![styled-component-snippets](./documentation/images/)
```jsx```

![styled-component-snippets](./documentation/images/)
```jsx```

###  Global Styles
![styled-component-snippets](./documentation/images/)
```jsx```
###  Theming
![styled-component-snippets](./documentation/images/)
```jsx```
###  Animations
![styled-component-snippets](./documentation/images/)
```jsx```
###  'AS' Prop
![styled-component-snippets](./documentation/images/)
```jsx```
###  Macro and 'CSS' Prop
![styled-component-snippets](./documentation/images/)
```jsx```
###  CSS Helper Function
![styled-component-snippets](./documentation/images/)
```jsx```
###  Form Setup
![styled-component-snippets](./documentation/images/)
```jsx```
###1 ATTRS - Button Example
![styled-component-snippets](./documentation/images/)
```jsx```
###  Submit Button Styles
![styled-component-snippets](./documentation/images/)
```jsx```
###  ATTRS - Input Example
![styled-component-snippets](./documentation/images/)
```jsx```
###  More Complex Props - List Example
![styled-component-snippets](./documentation/images/)
```jsx```
###  More Complex Props - Products Example
![styled-component-snippets](./documentation/images/)
```jsx```



