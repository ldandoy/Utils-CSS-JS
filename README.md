# Utils-CSS

## What is Utils-CSS

CSS Library, inspired by Bootstrap and TailwindCSS. There is NO JS in the library, all is done with CSS.


## How to use it

Just clone the repository and copy the utils-css.min.css file from the dist directory, and copy it on your CSS folder.
Add it in the head part of your html page

<link href="/css/utils-css.min.css" rel="stylesheet" />


## To see how it works

The "example" folder contains the index.html file. Open it in your favorite browser, to show all the CSS class in action


## Developpement

$ npm install uglifycss -g # The tool I use to generate the min.js file
$ uglifycss ./src/*.css > ./dist/utils-css.min.css
