# Utils-CSS-JS

## What is Utils-CSS-JS

It's a CSS Library, inspired by Bootstrap and TailwindCSS


## How to use it ?

Add it in the head part of your html page

<link href="https://overconsulting.tech/utils-css-js.min.css" rel="stylesheet" />
<script type="javascript" href="https://overconsulting.tech/utils-css-js.min.js"></script>


## To see how it works

The "example" folder contains the index.html file. Open it in your favorite browser, to show all the CSS and JS class in action.

Or you can go on: https://overconsulting.tech to see it in action. For the moment, it's just example, you 


## Developpement

Installation of the tools to generate the minified file. I used uglifycss and . You can installe it with npm.

```bash
$ npm install uglifycss -g
$ npm install uglify-js -g
```
To generate the min.css files from the multiple css files.

```bash
$ git clone https://github.com/ldandoy/Utils-CSS.git
$ cd Utils-CSS
$ uglifycss ./src/css/*.css > ./dist/utils-css-js.min.css
$ uglifyjs ./src/js/*.js > ./dist/utils-css-js.min.js
```
After runngin this commandn, you will found the min.css and min.js in the dist folder.

## The Road MAP

- Add the disabled for the button and other fields
x Add the different pointer
x Render active link for the navbar
- Add hover for the navbar
- Responsive de la navbar
- Responsive global
- Modify the doc to be React compatible