# Contributing

We love contributions from everyone.
By participating in this project, you agree to follow the HoiPoi [code of conduct](/CODE_OF_CONDUCT.md).

[code of conduct]: https://thoughtbot.com/open-source-code-of-conduct

We expect everyone to follow the code of conduct anywhere in our project codebases, issue trackers, chatrooms, and mailing lists.

## Contributing guide

-   Fork the repo
-   Clone it
-   Install dependencies
-   Make your changes
    -   Create examples with styleguidist
    -   Provide a complete documentation using current addons
    -   Create new passing tests if needed
-   Make sure the tests pass
-   Write a good commit message
-   Push to your fork
-   Submit a pull request

Others will give constructive feedback. This is a time for discussion and improvements, and making the necessary changes will be required before we can merge the contribution.

## Environment

We use [react-styleguidist](https://github.com/styleguidist/react-styleguidist) as our development environment and as a documentation, so you must create examples for develop and debug your components.

```
git clone REPO_URL
cd hoi-poi-ui
yarn install
yarn start
```

For styling our components we use [css-in-js JSS](https://github.com/cssinjs/jss) with (jss-preset-default)[https://github.com/cssinjs/jss-preset-default], here is the complete list with plugins we actually use:

-   [jss-camel-case](https://github.com/cssinjs/jss-camel-case): converts everything back to dash separated names.
-   [jss-compose](https://github.com/cssinjs/jss-compose): reuse rules more granylarly.
-   [jss-expand](https://github.com/cssinjs/jss-expand): better js syntax with objects and arrays.
-   [jss-global](https://github.com/cssinjs/jss-global): globally scoped CSS with JSS. Don't use it if you can avoid it.
-   [jss-nested](https://github.com/cssinjs/jss-nested): nested selectors and presudo selectors.
-   [jss-props-sort](https://github.com/cssinjs/jss-props-sort): sorting properties for extend each other insitead of override.
-   [jss-template](https://github.com/cssinjs/jss-template): use string templates to declare CSS.
-   [jss-vendor-prefixer](https://github.com/cssinjs/jss-vendor-prefixer)

## Tips

## Windows users

-   We use LF characters for line breaks so remember to configure your editor and git: `git config --global core.autocrlf false`

## Tools

We have configurations for [eslint](https://eslint.org/) and [prettier](https://github.com/prettier/prettier) and there are scripts for check your code before commiting it. For that you can use your code editor for improve your productivity.
