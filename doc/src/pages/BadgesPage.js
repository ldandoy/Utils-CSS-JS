import React from "react";
import HighlightCode from "../components/HighlightCode";

const BadgesPage = () => {
    const colors = ["light",
    "dark",
    "error",
    "warning",
    "success",
    "notice",
    "debug"];

    return (
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Badges</h1>
            </section>
            <p>
                Highlight words using the <span className="badge bg-success">Badge Component</span>.
            </p>
            <section className="mtb-60">
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div>
                        <h2 id="badges" className="title-section">Example of badge</h2>
                        <div className="mb-30">
                            <p>This is a sentence with a <span className="badge">badge</span>.</p>
                            <p>You have a <span className="badge bg-success">sentence</span>.</p>
                        </div>
                    </div>
                    {/* Code */}
                    <div>
                        <h2 className="title-section">Code</h2>
                        <HighlightCode codeHtml={`<p>This is a sentence with a <span class="badge">badge</span>.</p>
<p>You have a <span class="badge bg-success">sentence</span>.</p>`} language="htmlbars" />
                    </div>
                </div>
            </section>
            <section className="mtb-60">
                <h2 className="title-section">More examples</h2>
                <div className="mb-30 grid grid-cols-2">
                    <div>
                        {colors.map((color, index) => 
                            <p key={index} className="mb-10">Look at this <span className={`badge bg-${color}`}>{color}</span> badge.</p>
                            )}
                    </div>
                    <div>
                        {/* Code */}
                        <HighlightCode codeHtml={`<p>Look at this <span class="badge bg-light">light</span> badge.</p>
<p>Look at this <span class="badge bg-dark">dark</span> badge.</p>
<p>Look at this <span class="badge bg-error">error</span> badge.</p>
<p>Look at this <span class="badge bg-warning">warning</span> badge.</p>
<p>Look at this <span class="badge bg-success">success</span> badge.</p>
<p>Look at this <span class="badge bg-notice">notice</span> badge.</p>
<p>Look at this <span class="badge bg-debug">debug</span> badge.</p>`} language="htmlbars" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BadgesPage;