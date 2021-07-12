import React from "react";
import HighlightCode from "../components/HighlightCode";

const ToastsPage = () => {
    const colors = ["light",
    "dark",
    "error",
    "warning",
    "success",
    "notice",
    "debug"];

    return (
        <div>
            <section>
                <h1 className="title-page">Toasts</h1>
            </section>
            <p>
                Try out the <span className="badge bg-success">Toast Component</span>.
            </p>
            <section className="mtb-60 ">
                <h2 id="toasts" className="title-section">Example of toasts</h2>
                {colors.map(color => 
                    <div className="mb-30 grid grid-cols-2 gap-8">
                        <div className="toast-container-fluid">
                            <div className={`toast toast-${color}`}>
                                <div className="toast-title">
                                    Toast title
                                </div>
                                <div className="toast-body">
                                    Little toast ! 
                                </div>
                                <div className="toast-footer">
                                    Toast footer
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* Code */}
                            <HighlightCode code={`<div class="toast toast-${color}">
    <div class="toast-title">
        Toast title
    </div>
    <div class="toast-body">
        Little toast ! 
    </div>
    <div class="toast-footer">
        Toast footer
    </div>
</div>`} language="htmlbars" />
                        </div>
                    </div>
                    )}
            </section>
            <section className="mtb-60 ">
                <h2 className="title-section">Stack of toasts</h2>
                <div className="mb-30 grid grid-cols-2 gap-8">
                    <div className="toast-container-fluid">
                        <div className="toast toast-light">
                            <div className="toast-title">
                                Toast title
                            </div>
                            <div className="toast-body">
                                Little toast ! 
                            </div>
                            <div className="toast-footer">
                                Toast footer
                            </div>
                        </div>
                        <div className="toast toast-dark">
                            <div className="toast-title">
                                Toast title
                            </div>
                            <div className="toast-body">
                                Little toast ! 
                            </div>
                            <div className="toast-footer">
                                Toast footer
                            </div>
                        </div>  
                        <div className="toast toast-error">
                            <div className="toast-title">
                                Toast title
                            </div>
                            <div className="toast-body">
                                Little toast ! 
                            </div>
                            <div className="toast-footer">
                                Toast footer
                            </div>
                        </div>
                        
                    </div>
                    <div>

                        {/* Code */}
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="toast-container-fluid">
    <div class="toast toast-light">
        <div class="toast-title">
            Toast title
        </div>
        <div class="toast-body">
            Little toast ! 
        </div>
        <div class="toast-footer">
            Toast footer
        </div>
    </div>

    <div class="toast toast-dark">
        <div class="toast-title">
            Toast title
        </div>
        <div class="toast-body">
            Little toast ! 
        </div>
        <div class="toast-footer">
            Toast footer
        </div>
    </div>  

    <div class="toast toast-error">
        <div class="toast-title">
            Toast title
        </div>
        <div class="toast-body">
            Little toast ! 
        </div>
        <div class="toast-footer">
            Toast footer
        </div>
    </div>
</div>`} language="htmlbars" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ToastsPage;