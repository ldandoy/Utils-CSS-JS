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

Available on: [overconsulting.tech](https://overconsulting.tech) to see it online.

## The documentation

Available on [overconsulting.tech](https://overconsulting.tech)

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
$ uglifycss ./src/css/*.css > ./dist/utils.min.css
$ uglifyjs ./src/js/*.js > ./dist/utils.min.js
```
After runngin this commandn, you will found the min.css and min.js in the dist folder.

## The Road MAP

- [x] Add the disabled for the button
- [x] Add the different pointer
- [x] Render active link for the navbar
- [X] Add hover for the navbar
- [X] Responsive de la navbar
- [ ] Add Js part
- [X] Responsive global
- [ ] Modify the doc to be React compatible
- [X] Add outlined to the button
- [X] Add size to the button
- [ ] Add a grid with quarter, half and tiers
- [ ] Add disabled for all the form field