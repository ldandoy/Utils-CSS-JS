import React from "react";
import HighlightCode from "../components/HighlightCode";

const ButtonsPage = () => {
    return (
        <div>
            <section>
                <h1 class="title-page">Buttons</h1>
            </section>
            <p>
                Use a <span class="badge bg-success">Button</span> in keeping of the situation
                with the <span class="badge bg-success">Button Component</span>.
            </p>
            <section class="mtb-60">
                <h2 id="buttons" class="title-section">Example of buttons</h2>
                <div class="mb-30">
                    <button class="btn btn-light">btn-light</button>
                    <button class="btn btn-dark">btn-dark</button>
                    <button class="btn btn-success btn-rounded">btn-success</button>
                    <button class="btn btn-error">btn-error</button>
                    <button class="btn btn-warning">btn-warning</button>
                    <button class="btn btn-notice">btn-notice</button>
                    <button class="btn btn-debug">btn-debug</button>
                </div>

                {/* Code */}
                <h3>Code</h3>
                <HighlightCode code={`<button class="btn btn-light">btn-light</button>
<button class="btn btn-dark">btn-dark</button>
<button class="btn btn-success btn-rounded">btn-success</button>
<button class="btn btn-error">btn-error</button>
<button class="btn btn-warning">btn-warning</button>
<button class="btn btn-notice">btn-notice</button>
<button class="btn btn-debug">btn-debug</button>`} language="htmlbars" />
            </section>
        </div>
    );
}

export default ButtonsPage;