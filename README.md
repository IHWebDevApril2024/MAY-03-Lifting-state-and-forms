# React lifting state up and forms
## Lifting state up
In this lesson we've learned how to lift state up from a child component to a parent component. This is useful when we have a state that is shared between two or more components. By lifting the state up to the parent component, we can share the state between the components and keep the state in sync.

In our example, we had the state for all the recipes in the `App` component. We then passed the state and the function to update the state as props to the `RecipesPage` component. This way, the `RecipesPage` component could update the state in the `App` component. 

Later we did the same with the search input in the `Navbar` component.

## Forms
We also learned how to handle forms in React. 
The `onChange` event is used to update the state when the user types in the input field. We need to create a state for the input field and update the state in the `onChange` event handler.

```jsx	
const [name, setName] = useState('');

function MyComponent() {
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

This way we can keep the state in sync with the input field. 

When the form is submitted, we can use the `onSubmit` event to handle the form submission. We can prevent the default behavior of the form by calling `e.preventDefault()`. This way the page won't reload when the form is submitted.

```jsx
function MyComponent() {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

Remember it's important that in our SPA we don't reload the page when we submit a form. We want to keep the user in the same page and update the content dynamically. That's the beauty of React! ⚛️

