#### See the simple commonly used variant on [GitHub Pages](https://said-fd.github.io/react-dialog).
#### CodePen playground is [here](https://codepen.io/frontendmax/pen/LYqBPwj).

The main idea behind this component is to use all the benefits of the native `<dialog />` element.\
With no effort and zero dependencies, we can get a lot of stuff right from the box.

Key advantages:
- focus-trap
- correct positioning and stacking context (always-on-top, no dancing around `position`, `z-index`, DOM structure, and scopes)
- built-in `show()`, `showModal()`, `close()`, and `cancel()` methods
- built-in `close` event
- `cancel()` on `Esc` key
- `returnValue` on `close()`
- test cases simplification
- very simple to use

Actually, you don't need any third-party components to create a nice, accessible and easy-to-use modals.

Anyway, here is the `<Dialog />` component if you think that you need one `:D`\
It has simple default styling with two color themes and controls but you can customize it to fit your needs and design.

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

#### Component has only two required properties (no defaults):
Property name       | Description               | Type
--------------------|---------------------------|-----------------------------------------
**isDialogOpen**    | Dialog visibility flag    | `boolean`
**setIsDialogOpen** | Handles dialog visibility | `(arg: SetStateAction<boolean>) => void`

<br>Just pass any `children` like in the example above and you are good to go with the simplest variant (potentially enough for alert or annoying notifications).

You can pass content as a `children` and have a separate dialog **title** simultaneously:
Property name | Description                      | Type                  | Default value
--------------|----------------------------------|-----------------------|--------------
**title**     | Renders at the top of the dialog | `string \| ReactNode` | None

<br>If initial styling is fit your needs you can keep everything like it is and switch `light` and `dark` color themes with `theme` property.\
Default color palette is neutral and could look nice for different cases.

By default there is only one control is present - Close X-button.\
And two styled buttons could appear when `confirmButtonText` and/or `cancelButtonText` passed.\
Don't worry about semantics and a11y of the predefined elements, markup built from the proper HTML elements and attributes.

All predefined buttons handles dialog close by default, and you can add your own handlers for each one.

#### Predefined optional controls:
Property name               | Description                         | Type                  | Default value
----------------------------|-------------------------------------|-----------------------|--------------
**showCloseButton**         | Close X-button visibility           | `boolean`             | `true`
**closeButtonIcon**         | Close X-button content              | `string \| ReactNode` | X-icon svg
**confirmButtonText**       | Button visibility and content       | `string \| ReactNode` | None
**cancelButtonText**        | Button visibility and content       | `string \| ReactNode` | None
**closeButtonAction**       | Handles button `onClick` event      | `() => void`          | None
**confirmButtonAction**     | Handles button `onClick` event      | `() => void`          | None
**cancelButtonAction**      | Handles button `onClick` event      | `() => void`          | None
**isConfirmButtonDisabled** | Disables the button                 | `boolean`             | `false`
**isCancelButtonDisabled**  | Disables the button                 | `boolean`             | `false`
**confirmButtonAriaLabel**  | Handy if button content has no text | `string`              | None
**cancelButtonAriaLabel**   | Handy if button content has no text | `string`              | None
**closeButtonAriaLabel**    | Handy if button content has no text | `string`              | `'close dialog'`

<br>If these controls are not enough you can add your own into the same dialog footer space.\
Additional elements will be rendered to the left side of the predefined buttons.\
Just remember to `setIsDialogOpen(false)` (in most cases) if you passing your own button `:)`

#### Additional footer elements:
Property name               | Description                            | Type        | Default value
----------------------------|----------------------------------------|-------------|--------------
**additionalFooterButtons** | Adds anything you want into the footer | `ReactNode` | None

<br>Buttons appearance control is pretty easy.

