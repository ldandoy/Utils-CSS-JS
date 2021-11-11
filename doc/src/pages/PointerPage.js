import React from 'react'
import HighlightCode from "../components/HighlightCode";

const PointerPage = () => {
    return (
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Spacing</h1>
            </section>
            <p>
                Try out the <span className="badge bg-success">Pointer Component</span>.
            </p>
            <section className="mtb-60 ">
                <h2 id="toasts" className="title-section">How to set a pointer when you are on a div</h2>
            
                <div className="mb-30 grid grid-cols-2 gap-8">
                    <div className="">
                        <div class="cursor-pointer p-30 mb-10 bg-green-200">
                            Pointer
                        </div>
                        <div class="p-30 cursor-progress mb-10 bg-green-200">
                            Progress
                        </div>
                        <div class="cursor-copy p-30 mb-10 bg-green-200">
                            Copy
                        </div>
                        <div class="p-30 cursor-not-allowed mb-10 bg-green-200">
                            Not-allowed
                        </div>
                        <div class="cursor-cell p-30 mb-10 bg-green-200">
                            Cell
                        </div>
                        <div class="p-30 cursor-col-resize mb-10 bg-green-200">
                            Col-resize
                        </div>
                        <div class="cursor-crosshair p-30 mb-10 bg-green-200">
                            Crosshair
                        </div>
                        <div class="p-30 cursor-context-menu mb-10 bg-green-200">
                            Context-menu
                        </div>
                        <div class="cursor-pointer p-30 mb-10 bg-green-200">
                            no-drop
                        </div>
                        <div class="p-30 cursor-grab mb-10 bg-green-200">
                            Grab
                        </div>
                        <div class="cursor-help p-30 mb-10 bg-green-200">
                            help
                        </div>
                        <div class="p-30 cursor-zoom-in mb-10 bg-green-200">
                            Zoom-in
                        </div>
                        <div class="cursor-zoom-out p-30 mb-10 bg-green-200">
                            Zoom-out
                        </div>
                        <div class="p-30 cursor-move mb-10 bg-green-200">
                            Move
                        </div>
                        <div class="cursor-none p-30 mb-10 bg-green-200">
                            none
                        </div>
                        <div class="p-30 cursor-text mb-10 bg-green-200">
                            Text
                        </div>
                        <div class="p-30 cursor-vertical-text mb-10 bg-green-200">
                            Vertical text
                        </div>
                    </div>
                    <div className="">
                        {/* Code */}
                        <HighlightCode codeHtml={`<div class="cursor-pointer p-30 mb-10 bg-green-200">
    Pointer
</div>
<div class="p-30 cursor-progress mb-10 bg-green-200">
    Progress
</div>
<div class="cursor-copy p-30 mb-10 bg-green-200">
    Copy
</div>
<div class="p-30 cursor-not-allowed mb-10 bg-green-200">
    Not-allowed
</div>
<div class="cursor-cell p-30 mb-10 bg-green-200">
    Cell
</div>
<div class="p-30 cursor-col-resize mb-10 bg-green-200">
    Col-resize
</div>
<div class="cursor-crosshair p-30 mb-10 bg-green-200">
    Crosshair
</div>
<div class="p-30 cursor-context-menu mb-10 bg-green-200">
    Context-menu
</div>
<div class="cursor-pointer p-30 mb-10 bg-green-200">
    no-drop
</div>
<div class="p-30 cursor-grab mb-10 bg-green-200">
    Grab
</div>
<div class="cursor-help p-30 mb-10 bg-green-200">
    help
</div>
<div class="p-30 cursor-zoom-in mb-10 bg-green-200">
    Zoom-in
</div>
<div class="cursor-zoom-out p-30 mb-10 bg-green-200">
    Zoom-out
</div>
<div class="p-30 cursor-move mb-10 bg-green-200">
    Move
</div>
<div class="cursor-none p-30 mb-10 bg-green-200">
    none
</div>
<div class="p-30 cursor-text mb-10 bg-green-200">
    Text
</div>
<div class="p-30 cursor-vertical-text bg-green-200">
    Vertical text
</div>`} language="htmlbars" codeReact={`<div className="cursor-pointer p-30 mb-10 bg-green-200">
    Pointer
</div>
<div className="p-30 cursor-progress mb-10 bg-green-200">
    Progress
</div>
<div className="cursor-copy p-30 mb-10 bg-green-200">
    Copy
</div>
<div className="p-30 cursor-not-allowed mb-10 bg-green-200">
    Not-allowed
</div>
<div className="cursor-cell p-30 mb-10 bg-green-200">
    Cell
</div>
<div className="p-30 cursor-col-resize mb-10 bg-green-200">
    Col-resize
</div>
<div className="cursor-crosshair p-30 mb-10 bg-green-200">
    Crosshair
</div>
<div className="p-30 cursor-context-menu mb-10 bg-green-200">
    Context-menu
</div>
<div className="cursor-pointer p-30 mb-10 bg-green-200">
    no-drop
</div>
<div className="p-30 cursor-grab mb-10 bg-green-200">
    Grab
</div>
<div className="cursor-help p-30 mb-10 bg-green-200">
    help
</div>
<div className="p-30 cursor-zoom-in mb-10 bg-green-200">
    Zoom-in
</div>
<div className="cursor-zoom-out p-30 mb-10 bg-green-200">
    Zoom-out
</div>
<div className="p-30 cursor-move mb-10 bg-green-200">
    Move
</div>
<div className="cursor-none p-30 mb-10 bg-green-200">
    none
</div>
<div className="p-30 cursor-text mb-10 bg-green-200">
    Text
</div>
<div className="p-30 cursor-vertical-text bg-green-200">
    Vertical text
</div>`} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PointerPage
