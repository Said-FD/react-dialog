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
Property name       | Description               | Type                                     | Default value
--------------------|---------------------------|------------------------------------------|--------------
**isDialogOpen**    | Dialog visibility         | `boolean`                                | None
**setIsDialogOpen** | Handles dialog visibility | `(arg: SetStateAction<boolean>) => void` | None

<br>Just pass any `children` like in the example above and you are good to go with the simplest variant (potentially enough for alert and annoying notifications).

You can pass content as a `children` and have a separate dialog **title** simultaneously:
Property name | Description                      | Type                  | Default value
--------------|----------------------------------|-----------------------|--------------
**title**     | Renders at the top of the dialog | `string \| ReactNode` | None

<br>If initial styling is fit your needs you can keep everything like it is and switch `light` and `dark` color themes with `theme` property.\
Default color palette is neutral and could look nice for different cases.

By default there is only one control is present - close X-button.\
And two styled buttons could appear when `confirmButtonText` and/or `cancelButtonText` passed.\
Don't worry about semantics and a11y of the predefined elements, markup built from the proper HTML elements and attributes.

All predefined buttons handles dialog close by default, and you can add your own handlers for "confirm" and/or "cancel" buttons.

#### Predefined optional controls:
Property name               | Description                         | Type                  | Default value
----------------------------|-------------------------------------|-----------------------|--------------
**showCloseButton**         | Close X-button visibility           | `boolean`             | `true`
**closeButtonIcon**         | Close X-button content              | `string \| ReactNode` | X-icon svg
**confirmButtonText**       | Button visibility and content       | `string \| ReactNode` | None
**cancelButtonText**        | Button visibility and content       | `string \| ReactNode` | None
**confirmButtonAction**     | Handles button `onClick` action     | `() => void`          | None
**cancelButtonAction**      | Handles button `onClick` action     | `() => void`          | None
**isConfirmButtonDisabled** | Disables the button                 | `boolean`             | `false`
**isCancelButtonDisabled**  | Disables the button                 | `boolean`             | `false`
**confirmButtonAriaLabel**  | Handy if button content has no text | `string`              | None
**cancelButtonAriaLabel**   | Handy if button content has no text | `string`              | None
**closeButtonAriaLabel**    | Handy if button content has no text | `string`              | `close dialog`

<br>If these controls are not enough you can add your own into the same dialog footer space.\
Additional stuff will be rendered to the left of the predefined buttons.\
Just remember to `setIsDialogOpen(false)` (in most cases) if you passing your own button `:)`

#### Additional footer elements:
Property name               | Description                            | Type        | Default value
----------------------------|----------------------------------------|-------------|--------------
**additionalFooterButtons** | Adds anything you want into the footer | `ReactNode` | None

<br>**Buttons alignment** is also customizable:
Property name          | Description                              | Type     | Default value
-----------------------|------------------------------------------|----------|--------------
**footerDirection**    | Accepts all `flex-direction` CSS values  | `string` | `row`
**buttonsAlign**       | Accepts all `justify-content` CSS values | `string` | `flex-end`
**confirmButtonOrder** | Literally, flex `order` value            | `number` | DOM order, after "cancel" button
**cancelButtonOrder**  | Literally, flex `order` value            | `number` | DOM order, before "confirm" button

<br>Footer `align-items` value defaults to `stretch`, you could change it passing a CSS rule to the `footerStyles` object but we'll get to it a bit later.

If you don't like how dialog looks by default it's not a problem.\
Let's get to the styling now.

First set of properties doesn't actually override anything as it utilizing CSS Custom Properties.

#### CSS vars rule set:
Property name   | Description   | Type     | Default value
----------------|---------------|----------|--------------
**minWidth**        | `min-width`   | `string` | `320px`
**width**           | `width`       | `string` | `380px`
**maxWidth**        | `max-width`   | `string` | `95dvw`
**minHeight**       | `min-height`  | `string` | None
**height**          | `height`      | `string` | `auto`
**maxHeight**       | `max-height` <br> I don't recommend to use this one. <br> Browser handles it perfectly by its own | `string` | None
**padding**         | `padding` in any shorthand format      | `string` | `1rem`
**fontFamily**      | `font-family` | `string` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif`
**surfaceColor**    | `background-color` in any color format | `string` | Light theme: `#fff` <br> Dark theme: `#292929`
**onSurfaceColor**  | `color` in any color format            | `string` | Light theme: `#141414` <br> Dark theme: `#e0e0e0`
**border**          | `border` in any shorthand format       | `string` | `none`
**borderRadius**    | `border-radius` in any units           | `string` | `8px`
**outline**         | `outline` in any shorthand format      | `string` | None
**boxShadow**       | `box-shadow` in any format             | `string` | None
**titleFontSize**   | Title `font-size` in any units         | `string` | `1.125rem`
**titleFontWeight** | Title `font-weight`in any format       | `string` | `700`
**titleFontStyle**  | Title `font-style` any existing value  | `string` | `normal`
**titleLineHeight** | Title `line-height` in any units       | `string` | `1.33`

<br>To switch between the two color themes just change a `theme` value.

#### Theming:
Property name     | Description                     | Type     | Default value
------------------|---------------------------------|----------|--------------
**theme**         | Could be `light` or `dark` only | `string` | `light`

<br>
<br>

#### Next time I'll continue with styling object sets.

### Cheers!

<br>

`💤`
