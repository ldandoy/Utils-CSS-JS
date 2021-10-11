import React from 'react'
import HighlightCode from "../components/HighlightCode";

const StructurePage = () => {
    return (
        <div>
            <section>
                <h1 className="title-page">Structure des pages</h1>
            </section>
            <p>
                Try out the <span className="badge bg-success">Structure Component</span>.
            </p>
            <section className="mtb-60 ">
                <h2 className="title-section">How to add a container with a centered content</h2>
            
                <div className="mb-30">
                    <HighlightCode code={`<div class="container">
    Test
</div>`} language="htmlbars" />
                </div>
                <h2 className="title-section mb-30">How to add a fullwidth container</h2>
                <div className="mb-30">
                    <HighlightCode code={`<div class="container-fluid">
    Test
</div>`} language="htmlbars" />
                </div>
                <h2 className="title-section mb-30">How to add a container with a side bar</h2>
                <div className="mb-30">
                    <HighlightCode code={`<div class="container-aside">
    Test
</div>`} language="htmlbars" />
                </div>
            </section>
        </div>
    )
}

export default StructurePage
