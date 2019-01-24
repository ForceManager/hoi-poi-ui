 <div align="center">
  <h2>HoiPoi UI</h2>
  <blockquote>A flexible and customizable react component library.</blockquote>
  <img src="https://img.shields.io/npm/l/hoi-poi-ui.svg?style=flat-square" /> <img src="https://img.shields.io/npm/v/hoi-poi-ui.svg?style=flat-square" /> <img src="https://img.shields.io/travis/com/ForceManager/hoi-poi-ui/master.svg?style=flat-square" /> <img src="https://img.shields.io/david/ForceManager/hoi-poi-ui.svg?style=flat-square" /> <img src="https://img.shields.io/david/dev/ForceManager/hoi-poi-ui.svg?style=flat-square" /> <img src="https://api.dependabot.com/badges/status?host=github&repo=ForceManager/hoi-poi-ui&style=flat-square" />

</div>

## ⭐️ Features

-   High customizable components.
-   Theming with JSS.
-   React Storybook as development environment and documentation.
-   Unit testing
-   Weekly [dependabot](https://dependabot.com) dependency updates

## 📦 Installation

```
// with npm
npm install hoi-poi-ui

// with yarn
yarn install hoi-poi-ui
```

## ⚙️ Usage

```
import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<App />, document.querySelector('#app'));
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/9kz3q68qw)

## 💎 Customization

🚧

## 📜 Documentation and examples

Check out our [storybook](https://forcemanager.github.io/hoi-poi-ui/).

## 🌐 Browser support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE11, Edge| >= 52| >= 49| >= 10

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

