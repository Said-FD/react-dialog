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

#### Component has only two required properties:
Property name   | Description               | Type                                     | Default value
----------------|---------------------------|------------------------------------------|--------------
isDialogOpen    | Dialog visibility         | `boolean`                                | None
setIsDialogOpen | Handles dialog visibility | `(arg: SetStateAction<boolean>) => void` | None

Just pass any `children` like in the example above and you are good to go with the simplest variant (potentially enough for alert and notification).

You can pass content as a `children` and have a separate dialog __title__:
Property name | Description                      | Type                  | Default value
--------------|----------------------------------|-----------------------|--------------
title         | Renders at the top of the dialog | `string \| ReactNode` | None

If initial styling is fit your needs you can keep everything like it is and switch `light` and `dark` color themes with `theme` property.\
Default color palette is neutral and could look nice for different cases.

By default there is only one control is present - close X-button.\
And two styled buttons could appear when `confirmButtonText` or/and `cancelButtonText` passed.\
Don't worry about semantics and a11y of the predefined elements, markup built from the proper HTML elements and attributes.

All predefined buttons handles dialog close by default, and you can add your own handlers for "confirm" and "cancel" buttons.

#### Predefined optional controls:
Property name           | Description                         | Type                  | Default value
------------------------|-------------------------------------|-----------------------|--------------
showCloseButton         | Close X-button visibility           | `boolean`             | `true`
closeButtonIcon         | Close X-button content              | `string \| ReactNode` | X-icon svg
confirmButtonText       | Button visibility and content       | `string \| ReactNode` | None
cancelButtonText        | Button visibility and content       | `string \| ReactNode` | None
confirmButtonAction     | Handles button `onClick` action     | `() => void`          | None
cancelButtonAction      | Handles button `onClick` action     | `() => void`          | None
isConfirmButtonDisabled | Disables the button                 | `boolean`             | `false`
isCancelButtonDisabled  | Disables the button                 | `boolean`             | `false`
confirmButtonAriaLabel  | Handy if button content has no text | `string`              | None
cancelButtonAriaLabel   | Handy if button content has no text | `string`              | None
closeButtonAriaLabel    | Handy if button content has no text | `string`              | `close dialog`

If these controls are not enough you can add your own into the same dialog footer space.\
Additional stuff will be rendered to the left of the predefined buttons.\
Just remember to `setIsDialogOpen(false)` (in most cases) if you passing the button `:)`

#### Additional footer elements:
Property name           | Description                            | Type        | Default value
------------------------|----------------------------------------|-------------|--------------
additionalFooterButtons | Adds anything you want into the footer | `ReactNode` | None
