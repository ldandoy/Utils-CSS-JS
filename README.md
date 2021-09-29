# Utils-CSS-JS

## What is Utils-CSS-JS

It's a CSS and JS Library, inspired by Bootstrap and TailwindCSS


## How to use it ?

Add those line in your html page:

```html
<link href="https://overconsulting.tech/utils-css-js.min.css" rel="stylesheet" />
<script type="javascript" href="https://overconsulting.tech/utils-css-js.min.js"></script>
```

## To see how it works

The "example" folder contains the index.html file. Open it in your favorite browser, to show all the CSS and JS in action.

Or you can go on: [overconsulting.tech](https://overconsulting.tech target="_blank") to see it online.


## The documentation

available on [overconsulting.tech](https://overconsulting.tech target="_blank")


## Developpement

Installation of the tools to generate the minified file. I used uglifycss and uglifyjs. You can installe it with npm.

```bash
$ npm install uglifycss -g
$ npm install uglify-js -g
```
To generate the min.css files from the multiple css files.

```bash
$ git clone https://github.com/ldandoy/Utils-CSS-JS.git
$ cd Utils-CSS
$ uglifycss ./src/css/*.css > ./dist/utils-css-js.min.css
$ uglifyjs ./src/js/*.js > ./dist/utils-css-js.min.js
```
After runngin this commandn, you will found the min.css and min.js in the dist folder.

## The Road MAP

- [ ] Add the disabled for the button and other fields
- [x] Add the different pointer
- [x] Render active link for the navbar
- [ ] Add hover for the navbar
- [ ] Responsive de la navbar
- [ ] Responsive global
- [ ] Modify the doc to be React compatible