import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {gruvboxDark as hljsStyle} from 'react-syntax-highlighter/dist/esm/styles/hljs/';

const HighlightCode = ({ codeHtml, language, codeReact=null }) => {
    return(
        <>
            <div className="pl-30 p-15 mt-10 bg-gray-200">
                <button className="btn btn-light toggle" target-show="show-html" text-active="Show HTML" text-nonactive="Show React" target-hide="show-react">Show HTML</button>
            </div>
            <div className="show-html active">
                <SyntaxHighlighter style={ hljsStyle } language={ language } className="pl-30 p-15 mb-10">
                    { codeHtml }
                </SyntaxHighlighter>
            </div>
            {codeReact && <div className="show-react">
                <SyntaxHighlighter style={ hljsStyle } language={ language } className="pl-30 p-15 mb-10">
                    { codeReact }
                </SyntaxHighlighter>
            </div>}
        </>
    );
}

export default HighlightCode;