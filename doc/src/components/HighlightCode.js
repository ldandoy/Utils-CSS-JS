import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {gruvboxDark as hljsStyle} from 'react-syntax-highlighter/dist/esm/styles/hljs/';

const HighlightCode = ({ code = null, codeHtml, language, codeReact=null }) => {
    const [show, setSow] = useState('html');
    const [buttonLabel, setButtonLabel] = useState('React');

    const handlerOnClick = (event) => {
        console.log("test")
        if (show === 'html') {
            setButtonLabel('html');
            setSow('react');
        } else {
            setButtonLabel('react');
            setSow('html');
        }
    }

    return(
        <>
            { code && <div className="pl-30 p-15 mt-10">
                <SyntaxHighlighter style={ hljsStyle } language={ language } className="pl-30 p-15 mb-10">
                    { code }
                </SyntaxHighlighter>
            </div>}

            {!code && <>
                <div className="pl-30 p-15 mt-10 bg-gray-200">
                    <button 
                        className="btn btn-dark"
                        onClick={handlerOnClick}
                    >Show in {buttonLabel}</button>
                </div>
                <div className="active">
                    { show === "html" && <SyntaxHighlighter style={ hljsStyle } language={ language } className="pl-30 p-15 mb-10">
                        { codeHtml }
                    </SyntaxHighlighter>}
                </div>
                {show === "react" && codeReact && <div className="active">
                    <SyntaxHighlighter style={ hljsStyle } language={ language } className="pl-30 p-15 mb-10">
                        { codeReact }
                    </SyntaxHighlighter>
                </div>}
            </>}
        </>
    );
}

export default HighlightCode;