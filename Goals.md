# Goals

- [x] Button component
- [x] Display different text
- [ ] Display different styling (variants)
- [x] Display a spinner on the button (sometimes)
- [x] When you click the button, something (could / should) happen

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
- If the props are created, at least make it clear which props can be used
- Maybe use CSS 🤷
- (BONUS): attributes like onClick, disabled, type etc can be used like normal

Approach

- Use opening & closing tags with `props.children` for nesting content inside elements
- `prop-types` to document which props exists
- use `css-modules` we use props to apply classes (maybe conditionally)
- (BONUS) using {...otherProps} and `<button {...otherProps}>` so normal HTML attributes like onClick, disabled, type etc can be passed to the button (no other more rewriting HTML)

## My approach

Improvements wanted

- Same as intermediate (including BONUS)
- Write less code
- Less complexity, so no ...props, {...props}
