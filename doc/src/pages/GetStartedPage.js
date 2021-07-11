import React from "react";
import HighlightCode from "../components/HighlightCode";


const GetStartedPage= () => {
    return(
        <div>
            <section>
                <h1 class="title-page">Utils CSS documentation</h1>
            </section>
            <section class="mt-30 mb-60">
                <h2 class="title-section">What is Utils-CSS</h2>
                <div>
                    <p>
                        It's a <span class="badge bg-success">CSS Library</span>, 
                        inspired by Bootstrap and TailwindCSS. There is 
                        <span class="badge bg-success">no JS</span> in this library, 
                        all is done with CSS.
                    </p>
                </div>
            </section>
            <section class="mt-30 mb-60">
                <h2 class="title-section">How to use it ?</h2>
                <div>
                    <p>
                        Just clone the repository and copy the  <span class="badge bg-success">
                        utils-css.min.css</span> file from the dist directory, 
                        and copy it on your CSS folder. Add it in the head part of your html page
                    </p>
                </div>
            </section>
            <section class="mt-30 mb-60">
                <h2 class="title-section">Developpement</h2>
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
        </div>
    );
}

export default GetStartedPage;