# Atom Snazzy Clear Syntax

> Simple, distraction-free atom syntax based on awesome [hyper-snazzy](https://github.com/sindresorhus/hyper-snazzy)

Read the reasoning behind the theme [here](https://fatihkalifa.com/designing-new-syntax-theme-for-atom)

## Features

- Dimmed color for distracting elements like punctuations, parens, and braces
- Extensive JavaScript with ES2015+ and JSX + Flow support
  - Differentiate between array/object destructuring and array/object literals
  - Consistent color for object property (including shorthand) and JSX props
  - Same color for template string variable and JS expression extrapolation in JSX

## Color Guideline

- Magenta for native keyword
- Cyan for method or function
- Blue for class and type definition
- Bright green color for string literal for easier spotting "hardcoded" value
- Pale bright green color for RegExp because of its relationship with string
- Orange for constant, like number, boolean literal and UPPER_CASE variables
- Red for HTML tags in both HTML, JSX, and CSS selector

## Screenshot

### JavaScript

Install [`language-babel`](https://atom.io/packages/language-babel) for better syntax highlighting support.

![Atom Snazzy Clear JS Screenshot](https://github.com/pveyes/atom-snazzy-clear-syntax/blob/master/assets/js.png)

### CSS

![Atom Snazzy Clear CSS Screenshot](https://github.com/pveyes/atom-snazzy-clear-syntax/blob/master/assets/css.png)


## Acknowledgement

Thanks to [Sindre Sorhus](https://github.com/sindresorhus) for his awesome color palette in `hyper-snazzy`.

## License

MIT
