 <div align="center">
  <h2>HoiPoi UI</h2>
  <blockquote>A flexible and customizable react component library.</blockquote>
  <img src="https://travis-ci.com/ForceManager/hoi-poi-ui.svg?branch=master" /> <img src="https://img.shields.io/david/ForceManager/hoi-poi-ui.svg" /> <img src="https://img.shields.io/david/dev/ForceManager/hoi-poi-ui.svg" /> <img src="https://api.dependabot.com/badges/status?host=github&repo=ForceManager/hoi-poi-ui" />

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

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/k299432p77)

## 💎 Customization

🚧

## 📜 Documentation and examples

Check out our [storybook](https://forcemanager.github.io/hoi-poi-ui/).

## 🙌 Contributing

To learn how to setup a development environment and for contribution guidelines, see [CONTRIBUTING.md](/CONTRIBUTING.md).

## 📜 Changelog

We use [GitHub releases](https://github.com/ForceManager/hoi-poi-ui/releases).

## 🌮 Thanks

[@hodgef/js-library-boilerplate](https://github.com/hodgef/js-library-boilerplate) for the initial boilerplate.

## 📄 License

This project is licensed under the terms of the
[MIT license](/LICENSE).

## 🔐 Security

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security).
