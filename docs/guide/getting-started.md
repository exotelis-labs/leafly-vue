<script setup>
import { useData } from 'vitepress';

const { site } = useData();
</script>

# Getting started
This section will help you use **{{ site.title }}** in your project. It depends on your requirements if you want to utilize the whole feature set, or just parts of it. Our library consists of components, composables, icons, customized eslint rules and a well-defined tailwind config. Use whatever you want!

::: info
In this guide use the npm package manager. You are free to use any other package manager of your choice e.g.
yarn or pnpm
:::

## Step 1: Installation
If you haven't already created a Vue.js 3 project, please follow the instructions of the [Vue.js documentation](https://vuejs.org/guide/quick-start.html#creating-a-vue-application) and return once this is done.

Some of our components depend on the `vue-router`. If you want to use those components, please [install the vue-router](https://router.vuejs.org/installation.html) as well.

To install **{{ site.title }}** run the following command:

```sh
$ npm i -D @exotelis-labs/leafly-vue@latest \
           @exotelis-labs/eslint-config-base@latest \
           @exotelis-labs/tailwindcss-font-faces@latest \
           autoprefixer@^10.4.12 \
           postcss@^8.4.16 \
           tailwindcss@^3.1.8
```

If you are using npm 7 (Node.js 16+) or higher, you don't have to install **{{ site.title }}s** peer dependencies manually, npm will take care of this automatically:

```sh
$ npm i -D @exotelis-labs/leafly-vue@latest
```

## Step 2: Tailwind (optional)
It is recommended to use **{{ site.title }}** with tailwind.

To use tailwindcss add the following lines to your base stylesheet:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create a file `postcss.config.js` and add the following content:

```js
/* eslint-env node */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

In some cases you might want to add more plugins to the postcss config. For example, when you want to optimize the build. Please see [Optimize for production](https://tailwindcss.com/docs/optimizing-for-production) for more information.

Finally, create a file called `tailwind.config.js` and add the following content:

```js
/* eslint-env node */

module.exports = {
  content: ['./src/**/*.{vue,js,jsx,ts,tsx}', './node_modules/@exotelis-labs/leafly-vue/dist/*.js'],
  presets: [require('@exotelis-labs/leafly-vue/tailwind.config.js')],
  darkMode: 'media', // or class
  corePlugins: {
    preflight: true,
  },
};
```

This will extend the theming of **{{ site.title }}** and extract all class definitions from the **{{ site.title }}** bundle. Feel free to add more theming information to the `tailwindcss` config:

```js
module.exports = {
  // ... other content
  theme: {
    extend: {
      spacing: {
        2: '5rem',
      },
    },
  },
};
```

Now everything is ready to get started.

::: info
Learn more: https://tailwindcss.com/docs/installation/using-postcss
:::


## Step 3: Eslint (optional)
It's recommended to extend eslint with the base config of `@exotelis-labs/eslint-config-base`:

```js
module.exports = {
  "extends": [
    // ...
    '@exotelis-labs/eslint-config-base',
  ],
}
```

::: info
For more details, please see: [@exotelis-labs/eslint-config-base](https://www.npmjs.com/package/@exotelis-labs/eslint-config-base)
:::

## What's next
By now, you should be able to use **{{ site.title }}** in your project.

Check the rest of our documentation to learn how to import and use our features.
