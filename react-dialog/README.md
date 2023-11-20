### Documentation, TS support, and more features are in progress

The main idea behind this component is to use all the benefits of the native `<dialog />` element.
With no effort and zero dependencies, we can get a lot of stuff right from the box.
Key advantages: focus-trap, a11y coverage, correct positioning and stacking context (always-on-top, no dances around `position`, `z-index`, DOM structure and scope), built-in `show()`/`showModal()`/`close()`/`cancel()` methods, `returnValue` on `close()`, `cancel()` on `Esc` key, test cases simplification.
Actually, you don't need any third-party components to create a nice, accessible and easy-to-use modals.

Anyway, here is the `<Dialog />` component for React if you think that you need one `:D`
It has simple default styling with two color themes and controls but you can customize it to fit your needs and design.

See the most commonly used variant on [GitHub Pages]()

Here is the simplest one:
```js
import { useState } from 'react';

const MyComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsDialogOpen(true)}>
        Open dialog
      </button>

      <Dialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen}>
        <p>Bye React Portal :Ь</p>
      </Dialog>
    </>
  );
};
```