#### Buttons alignment:
Property name          | Description                             | Type     | Default value
-----------------------|-----------------------------------------|----------|--------------
**footerDirection**    | Accepts all `flex-direction` CSS values | `string` | `row`
**buttonsAlign**       | Accepts `justify-content` CSS simplified names: `start`, `center`, `end`, `between`, `around`, `evenly`  | `string` | `end`
**confirmButtonOrder** | Literally, flex `order` value           | `number` | DOM order, after "cancel" button
**cancelButtonOrder**  | Literally, flex `order` value           | `number` | DOM order, before "confirm" button

<br>Footer `align-items` value defaults to `stretch`, you could change it passing a CSS rule to the `footerStyles` object but we'll get to it a bit later.

There are two more actions available, it's possible to add custom handlers on Esc key and dialog close events.\
On Esc key press dialog will close but you can perform what you need when key-down fires.\
Also, you can fullfil your handler on dialog close which fires on any variant of closing.

#### Dialog closing actions (each of type `() => void`, no defaults):
Property name         | Description
----------------------|-------------------------------------
**escKeyAction**      | Handles Esc `onKeyDown` event       
**dialogCloseAction** | Handles `<dialog />` `onClose` event

<br>If your dialog should close on overlay click, there is a `closeOnClickOutside` flag.\
Pay attention please, that this option will work incorrectly if you need to open another dialog right from inside the opened one without closing it (I have no idea why would you need to do this `:]`).\
`dialogCloseAction` will be triggered on this closing variant as well.

#### Close on overlay click:
Property name           | Description                    | Type      | Default value
------------------------|--------------------------------|-----------|--------------
**closeOnClickOutside** | Closes dialog on overlay click | `boolean` | `false`

<br>To switch between the two color themes just change a `theme` value.

#### Theming:
Property name     | Description                     | Type     | Default value
------------------|---------------------------------|----------|--------------
**theme**         | Could be `light` or `dark` only | `string` | `light`

<br>If you don't like how dialog looks by default it's not a problem.\
Let's get to the styling now.

First set of properties doesn't actually override anything as it utilizing CSS Custom Properties.

#### CSS vars rule set (each of type `string`):
Property name       | Description                            | Default value
--------------------|----------------------------------------|--------------
**minWidth**        | `min-width`                            | `320px`
**width**           | `width`                                | `380px`
**maxWidth**        | `max-width`                            | `95dvw`
**minHeight**       | `min-height`                           | None
**height**          | `height`                               | `auto`
**maxHeight**       | `max-height` <br> I don't recommend to use this one. Browser handles it perfectly by its own | None
**padding**         | `padding` in any shorthand format      | `1rem`
**fontFamily**      | `font-family` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif`
**surfaceColor**    | `background-color` in any color format | Light theme: `#fff` <br> Dark theme: `#292929`
**onSurfaceColor**  | `color` in any color format            | Light theme: `#141414` <br> Dark theme: `#e0e0e0`
**border**          | `border` in any shorthand format       | `none`
**borderRadius**    | `border-radius` in any units           | `8px`
**outline**         | `outline` in any shorthand format      | None
**boxShadow**       | `box-shadow` in any format             | None
**titleFontSize**   | Title `font-size` in any units         | `1.125rem`
**titleFontWeight** | Title `font-weight`in any format       | `700`
**titleFontStyle**  | Title `font-style` any existing value  | `normal`
**titleLineHeight** | Title `line-height` in any units       | `1.33`

<br>Theoretically, this could be enough if your modals design has no bells and whistles.

Initially, `::backdrop` of the `<dialog />` element is pretty much light in my opinion so in this component backdrop color is a bit darker.\
Default `::backdrop` opacity values:
- 0.32 - light theme
- 0.48 - dark theme

If you want to change it, just specify this CSS variable declaration with the desired color in the global CSS file or dialog parent component:
```css
::backdrop {
  --dialogBackdropLight: rgba(0,0,0,.32);
  --dialogBackdropDark: rgba(0,0,0,.48);
}
```

<br>To write your own CSS, you can add `*ClassNames` properties which pass selector class names to the respective elements.

