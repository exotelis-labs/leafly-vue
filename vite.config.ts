import { configDefaults } from 'vitest/config';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2016',
    lib: {
      entry: resolve(__dirname, 'src/public_api.ts'),
      name: 'leafly-vue',
      fileName: (format) => `leafly-vue.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: [/*'@vueuse/core',*/ 'vue', 'vue-router'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          '@vueuse/core': 'VueUse',
          vue: 'Vue',
          'vue-router': 'VueRouter',
        },
      },
    },
  },
  define: {
    __DEV__: process.env.NODE_ENV !== 'production',
  },
  plugins: [vue()],
  test: {
    coverage: {
      exclude: [
        ...(configDefaults.coverage.exclude || ''),
        '**/_*/',
        '**/@*/',
        '**/*.{const,interface,type}.{js,cjs,mjs,ts,tsx,jsx}',
        '**/index.ts',
        '**/icon/Icons.ts',
      ],
    },
    environment: 'jsdom',
  },
});
