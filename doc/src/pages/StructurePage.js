import React from 'react'
import HighlightCode from "../components/HighlightCode";

const StructurePage = () => {
    return (
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Structure des pages</h1>
            </section>
            <p>
                Try out the <span className="badge bg-success">Structure Component</span>.
            </p>
            <section className="mtb-60 ptb-10 plr-20 bg-gray-100">
                <h2 className="title-section">Full exemple of the grid</h2>
                <div className="container">
                    <div className="row">
                        <div className="col p-20 txt-center bg-orange-200">
                            Col
                        </div>
                        <div className="col p-20 txt-center bg-red-200">
                            Col
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-half p-20 txt-center bg-orange-200">
                            Col
                        </div>
                        <div className="col col-half p-20 txt-center bg-red-200">
                            Col
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-tiers p-20 txt-center bg-orange-200">
                            Col
                        </div>
                        <div className="col col-tiers p-20 txt-center bg-red-200">
                            Col
                        </div>
                        <div className="col col-tiers p-20 txt-center bg-red-200">
                            Col
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-tiers p-20 txt-center bg-orange-200">
                            Col
                        </div>
                        <div className="col col-tiers p-20 txt-center bg-red-200">
                            Col
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-tiers p-20 txt-center bg-orange-200">
                            Col
                        </div>
                        <div className="col col-two-tiers p-20 txt-center bg-red-200">
                            Col
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-two-tiers p-20 txt-center bg-orange-200">
                            Col
                        </div>
                        <div className="col col-tiers p-20 txt-center bg-red-200">
                            Col
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-quarter p-20 txt-center bg-orange-200">
                            Col
                        </div>
                        <div className="col col-quarter p-20 txt-center bg-red-200">
                            Col
                        </div>
                        <div className="col col-quarter p-20 txt-center bg-red-200">
                            Col
                        </div>
                        <div className="col col-quarter p-20 txt-center bg-red-200">
                            Col
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-quarter p-20 txt-center bg-orange-200">
                            Col
                        </div>
                        <div className="col col-quarter p-20 txt-center bg-red-200">
                            Col
                        </div>
                        <div className="col col-quarter p-20 txt-center bg-red-200">
                            Col
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-two-quarter p-20 txt-center bg-orange-200">
                            Col
                        </div>
                        <div className="col col-quarter p-20 txt-center bg-red-200">
                            Col
                        </div>
                        <div className="col col-quarter p-20 txt-center bg-red-200">
                            Col
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-quarter p-20 txt-center bg-red-200">
                            Col
                        </div>
                        <div className="col col-three-quarter p-20 txt-center bg-red-200">
                            Col
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="mtb-60 ">
                <h2 className="title-section">How to add a container with a centered content</h2>
            
                <div className="mb-30">
                    <HighlightCode codeHtml={`<div class="container">
    Test
</div>`} language="htmlbars" />
                </div>
                <h2 className="title-section mb-30">How to add a fullwidth container</h2>
                <div className="mb-30">
                    <HighlightCode codeHtml={`<div class="container-fluid">
    Test
</div>`} language="htmlbars" />
                </div>
                <h2 className="title-section mb-30">How to add a container with a side bar</h2>
                <div className="mb-30">
                    <HighlightCode codeHtml={`<div class="container-aside">
    Test
</div>`} language="htmlbars" />
                </div>
            </section>
        </div>
    )
}

export default StructurePage
