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

Installation of the tools to generate the min.css file. I used uglifycss and I installed it with npm.

```bash
$ npm install uglifycss -g
```
To generate the min.css files from the multiple css files.

```bash
$ uglifycss ./src/*.css > ./dist/utils-css.min.css
```
After runngin this commandn, you will found the min.css in the dist folder.