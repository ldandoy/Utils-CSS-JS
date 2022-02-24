import React from "react";
import HighlightCode from "../components/HighlightCode";

const GridPage = () => {
    const gridCols = [
    "grid-cols-0",
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
    "grid-cols-10"
    ];

    const colors = [
    "red",
    "right-red",
    "left-red",
    "bottom-red",
    "top-red"
    ]

    const numbers = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
    ]

    return (
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Grid</h1>
            </section>
            <section className="mtb-60">
                <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="borders" className="title-section">Grid Template Columns</h2>
                        <p className="mb-5">
                            Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns.
                        </p>
                </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="grid"></div>`} translateToReact language="htmlbars" />
                    </div>
                </div>
            </section>
            <section className="mtb-60">
                <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="borders" className="title-section">Grid Template Columns</h2>
                        <p className="mb-5">
                            The grid-cols-[number from 0 to 10] property defines the line names and track sizing functions of the grid columns.
                            In the example below we use "grid-cols-3".
                        </p>
                        <div className="mb-30">
                            <div className="mb-10 row-tiers"><div className="p-5 grid grid-cols-3">
                                <div className="block" >1</div>
                                <div className="block" >2</div>
                                <div className="block" >3</div>
                                <div className="block" >4</div>
                                <div className="block" >5</div>
                                <div className="block" >6</div>
                                <div className="block" >7</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                        <HighlightCode code={`
<div class="grid grid-cols-0"></div>
<div class="grid grid-cols-1"></div>
<div class="grid grid-cols-2"></div>
<div class="grid grid-cols-3"></div>
<div class="grid grid-cols-4"></div>
<div class="grid grid-cols-5"></div>
<div class="grid grid-cols-6"></div>
<div class="grid grid-cols-7"></div>
<div class="grid grid-cols-8"></div>
<div class="grid grid-cols-9"></div>
<div class="grid grid-cols-10"></div>
                        `} translateToReact language="htmlbars" />
                    </div>
                </div>
            </section>
            <section className="mtb-60">
                <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="borders" className="title-section">Grid Gap</h2>
                        <p className="mb-5">
                        The gap-[number from 0 to 8] property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.
                        In the example below we use "gap-4".
                        </p>
                        <div className="mb-30">
                            <div className="mb-10 row-tiers"><div className="p-5 grid grid-cols-3 gap-6">
                                <div className="block" >1</div>
                                <div className="block" >2</div>
                                <div className="block" >3</div>
                                <div className="block" >4</div>
                                <div className="block" >5</div>
                                <div className="block" >6</div>
                                <div className="block" >7</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                        <HighlightCode code={`
<div class="grid gap-0"></div>
<div class="grid gap-1"></div>
<div class="grid gap-2"></div>
<div class="grid gap-3"></div>
<div class="grid gap-4"></div>
<div class="grid gap-5"></div>
<div class="grid gap-6"></div>
<div class="grid gap-7"></div>
<div class="grid gap-8"></div>
                        `} translateToReact language="htmlbars" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GridPage;
