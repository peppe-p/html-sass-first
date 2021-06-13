let mix = require('laravel-mix');

mix
    .js('src/app.js', 'JS')
    .sass('src/app.scss', 'CSS')
    .setPublicPath('dist');