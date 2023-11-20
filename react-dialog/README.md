#### Documentation, TS support, and more features are in progress

The main idea behind this component is to use all the benefits of the native `<dialog />` element.\
With no effort and zero dependencies, we can get a lot of stuff right from the box.

Key advantages:
- focus-trap
- correct positioning and stacking context (always-on-top, no dancing around `position`, `z-index`, DOM structure, and scopes)
- built-in `show()`, `showModal()`, `close()`, and `cancel()` methods
- `returnValue` on `close()`
- `cancel()` on `Esc` key
- test cases simplification
- very simple to use

Actually, you don't need any third-party components to create a nice, accessible and easy-to-use modals.

Anyway, here is the `<Dialog />` component if you think that you need one `:D`\
It has simple default styling with two color themes and controls but you can customize it to fit your needs and design.

See the most commonly used variant on [GitHub Pages](https://said-fd.github.io/react-dialog)

Simplest example:
```js
import { useState } from 'react';
import { Dialog } from '@feeng/react-dialog';

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
