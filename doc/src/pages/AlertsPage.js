import React from "react";
import HighlightCode from "../components/HighlightCode";

const AlertsPage = () => {

    return (
        <div>
            <section>
                <h1 class="title-page">Alerts</h1>
            </section>
            <p>
                Customised <span class="badge bg-success">Alert Messages</span> made simple with the 
                <span class="badge bg-success">Alert Component</span>.
            </p>
            <section class="mtb-60 ">
                <h2 id="alerts" class="title-section">Example of alert messages</h2>
                <div class="alert alert-light">
                    Little news !
                </div>
                <div class="alert alert-dark">
                    Little news !
                </div>
                <div class="alert alert-error">
                    Little news !
                </div>
                <div class="alert alert-warning">
                    Little news !
                </div>
                <div class="alert alert-success">
                    Little news !
                </div>
                <div class="alert alert-notice">
                    Little news !
                </div>
                <div class="mb-30 alert alert-debug">
                    Little news !
                </div>
                {/* Code */}
                <h3>Code</h3>
                <HighlightCode code={`<div class="alert alert-dark">
    Little news !
</div>

<div class="alert alert-error">
    Little news !
</div>

<div class="alert alert-warning">
    Little news !
</div>

<div class="alert alert-success">
    Little news !
</div>

<div class="alert alert-notice">
    Little news !
</div>

<div class="alert alert-debug">
    Little news !
</div>`} language='htmlbars' />
            </section>
        </div>
    );
}

export default AlertsPage;