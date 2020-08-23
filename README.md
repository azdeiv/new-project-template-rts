# New Project Template (React/Typescript)

## Setup

Simply run `npm install` to get all dependencies installed.

This template application is setup with pre-commit hooks, using Husky, to ensure code quality is to the highest standard.

If VSCode/VSCodium is being used for development, it is recommended to download the EditorConfig, Prettier, ESLint, and stylelint extensions for a better experience.

## Commands

`start-dev`: Starts the local server for development

`build-dev`: Builds the code for deployment to dev servers

`build-prod`: Builds the code for deployment to prod servers

`build-stats`: Creates a stats file to analyze for bundle build sizes

`analyze`: Opens a browser window to show the stats outputted from `build-stats` command

`code-lint`: Runs ESLint on the specified directory (used during deployment)

`style-lint`: Runs stylelint on the specified directory without emitting (used during deployment)

`test`: Opens Cypress for testing the application

`styleguide`: Runs Styleguidist locally

`styleguidist:build`: Creates a Styleguidist build for deployment to dev/prod servers

## Base application

The base application includes React, Typescript, reactstrap, Recoil, and Font Awesome.

The `@loadable/component` library also has been included as a part of this base application if dynamic loading is desired.

`styles`: Directory that contains all styling for the base application

`src`: Directory that contains all source code for the base application

### Application Adjustments

Please make any fine tuning adjustments for the application within `webpack.config.js`, `.babelrc`, `tsconfig.json`.

For linter adjustments, please check out `.eslintrc`, `.eslintignore`, `.prettierrc`, `.stylelintrc`.

To adjust the formatting done with EditorConfig, please check out `.editorconfig`.

## Recoil

Recoil is used for state management within the application.

## Styleguidist

Styleguidist is used for showing off demo components and also acts as a living developer guide for any custom components built out.

Please check out the `docs` directory along with the `.md` files in `src` for any development related to it.

## Cypress

Cypress is used for testing. Please check out the `cypress` directory for any development related to it along with the `cypress.json` file for configuration.
