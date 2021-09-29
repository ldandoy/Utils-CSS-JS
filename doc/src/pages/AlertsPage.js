import React from "react";
import HighlightCode from "../components/HighlightCode";

const AlertsPage = () => {

    return (
        <div>
            <section>
                <h1 className="title-page">Alerts</h1>
            </section>
            <p>
                Customised <span className="badge bg-success">Alert Messages</span> made simple with the <span className="badge bg-success">Alert Component</span>.
            </p>
            <section className="mtb-60 ">
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div>
                    <h2 id="alerts" className="title-section">Example of alert messages</h2>
                        <div className="alert alert-light">
                            Little news !
                        </div>
                        <div className="alert alert-dark">
                            Little news !
                        </div>
                        <div className="alert alert-error">
                            Little news !
                        </div>
                        <div className="alert alert-warning">
                            Little news !
                        </div>
                        <div className="alert alert-success">
                            Little news !
                        </div>
                        <div className="alert alert-notice">
                            Little news !
                        </div>
                        <div className="mb-30 alert alert-debug">
                            Little news !
                        </div>
                    </div>
                
                <div>
                    <h2 className="title-section">Code</h2>
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
    </div>
    </div>
            </section>
        </div>
    );
}

export default AlertsPage;