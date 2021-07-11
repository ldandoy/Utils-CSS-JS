import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {solarizedLight} from 'react-syntax-highlighter/dist/esm/styles/hljs/';

const HighlightCode = ({code, language}) => {
    return(
        <>
            <SyntaxHighlighter style={solarizedLight} language={language} class="pl-30 p-15 mt-10 mb-10">
                {code}
            </SyntaxHighlighter>
        </>
    );
}

export default HighlightCode;