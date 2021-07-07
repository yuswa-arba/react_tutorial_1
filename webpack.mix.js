const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');

// mix.react('resources/assets/js/components/Example.js', 'public/js/components/Example');

mix.copy([
    'resources/assets/plugins/datatables/dataTables.bootstrap4.min.css',
], 'public/plugins/css')
    .copy([
        'resources/assets/plugins/bootstrap/js/bootstrap.min.js',
        'resources/assets/plugins/bootstrap/js/bootstrap.bundle.min.js',
        'resources/assets/plugins/datatables/dataTables.bootstrap4.min.js',
        'resources/assets/plugins/datatables/jquery.dataTables.min.js',
        'resources/assets/plugins/jquery/jquery.min.js',
        'resources/assets/plugins/jquery/jquery.slim.min.js',
    ], 'public/plugins/js');

mix.copyDirectory('resources/assets/plugins/chart.js', 'public/plugins/chart');
mix.copyDirectory('resources/assets/plugins/fontawesome-free', 'public/plugins/fontawesome-free');
mix.copyDirectory('resources/assets/plugins/jquery-easing', 'public/plugins/jquery-easing');

mix.sass('resources/assets/plugins/bootstrap/scss/bootstrap.scss', 'public/plugins/css');
mix.sass('resources/assets/plugins/bootstrap/scss/bootstrap-grid.scss', 'public/plugins/css');
mix.sass('resources/assets/plugins/bootstrap/scss/bootstrap-reboot.scss', 'public/plugins/css');
