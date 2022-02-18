import React from "react";
import { Link } from "react-router-dom";
import HighlightCode from "../components/HighlightCode";


const GetStartedPage= () => {
    return(
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Documentation of Utils</h1>
            </section>
            <section className="mt-30 mb-60">
                <h2 className="title-section">What is Utils ?</h2>
                <div>
                    <p>
                        It's a CSS and JS Library, inspired by Bootstrap and TailwindCSS
                    </p>
                </div>
            </section>
            <section className="mt-30 mb-60">
                <h2 className="title-section">Developpement informations</h2>
                <div>
                    <p>
                        To generate the minified file, I use uglifycss and uglifyjs. You can installe it with npm.
                    </p>
                    <HighlightCode code={`$ npm install uglifycss -g
$ npm install uglify-js -g`} language='bash' />
                    <p>
                        To generate the min file from the multiple css and js files.
                    </p>
                    <HighlightCode code={`$ git clone https://github.com/ldandoy/Utils-CSS-JS.git
$ cd Utils-CSS-JS
$ mkdir dist
$ uglifycss ./src/css/*.css > ./dist/utils.min.css
$ uglifyjs ./src/js/*.js > ./dist/utils.min.js`} language='bash' />
                    <p>
                        After running this command, you will found the min.css and min.js in the dist folder.
                    </p>
                </div>
            </section>

            <section className="mt-30 mb-60">
                <h2 className="title-section">Started Page</h2>
                <div>
                    <p>Template of a page</p>
                    <HighlightCode code={`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Title</title>
        <link rel="stylesheet" href="https://overconsulting.tech/utils.min.css" />
        <script src="https://overconsulting.tech/utils.min.js" defer></script>
    </head>
    <body>
        <header>
            <h1>Titre de la page</h1>
        </header>
        <main>
            <section class="container mtb-30">

            </section>

            <footer>&copy; 2021</footer>
        <main>
    </body>
</html>`} language='htmlbars' />
                </div>
            </section>

            <section className="mt-30 mb-60">
                <h2 className="title-section">More details ?</h2>
                <div>
                    <p className="pb-30">
                        All the coding details are specifyed in the <span className="badge bg-notice">Doc</span> section.
                        If you want to see all CSS classes in action, follow the <span className="badge bg-success">Examples</span> link.
                    </p>
                    <Link to="/" className="mr-10 btn btn-notice">
                        Doc
                    </Link>
                    <a href="example.html" target="_blank" rel="noreferrer" className="mr-10 btn btn-success">
                        Examples
                    </a>
                    <Link to="/all" className="mr-10 btn btn-notice">
                        Resume
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default GetStartedPage;