# Utils CSS and JS librairy

## What is CSS and JS librairy

It's a CSS and JS Library, inspired by Bootstrap, TailwindCSS and Bulma.
We try to get the best of those libraries and framework.

## How to use it ?

Add those line in your html page:

```html
<link href="https://overconsulting.tech/utils.min.css" rel="stylesheet" />
<script
  type="javascript"
  href="https://overconsulting.tech/utils.min.js"></script>
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

## SASS Part

First install sass on you system.
If you need more information go to: [SASS Website](https://sass-lang.com/install)

```bash
$ npm install -g sass
```

And know to generate css files

```bash
$ sass src/stylesheets/index.scss dist/index.css
```

## The Road MAP

- [x] Add the disabled for the button
- [x] Add the different pointer
- [x] Render active link for the navbar
- [x] Add hover for the navbar
- [x] Responsive global
- [x] Add outlined to the button
- [x] Add size to the button
- [x] Add a grid with quarter, half and tiers
- [x] Add Hero section
- [x] Add class rounded sur les élements
- [x] Add some menu
- [x] Add disabled for all the form field
- [x] Responsive de la navbar
- [x] Faire un rounded global
- [ ] Add Js part
- [x] Modify the doc to be React compatible
- [ ] Finish the documentation
- [ ] Add container to the navbar
- [ ] Complete menu part
- [ ] Add color in input
- [ ] Integration of Dark mode
- [ ] Integration of SASS
