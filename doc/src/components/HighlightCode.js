import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {gruvboxDark as hljsStyle} from 'react-syntax-highlighter/dist/esm/styles/hljs/';

const HighlightCode = ({ code, translateToReact, language }) => {
    const [show, setShow] = useState('html');
    const [buttonLabel, setButtonLabel] = useState('react');

    const handlerOnClick = (event) => {
        if (show === 'html') {
            setButtonLabel('html');
            setShow('react');
        } else {
            setButtonLabel('react');
            setShow('html');
        }
    }

    const toReact = (htmlCode) => {
        return htmlCode
            .replace(/class=/g, "className=")
            .replace(/for=/g, "htmlFor=")
            .replace(/colspan=/g, "colSpan=");
    }

    return(
        <>
            { !translateToReact ? <div className="pl-30 p-15 mt-10">
                <SyntaxHighlighter style={ hljsStyle } language={ language } className="pl-30 p-15 mb-10">
                    { code }
                </SyntaxHighlighter>
            </div> : <>
                <div className="pl-30 p-15 mt-10 bg-gray-200">
                    <button 
                        className="btn btn-dark"
                        onClick={handlerOnClick}
                    >Show in {buttonLabel}</button>
                </div>
                <div className="active">
                    { show === "html" && <SyntaxHighlighter style={ hljsStyle } language={ language } className="pl-30 p-15 mb-10">
                        { code }
                    </SyntaxHighlighter>}
                </div>
                {show === "react" && <div className="active">
                    <SyntaxHighlighter style={ hljsStyle } language={ language } className="pl-30 p-15 mb-10">
                        { toReact(code) }
                    </SyntaxHighlighter>
                </div>}
            </>}
        </>
    );
}

export default HighlightCode;