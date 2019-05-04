const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const path = require('path');

mix
  .js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [tailwindcss('resources/tailwind.js')])
  .webpackConfig({
    output: { chunkFilename: 'js/[name].[contenthash].js' },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.runtime.js',
        '@': path.resolve('resources/js')
      }
    }
  });
