# Jekyll-Gulp Boilerplate

A customized starter kit for static websites, using [Jekyll](https://jekyllrb.com/) and Gulp for the build process.

### Features

* Livereloading with BrowserSync
* ES6 ready (with Babel)
* JS Bundling with Webpack
* Sass with Autoprefixer and Sourcemaps
* SVG Icons with gulp-svg-sprite
* Image Optim, Minification and other production goodies

### Usage

Follow the Quick Install Intructions at [https://jekyllrb.com](https://jekyllrb.com/)
Then run:
```
git clone https://github.com/maxboeck/jekyll-gulp.git
cd jekyll-gulp
npm install
gulp
```

### Icons

To add an icon, place an SVG file in `_assets/icons`, then include it on a page with:
```
{% include icon.html icon="cog" %}
```
The Icon name is the SVG filename. Run `gulp icons` to generate the icon sprite.
!Since this uses an external SVG file, you will need a polyfill like [svgxuse](https://github.com/Keyamoon/svgxuse) to correctly display icons in IE.