import React from "react";
import HighlightCode from "../components/HighlightCode";

const AlertsPage = () => {

    return (
        <div className="mlr-20">
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
                            Alert light !
                        </div>
                        <div className="alert alert-dark">
                            Alert dark !
                        </div>
                        <div className="alert alert-error">
                            Alert Error !
                        </div>
                        <div className="alert alert-warning">
                            Alert warning !
                        </div>
                        <div className="alert alert-success">
                            Alert success !
                        </div>
                        <div className="alert alert-notice">
                            Alert notice !
                        </div>
                        <div className="mb-30 alert alert-debug">
                            Alert debug !
                        </div>
                    </div>
                
                    <div>
                        <h2 className="title-section">Code</h2>
                        <HighlightCode code={`<div class="alert alert-light">
    Alert light !
</div>

<div class="alert alert-dark">
    Alert dark !
</div>

<div class="alert alert-error">
    Alert error !
</div>

<div class="alert alert-warning">
    Alert warning !
</div>

<div class="alert alert-success">
    Alert success !
</div>

<div class="alert alert-notice">
    Alert notice !
</div>

<div class="alert alert-debug">
    Alert debug !
</div>`} translateToReact  language='htmlbars' />
                    </div>
                </div>
            </section>
            <section className="mtb-60 ">
                <h2 id="alerts" className="title-section">Example of rounded alert</h2>
                <div className="alert alert-rounded alert-light">
                    Alert light !
                </div>
                <div className="mt-20">
                <HighlightCode code={`<div class="alert alert-light">
    Alert light !
</div>`} translateToReact language='htmlbars' />
                </div>
            </section>
        </div>
    );
}

export default AlertsPage;