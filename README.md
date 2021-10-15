# Utils CSS and JS librairy

## What is CSS and JS librairy

It's a CSS and JS Library, inspired by Bootstrap, TailwindCSS and Bulma.
We try to get the best of those libraries and framework.

## How to use it ?

Add those line in your html page:

```html
<link href="https://overconsulting.tech/utils.min.css" rel="stylesheet" />
<script type="javascript" href="https://overconsulting.tech/utils.min.js"></script>
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
After runngin this commande, you will found the min.css and min.js in the dist folder.

## The Road MAP

- [x] Add the disabled for the button
- [x] Add the different pointer
- [x] Render active link for the navbar
- [X] Add hover for the navbar
- [X] Responsive global
- [X] Add outlined to the button
- [X] Add size to the button
- [X] Add a grid with quarter, half and tiers
- [X] Add Hero section
- [X] Add class rounded sur les élements
- [X] Add some menu
- [ ] Add disabled for all the form field
- [ ] Add Js part
- [ ] Responsive de la navbar
- [ ] Modify the doc to be React compatible
- [ ] Finish the documentation