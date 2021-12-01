import React from 'react'
import HighlightCode from "../components/HighlightCode";

const ShadowPage = () => {
    return <div className="mlr-20">
        <section>
            <h1 className="title-page">Shadow</h1>
        </section>
        <p>
            Try out the <span className="badge bg-success">Shadow Component</span>.
        </p>
        <section className="mtb-60 ">
            <div className="row">
                <div className="col col-half">
                    <div className="shadow-none">
                        .shadow-none
                    </div>
                </div>
                <div className="col col-half">
                    <HighlightCode codeHtml={`<div class="shadow-none">
    .shadow-none
</div>`} codeReact={`<div className="shadow-none">
    .shadow-none
</div>`} language='htmlbars' />
                </div>
            </div>
            <div className="row">
                <div className="col col-half">
                    <HighlightCode codeHtml={`<div class="shadow-sm">
    .shadow-sm
</div>`} codeReact={`<div className="shadow-sm">
    .shadow-sm
</div>`} language='htmlbars' />
                </div>
                <div className="col col-half">
                    <div className="shadow-sm">
                        .shadow-sm
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col col-half">
                    <div className="shadow">
                        .shadow
                    </div>
                </div>
                <div className="col col-half">
                    <HighlightCode codeHtml={`<div class="shadow">
    .shadow
</div>`} codeReact={`<div className="shadow">
    .shadow
</div>`} language='htmlbars' />
                </div>
            </div>
            <div className="row">
            <div className="col col-half">
                    <HighlightCode codeHtml={`<div class="shadow-lg">
    .shadow-lg
</div>`} codeReact={`<div className="shadow-lg">
    .shadow-lg
</div>`} language='htmlbars' />
                </div>
                <div className="col col-half">
                    <div className="shadow-lg">
                        .shadow-lg
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default ShadowPage
