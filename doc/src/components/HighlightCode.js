import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {github as hljsStyle} from 'react-syntax-highlighter/dist/esm/styles/hljs/';

const HighlightCode = ({code, language}) => {
    return(
        <>
            <SyntaxHighlighter style={hljsStyle} language={language} className="pl-30 p-15 mt-10 mb-10 rounded-top-l rounded-bottom-l">
                {code}
            </SyntaxHighlighter>
        </>
    );
}

export default HighlightCode;