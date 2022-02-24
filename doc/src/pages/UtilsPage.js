import React from 'react'
import HighlightCode from "../components/HighlightCode";


const UtilsPage = () => {

    const elements = [

    ]

    return <div className="mlr-20">
        <section>
            <h1 className="title-page">Utils</h1>
        </section>
        <section className="mtb-60">
            <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="witdh" className="title-section">Width</h2>
                        <div className="mb-50">
                            <p>The width property sets an element's width. By default, it sets the width of the content area. You can go from a 5% width to a 100% width (5% by 5% ladder). </p> 
                        <h3 id="height" className="title-section mt-60">Height</h3>
                            <p>The height property specifies the height of an element. By default, the property defines the height of the content area. You can go from a 10% height to a 100% height (10% by 10% ladder).</p>
                        <h4 className="title-section mt-60">Example</h4>                            
                            <p>Here is an example of a block with a 30px width and 10px height.</p>
                            <div className='mt-60 h-10 w-50 bg-blue-500'></div>               
                        </div>
                    </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                            <HighlightCode code={`        
<div class='h-30 w-50 bg-blue-500'></div>`} translateToReact language="htmlbars" />
                    </div>
            </div>
        </section>
        <section className="mtb-60">
            <div className="mb-20 row row-tiers">
                <div className="col tol-tiers">
                    <h5 id="position" className="title-section">Position</h5>
                    <div className="mb-50">
                        <p>The position property sets how an element is positioned in a document.</p>
                    </div>
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                            <HighlightCode code={`        
<div class='relative'></div>
<div class='absolute'></div>
<div class='static'></div>
<div class='sticky'></div>
<div class='fixed'></div>`} translateToReact language="htmlbars" />
                    </div>
                </div>
            </div>
        </section>
        <section className="mtb-60">
            <div className="mb-20 row row-tiers">
                <div className="col tol-tiers">
                    <h6 id="visibility" className="title-section">Visibility</h6>
                    <div className="mb-50">
                        <p>The visibility property shows or hides an element without changing the layout of a document.</p>
                    </div>
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                            <HighlightCode code={`        
<div class='hidden'></div>
<div class='hide'></div>
<div class='show'></div>`} translateToReact language="htmlbars" />
                    </div>
                </div>
            </div>
        </section>
        <section className="mtb-60">
            <div className="mb-20 row row-tiers">
                <div className="col tol-tiers">
                    <h6 id="visibility" className="title-section">Blocks</h6>
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                            <HighlightCode code={`        
<div class='fLeft'></div>
<div class='fRight'></div>
<div class='fClear'></div>
<div class='dInline'></div>
<div class='dBlock'></div>
<div class='dNone'></div>
<div class='noOverflow'></div>`} translateToReact language="htmlbars" />
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default UtilsPage;