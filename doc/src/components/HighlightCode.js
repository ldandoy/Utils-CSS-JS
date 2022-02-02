import React, { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {gruvboxDark as hljsStyle} from 'react-syntax-highlighter/dist/esm/styles/hljs/';
import { Icon } from '@iconify/react';

export const recoilShowInLanguage = atom({
    key: "recoilShowIn",
    default: false
});

const HighlightCode = ({ code, translateToReact, language }) => {
    const [show, setShow] = useState('html');
    const [buttonLabel, setButtonLabel] = useState('react');
    const [recoilShowIn, setRecoilShowIn] = useRecoilState(recoilShowInLanguage);

  
    useEffect(() => {
        
        recoilShowIn ? setShow('react') : setShow('html');
        recoilShowIn ? setButtonLabel('html') : setButtonLabel('react');
    }, [recoilShowIn]);

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
                <div className="pl-30 p-15 mt-10 bg-gray-200 flex flex-jc-space-between pr-30">
                    <button 
                        className="btn btn-dark"
                        onClick={() => setRecoilShowIn(!recoilShowIn)}
                    >
                        Show in {buttonLabel}
                    </button>
                    <button                         
                        onClick={ () => navigator.clipboard.writeText(code)}
                    >
                        <Icon icon="heroicons-outline:clipboard-copy" display={"flex"} fontSize={"20px"} />
                    </button>
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
