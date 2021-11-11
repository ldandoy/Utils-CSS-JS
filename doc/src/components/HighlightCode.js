import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {gruvboxDark as hljsStyle} from 'react-syntax-highlighter/dist/esm/styles/hljs/';

const HighlightCode = ({ codeHtml, codeReact, language }) => {
    return(
        <>
            <div className="pl-30 p-15 mt-10 bg-gray-200">
                <a href="#" class="toggle light active" target-show="show-html" target-hide="show-react">Show HTML</a>
                &nbsp;
                <a href="#" class="toggle light" target-show="show-react" target-hide="show-html">ShowReact</a>
            </div>
            <div className="show-html">
                <SyntaxHighlighter style={ hljsStyle } language={ language } className="pl-30 p-15 mb-10">
                    { codeHtml }
                </SyntaxHighlighter>
            </div>
            <div class="show-react">
                <SyntaxHighlighter style={ hljsStyle } language={ language } className="pl-30 p-15 mb-10">
                    { codeReact }
                </SyntaxHighlighter>
            </div>
        </>
    );
}

export default HighlightCode;