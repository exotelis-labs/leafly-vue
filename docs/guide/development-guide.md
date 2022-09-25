<script setup>
import { useData } from 'vitepress';

const { site } = useData();
</script>

# Development Guide
For local development, you have to install the dependencies first:

```sh
$ npm ci
```

::: info Note
{{ site.title }} was built and tested with Node 16
:::

::: tip
When committing your changes a pre commit git hook will run the following scripts: `lint` `types:check` `test:unit`
:::

## Run dev server
to start the dev server run:

```sh
$ npm run dev
```

You might want to create an `index.html` file, otherwise you wouldn't see anything. Since {{ site.title }} is a library we don't provide an actual app you can use. For testing purposes just create an `index.html` and import whatever you want to test. The dev server is served at `http://localhost:5000/` by default.

To get started you can use this template:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>leafly-vue</title>

    <!-- Import tailwind styles -->
    <style>
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script type="module">
      import { createApp, defineComponent } from 'vue/dist/vue.esm-bundler.js';
      import { Tag } from './src/public_api';

      const myApp = defineComponent({
        components: { Tag },
        template: `<Tag />`,
      });

      const app = createApp(myApp)

      app.config.errorHandler = (err, instance, info) => {
        console.log(err);
        console.log(instance);
        console.log(info);
      }

      app.mount('#app');
    </script>
  </body>
</html>

```

## Build for production
Once you want to build {{ site.title }}, run the following command:

```sh
$ npm run build
```

The build command will not just bundle the library into optimized and minified files, it will also create declaration files. The output will be placed at `dist` folder. You may deploy this dist folder to any of your preferred platforms.

## Run Unit Tests with [Vitest](https://vitest.dev/)
Once you added new features are made some changes, you might want to run unit tests:

```sh
$ npm run test:unit
```

you can also run the tests in 'watch' mode. This mode will rerun the tests when your code changes.

```sh
$ npm run test:unit:watch
```

If you'd like to document the code coverage simply run:

```sh
$ npm run test:unit:coverage
```

The code coverage report can be found inside the `coverage` folder.

## Lint with [ESLint](https://eslint.org/)
To keep code quality high, we use ESLint to define some rules and implement a styleguide. The following command will check all source files for errors:

```sh
$ npm run lint
```

If you'd like to fix all errors automatically, please run:

```sh
$ npm run lint:fix
```

## Check TypeScript
To check if all you types are correct run: 

```sh
$ npm run types:check
```

To export the type declarations to `dist` run:
```sh
$ npm run types:export
```

::: info Note
When building for production, the build command will automatically check and export your types.
:::

## Documentation
Run the docs locally with the following command:

```sh
$ npm run docs:dev
```

You may run this command to build the docs at `docs/.vitepress/dist`:

```sh
$ npm run docs:build
```

Once you've built the docs, you can test the production locally by running:

```sh
$ npm run docs:serve
```

::: info Note
When pushing changes to the `master` branch on GitHub, a workflow will automatically deploy the docs to [GitHub pages](https://exotelis-labs.github.io/leafly-vue)
:::

## Visual testing with [Storybook](https://storybook.js.org/)
Currently, we don't support Storybook anymore. It might be added again in the future.

## Test {{ site.title }} locally in another package
To test {{ site.title }} locally in another project run:

```sh
$ npm pack
```

This command will create an archive with a name like `exotelis-labs-leafly-vue-1.0.0.tgz`. Open a project and add the following line to the `devDependencies` or `dependencies` of the `package.json`:

```
"@exotelis-labs/leafly-vue": "<path-to-leafly-vue-on-your-pc>/exotelis-labs-leafly-vue-1.0.0.tgz",
```

::: warning
Check to use the correct version number when adding `@exotelis-labs/leafly-vue` to your `package.json`
:::

::: info
Also check out [npm-link](https://docs.npmjs.com/cli/v8/commands/npm-link) if you want to test your changes more frequently.
:::

## Publish new version
New versions will automatically be published by npm, when a new release on GitHub is created. Please see the [GitHub workflow](.github/workflows/npm-publish.yml) for more details.
