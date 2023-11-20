As a Dialog component user I should be able to:

Use case                                | Description                                            | Priority    | Complexity | Done  | Assignee
--------------------------------------- | -------------------------------------------------------| ----------- | ---------- | ----- | --------
__Use it as a native dialog container__ | I don't need any predefined styles and elements inside | **Highest** | 1          | *Yes* | Max
__Use it with basic styling__ | I want to pass properties as: additional class name / overlay color / dialog background color / border and outline: shorthands and radius / box shadow / padding | **Highest** | 2 | *Yes* | Max
__Have a default dialog close button__ | Absolutely positioned X-icon button at the top right corner. <br> Consider default dialog padding to eliminate content overlap | **Highest** | 2 | *Yes* | Max
__Set the dialog title__ | Dialog title received as a string and placed at the top of the dialog. <br> If title property is passed `<header />` element should be created and include title and X-icon button | **Highest** | 2 | *Yes* | Max
__Set the confirmation button__ | If any button is passed `<footer />` element should be created and include all received buttons | **Highest** | 3 | *Yes* | Max
__Set the cancel button__ | If any button is passed `<footer />` element should be created and include all received buttons | **Highest** | 3 | *Yes* | Max
__Use dialog with specific styling properties__ | Should receive: `width` and `hight`: own, min and max | **High** | 3 | *Yes* | Max
__Change dialog action buttons styles__ | Should receive styles as an object of CSS props in JS syntax and an object of CSS props in CSS syntax for interactive effects | **High** | 3 | *Yes* | Max
__Change dialog action buttons layout__ | Should receive a keyword which will set a layout styling. <br> Potentially: `align-left` / `align-right` / `align-center` / `stretch` / etc | **High** | 2 | *Yes* | Max
__Change footer buttons order__ | As a flex items buttons order could be easily changed | **Medium** | 1 | *Yes* | Max
__Change dialog close button styles__ | Should receive styles as an object | **Medium** | 1 | *Yes* | Max
__Change dialog close button icon__ | Should receive svg and replace default one | **Medium** | 2 | *Yes* | Max
__Change dialog header styles__ | Should receive styles as an object | **Low** | 3 | *Yes* | Max
__Change dialog footer styles__ | Should receive styles as an object | **Low** | 3 | *Yes* | Max
__Change dialog body styles__ | Should receive styles as an object | **Low** | 1 | *Yes* | Max
__Change dialog position__ | Should receive styles as an object | **Low** | 2 | *Yes* | Max
__Set at least one additional custom button__ | Should receive component and place it correctly. <br> If any button is passed `<footer />` element should be created and include all received buttons | **Low** | 5 | *Yes* | Max
__Change dialog action buttons flex direction__ | Should receive `footerDirection` with `row` or `column` value | **High** | 2 | *Yes* | Max
__Switch dialog color theme__ | For the first iteration, receiving `light` or `dark` color theme property should ignore custom color styles and use the predefined color scheme | **Low** | 8 | *Yes* | Max
