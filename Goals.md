# Goals

- [x] Button component
- [x] Display different text
- [ ] Display different styling (variants)
- [x] Display a spinner on the button (sometimes)

## Beginner example

Approach

- Just make a prop for everything!
- Use JS variables -> plug them into the a `style` object

Pros

- Easy, straightforward
- Pretty dynamic, features are implemented

Cons

- Which prop can I use (your colleague needs to go throught the code ☹️)
- The button becomes complex quickly (with each new variant usecase more code is added)
- We are not using the power of CSS to keep things simple (no seperation of styling)

## Intermediate example

Improvements wanted

- Less props, but still supporting all the usecases
- Maybe use CSS 🤷
- If the props are created, at least make it clear which props can be used

Approach

- Use opening & closing tags with `props.children` for nesting content inside elements

## My approach
