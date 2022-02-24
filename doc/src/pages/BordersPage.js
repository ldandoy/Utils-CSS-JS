import React from "react";
import HighlightCode from "../components/HighlightCode";

const BordersPage = () => {
    const styles = [
    "none",
    "solid",
    "dashed",
    "dotted",
    "double"
    ];

    const colors = [
    "red",
    "right-red",
    "left-red",
    "bottom-red",
    "top-red"
    ]

    const forms = [
    "rounded-none",
    "rounded-sm",
    "rounded",
    "rounded-md",
    "rounded-lg",
    "rounded-l",
    "rounded-xl"
    ]

    const sideForms = [
        "rounded-top-sm",
        "rounded-bottom-sm",
        "rounded-top",
        "rounded-bottom",
        "rounded-top-md",
        "rounded-bottom-md",
        "rounded-top-lg",
        "rounded-bottom-lg",
        "rounded-top-l",
        "rounded-bottom-l",
        "rounded-top-xl",
        "rounded-bottom-xl"
    ]

    return (
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Borders</h1>
            </section>
            <p>
            
            </p>
            <section className="mtb-60">
                <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="borders" className="title-section">Example of border style</h2>
                        <div className="mb-30">
                        {styles.map(style =>
                            <div className="mb-10" key={style}><div className={`p-5 border border-${style}`}>border-{style}</div></div>
                        )}
                        </div>
                    </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                        <HighlightCode code={`
<div class="border border-none"></div>
<div class="border border-solid"></div>
<div class="border border-dashed"></div>
<div class="border border-dotted"></div>
<div class="border border-double"></div>`} translateToReact language="htmlbars" />
                    </div>
                </div>
            </section>
            <section className="mtb-60">
                <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="borders" className="title-section">Example of border form</h2>
                        <div className="mb-30">
                        {forms.map(form =>
                            <div className="mb-10" key={form}><div className={`p-5 border border-solid ${form}`}>border-{form}</div></div>
                        )}
                        </div>
                    </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                        <HighlightCode code={`
<div class="border rounded-none"></div>
<div class="border rounded-sm"></div>
<div class="border rounded"></div>
<div class="border rounded-md"></div>
<div class="border rounded-lg"></div>
<div class="border rounded-l"></div>
<div class="border rounded-xl"></div>`} translateToReact language="htmlbars" />
                    </div>
                </div>
            </section>
            <section className="mtb-60">
                <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="borders" className="title-section">More example of border form</h2>
                        <div className="mb-30">
                        {sideForms.map(sideForm =>
                            <div className="mb-10" key={sideForm}><div className={`p-5 border border-solid ${sideForm}`}>border-{sideForm}</div></div>
                        )}
                        </div>
                    </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                        <HighlightCode code={`
<div class="border rounded-top-sm"></div>
<div class="border rounded-bottom-sm"></div>
<div class="border rounded-top"></div>
<div class="border rounded-bottom"></div>
<div class="border rounded-top-md"></div>
<div class="border rounded-bottom-md"></div>
<div class="border rounded-top-xl"></div>
<div class="border rounded-bottom-xl"></div>`} translateToReact language="htmlbars" />
                    </div>
                </div>
            </section>
            <section className="mtb-60">
                <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="borders" className="title-section">Example of border color</h2>
                        <div className="mb-30">
                        {colors.map(color =>
                            <div className="mb-10" key={color}><div className={`p-5 border border-solid border-${color}`}>border-{color}</div></div>
                        )}
                        </div>
                    </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                        <HighlightCode code={`
<div class="border border-red"></div>
<div class="border border-right-red"></div>
<div class="border border-left-red"></div>
<div class="border border-bottom-red"></div>
<div class="border border-top-red"></div>`} translateToReact language="htmlbars" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BordersPage;