#### Additional class names (each of type `string` and `''` default value):
Property name               | Description
----------------------------|-----------------------------------------------
**dialogClassNames**        | Adds class names to the `<dialog />`
**innerClassNames**         | Adds class names to the dialog inner `<div />` container
**headerClassNames**        | Adds class names to the `<header />`
**titleClassNames**         | Adds class names to the `<h1 />`
**closeButtonClassNames**   | Adds class names to the Close X-button
**bodyClassNames**          | Adds class names to the `children` container
**footerClassNames**        | Adds class names to the `<footer />`
**confirmButtonClassNames** | Adds class names to the "confirm" button
**cancelButtonClassNames**  | Adds class names to the "cancel" button

<br>Also, if you need to customize separate elements you can use JS syntax for CSS rules, passing them as an objects.\
These rules will be applied as corresponding elements inline styles.\
I personally like to keep styles separately and do not flood HTML but it's a personal preference.\
You can omit the next two styling sets if class name selectors are your way of styling as well.

#### Inline styles rule set (each of type `[key: string]: string | number` and no defaults):
Property name                 | Description
------------------------------|-----------------------------------------------------
**dialogStyles**              | Applies to the `<dialog />`
**headerStyles**              | Applies to the `<header />`
**bodyStyles**                | Applies to `children` container
**footerStyles**              | Applies to the `footer />`
**buttonsStyles**             | Applies to predefined "confirm" and "cancel" buttons
**confirmButtonStyles**       | Applies to predefined "confirm" button
**cancelButtonStyles**        | Applies to predefined "cancel" button
**closeButtonStyles**         | Applies to predefined Close X-button
**closeButtonIconStyles**     | Applies to predefined X-icon svg

<br>X-icon svg fill color using `currentColor` CSS variable, so you could change it with `closeButtonStyles={ color: 'any color here' }`

Keep in mind that all elements are optional and renders conditionally to eliminate any empty elements in the DOM.\
So, we have a simple conditional rendering:
- `<header />` renders on this condition `title || showCloseButton`
- `children` container on passed `children`
- `<footer />` renders on this condition `confirmButtonText || cancelButtonText || additionalFooterButtons`
- Each button and title, obviously, on its presence
- `<header />` and Close X-button are rendered initially because `showCloseButton = true` by default

And lastly, button interactions styling.\
These could look somewhat tricky but we can't use interactive pseudo-classes in JS syntax anyway.\
If any of these objects specified `<style />` element will be created and vanilla CSS rules generated inside, based on the passed objects.\
I want to keep the component as simple as possible, and I didn't add JS CSS syntax to vanilla CSS syntax converter.\
So this set of rules should be passed in CSS syntax objects: `buttonsHoverStyles={{ 'background-color': '#1ce' }}`.

#### Buttons interaction styles rule set (each of type `[key: string]: string | number` and no defaults):
Property name                 | Description
------------------------------|-----------------------------------------------------------------------------------
**buttonsHoverStyles**        | `:hover` and `:focus-visible` styles for predefined "confirm" and "cancel" buttons
**buttonsActiveStyles**       | `:active` styles for predefined "confirm" and "cancel" buttons
**confirmButtonHoverStyles**  | `:hover` and `:focus-visible` styles for predefined "confirm" button
**confirmButtonActiveStyles** | `:active` styles for predefined "confirm" button
**cancelButtonHoverStyles**   | `:hover` and `:focus-visible` styles for predefined "cancel" button
**cancelButtonActiveStyles**  | `:active` styles for predefined "cancel" button
**closeButtonHoverStyles**    | `:hover` and `:focus-visible` styles for predefined Close X-button
**closeButtonActiveStyles**   | `:active` styles for predefined Close X-button

<br>

#### Bring better UX to your users, use `<dialog />` element!
#### I truly hope that you don't care about IE, Opera Mini, and KaiOS Browser `:)`

<br>

#### I'd be glad if anybody found this useful `:D`

### Cheers!
