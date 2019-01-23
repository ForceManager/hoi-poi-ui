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
    -   Create stories in storybook
    -   Provide a complete documentation using current addons
    -   Create new passing tests if needed
-   Make sure the tests pass
-   Write a good commit message
-   Push to your fork
-   Submit a pull request

Others will give constructive feedback. This is a time for discussion and improvements, and making the necessary changes will be required before we can merge the contribution.

## Environment

We use [storybook](https://github.com/storybooks/storybook) as our development environment and as a styleguide, so you must create stories for develop and debug your components. This is the list of current addons:

-   [actions](https://github.com/storybooks/storybook/tree/master/addons/actions)
-   [link](https://github.com/storybooks/storybook/tree/master/addons/links)
-   [knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs)
-   [info](https://github.com/storybooks/storybook/tree/master/addons/info)
-   [options](https://github.com/storybooks/storybook/tree/master/addons/options)
-   [viewport](https://github.com/storybooks/storybook/tree/master/addons/viewport)
-   [jsx](https://github.com/storybooks/addon-jsx)

```
git clone REPO_URL
cd hoi-poi-ui
yarn install
yarn start
```

## Windows users

-   We use LF characters for line breaks so remember to configure your editor and git: `git config --global core.autocrlf false`

## Tools

We have configurations for [eslint](https://eslint.org/) and [prettier](https://github.com/prettier/prettier) and there are scripts for check your code before commiting it. For that you can use your code editor for improve your productivity.
