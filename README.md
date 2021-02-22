# 🎒 common-logic

Sharable and reusable business logic in front end

> When writing applications, we often couple our valuable business logic with framework specific code. This coupling generally leads to code that is difficult to reuse, scale, test, and adopt or migrate to new technologies.
> This package has been created to help structure our business logic in a way that makes it highly re-usable between the front and back-end parts of our applications, and easily portable between different JS frameworks.

### Features

- Minimal
- TypeScript v4
- Testing with Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- Dev & build with TypeScript

### Available Scripts

#### `yarn watch`

Starts the application in development using `tsc` to do hot reloading.

#### `yarn build`

Builds the app at `build`, cleaning the folder first.

#### `yarn test`

Runs the `jest` tests once.

#### `yarn test:watch`

Runs the `jest` tests in watch mode, waiting for file changes.

#### `yarn test:coverage`

Reports test coverage information for all the available modules

## Development

---

Use `yarn link` & `yarn link "common-logic"` scripts to link "common-logic" to your existing project as a dependency. Then within common-logic directory, run `yarn watch` and now you can import modules to your existing project, change code in either projects and watch code changes in action.

Example:

- In "common-logic/" directory run: `yarn build` then `yarn link`
- In "common-logic/" directory run: `yarn watch`
- In your-project/ directory run: `yarn link "common-logic"` to use it as a dependency and then start dev server by running the required script(s)

Now open your own project in IDE, you can import modules from common-logic:

`import { hello } from "common-logic";`

## Production

---

You can build, tag version and publish common-logic to npm and share the package with other web projects.
