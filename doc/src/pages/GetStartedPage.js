import React from "react";
import { Link } from "react-router-dom";
import HighlightCode from "../components/HighlightCode";


const GetStartedPage= () => {
    return(
        <div>
            <section>
                <h1 className="title-page">Utils CSS documentation</h1>
            </section>
            <section className="mt-30 mb-60">
                <h2 className="title-section">What is Utils-CSS</h2>
                <div>
                    <p>
                        It's a <span className="badge bg-success">CSS Library</span>, 
                        inspired by Bootstrap and TailwindCSS. There is <span className="badge bg-success">no JS</span> in this library, 
                        all is done with CSS.
                    </p>
                </div>
            </section>
            <section className="mt-30 mb-60">
                <h2 className="title-section">How to use it ?</h2>
                <div>
                    <p>
                        Just clone the repository and copy the  <span className="badge bg-success">
                        utils-css.min.css</span> file from the dist directory, 
                        and copy it on your CSS folder. Add it in the head part of your html page
                    </p>
                </div>
            </section>
            <section className="mt-30 mb-60">
                <h2 className="title-section">Developpement</h2>
                <div>
                    <p>
                        Installation of the tools to generate the min.css file. 
                        I used uglifycss and I installed it with npm.
                    </p>
                    <HighlightCode code={`$ npm install uglifycss -g`} language='bash' />
                    <p>
                        To generate the min.css file from the multiple css files.
                    </p>
                    <HighlightCode code={`$ git clone https://github.com/ldandoy/Utils-CSS.git
$ cd Utils-CSS
$ mkdir dist
$ uglifycss ./src/*.css > ./dist/utils-css.min.css`} language='bash' />
                    <p>
                        After running this command, you will found the min.css in the dist folder.
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
                    <a href="https://overconsulting.tech/" target="_blank" rel="noreferrer" className="mr-10 btn btn-success">
                        Examples
                    </a>
                </div>
            </section>
        </div>
    );
}

export default GetStartedPage;