import React from "react";
import { Link } from "react-router-dom";
import HighlightCode from "../components/HighlightCode";


const GetStartedPage= () => {
    return(
        <div>
            <section>
                <h1 className="title-page">Utils CSS JS documentation</h1>
            </section>
            <section className="mt-30 mb-60">
                <h2 className="title-section">What is Utils-CSS-JS</h2>
                <div>
                    <p>
                        It's a CSS and JS Library, inspired by Bootstrap and TailwindCSS
                    </p>
                </div>
            </section>
            <section className="mt-30 mb-60">
                <h2 className="title-section">Developpement</h2>
                <div>
                    <p>
                    Installation of the tools to generate the minified file. I used uglifycss and uglifyjs. You can installe it with npm.
                    </p>
                    <HighlightCode code={`$ npm install uglifycss -g`} language='bash' />
                    <HighlightCode code={`$ npm install uglify-js -g`} language='bash' />
                    <p>
                        To generate the min.css file from the multiple css files.
                    </p>
                    <HighlightCode code={`$ git clone https://github.com/ldandoy/Utils-CSS.git
$ cd Utils-CSS
$ mkdir dist
$ uglifycss ./src/css/*.css > ./dist/utils-css-js.min.css
$ uglifyjs ./src/js/*.js > ./dist/utils-css-js.min.js`} language='bash' />
                    <p>
                        After running this command, you will found the min.css and min.js in the dist folder.
                    </p>
                </div>
            </section>
            <section className="mt-30 mb-60">
                <h2 className="title-section">More details ?</h2>
                <div>
                    <p className="pb-30">
                        All the coding details are specifyed in the <span className="badge bg-notice">Doc</span> section.
                        If you want to see all CSS classes in action, follow the <span className="badge bg-success">Examples</span> link.
                    </p>
                    <Link tp="/" className="mr-10 btn btn-notice">
                        Doc
                    </Link>
                    <a href="example.html" target="_blank" rel="noreferrer" className="mr-10 btn btn-success">
                        Examples
                    </a>
                </div>
            </section>
        </div>
    );
}

export default GetStartedPage;