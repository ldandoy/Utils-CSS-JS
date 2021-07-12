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
        <div>
            <section>
                <h1 className="title-page">Badges</h1>
            </section>
            <p>
                Highlight words using the <span className="badge bg-success">Badge Component</span>.
            </p>
            <section className="mtb-60">
                <h2 id="badges" className="title-section">Example of badge</h2>
                <div className="mb-30">
                    <p>This is a sentence with a <span className="badge">badge</span>.</p>
                    <p>And there you have a sentence with another <span className="badge bg-success">badge</span>.</p>
                </div>
                {/* Code */}
                <h3>Code</h3>
                <HighlightCode code={`<p>This is a sentence with a <span class="badge">badge</span>.</p>
<p>And there you have a sentence with another <span class="badge bg-success">badge</span>.</p>`} language="htmlbars" />
            </section>
            <section class="mtb-60">
                <div class="mb-30 grid grid-cols-2">
                    <div>
                        {colors.map(color => 
                            <p className="mb-10">Look at this <span className={`badge bg-${color}`}>{color}</span> badge.</p>
                            )}
                    </div>
                    <div>
                        {/* Code */}
                        <HighlightCode code={`<p>Look at this <span class="badge bg-light">light</span> badge.</p>
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