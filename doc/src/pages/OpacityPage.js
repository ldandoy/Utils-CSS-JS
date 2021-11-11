import React from 'react'
import HighlightCode from "../components/HighlightCode";

const OpacityPage = () => {
    return (
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Opacity</h1>
            </section>
            <p>
                Try out the <span className="badge bg-success">Opacity Component</span>.
            </p>
            <section className="mtb-60 ">
                <h2 id="toasts" className="title-section">How to add some opacity to an element</h2>
            
                <div className="mb-30 grid grid-cols-2 gap-8">
                    <div className="">
                        <div class="m-30 opacity-25 bg-purple-500">
                            Test
                        </div>
                    </div>
                    <div className="">
                        {/* Code */}
                        <HighlightCode codeHtml={`<div class="m-30 opacity-25 bg-purple-500">
    Test
</div>`} language="htmlbars" codeReact={`<div className="m-30 opacity-25 bg-purple-500">
    Test
</div>`} />
                    </div>
                </div>

                <div className="mb-30">
                    The value are: opacity-0 to opacity-1 by 5.
                </div>
            </section>
        </div>
    )
}

export default OpacityPage
