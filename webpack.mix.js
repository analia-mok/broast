const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const path = require('path');

mix
  .ts('resources/js/app.ts', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [tailwindcss('resources/css/tailwind.js')])
  .webpackConfig({
    output: { chunkFilename: 'js/[name].js' },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.runtime.js',
        '@': path.resolve('resources/js'),
        '@icons': path.resolve('resources/js/components/icons')
      }
    }
  });
