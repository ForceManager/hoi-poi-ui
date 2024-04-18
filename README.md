 <div align="center">
  <h1>HoiPoi UI</h1>
  <blockquote>A flexible and customizable react component library.</blockquote>
  <img src="https://img.shields.io/npm/l/hoi-poi-ui.svg?style=flat-square" /> <img src="https://img.shields.io/npm/v/hoi-poi-ui.svg?style=flat-square" />

</div>

## ⭐️ Features

-   High customizable components.
-   Theming with JSS.
-   React Styleguidist

## 📦 Installation

```
// with npm
npm install hoi-poi-ui

// with yarn
yarn add hoi-poi-ui
```

## ⚙️ Usage

```
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HoiPoiProvider, Button } from 'hoi-poi-ui';

function App() {
  return (
    <HoiPoiProvider>
      <Button type="big" color="primary">
        Hello World
      </Button>
    </HoiPoiProvider>
  );
}

const root = createRoot(document.querySelector('#app'))
root.render(<App />);
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/9kz3q68qw)

## 💎 Customization

### Theme

We need to use `createHoiPoiTheme` for customize current theme. It will do a deep merge without concatening arrays.
You can see the default theme [here](https://github.com/ForceManager/hoi-poi-ui/blob/master/src/utils/styles/defaultTheme.js).

```
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HoiPoiProvider, createHoiPoiTheme, Button } from 'hoi-poi-ui';

const theme = createHoiPoiTheme({
  colors: {
    primary: '#ed8b00',
  },
});

function App() {
  return (
    <HoiPoiProvider theme={theme}>
      <Button type="big" color="primary">
        Hello World
      </Button>
    </HoiPoiProvider>
  );
}

const root = createRoot(document.querySelector('#app'))
root.render(<App />);
```

### Classes

When the className property isn't enough, you can use `classes` props for inject CSS in any deeper element.
The list of elements for each component is documented below the respective examples.

```
const classes = {
  Loader: 'button__custom-class'
}

return (
  <Button type="big" color="primary" classes={classes}>
    Hello World
  </Button>
)
```

### Overrides

HoiPoi maximizes customization and that is why it has a system to overwrite any component properties and components used by this. Like classes you need to use the component name but in this case you can nest the prop `overrides`.

```
const overrides = {
  Loader: {
    size: 'small'
  }
}

return (
  <Button type="big" color="primary" overrides={overrides}>
    Hello World
  </Button>
)
```

## 📜 Documentation and examples

Check out our [styleguidist](https://forcemanager.github.io/hoi-poi-ui/).

## 🌐 Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | >= 52                                                                                                                                                                                                             | >= 49                                                                                                                                                                                                         | >= 10                                                                                                                                                                                                         |

## 🙌 Contributing

To learn how to setup a development environment and for contribution guidelines, see [CONTRIBUTING.md](/CONTRIBUTING.md).

## 📜 Changelog

We use [GitHub releases](https://github.com/ForceManager/hoi-poi-ui/releases).

## 🌮 Thanks

[@hodgef/js-library-boilerplate](https://github.com/hodgef/js-library-boilerplate) for the initial boilerplate.

## 🔐 Security

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security).

## 📄 License

This project is licensed under the terms of the
[MIT license](/LICENSE).
