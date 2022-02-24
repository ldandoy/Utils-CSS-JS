import React from 'react'
import HighlightCode from "../components/HighlightCode";


const MenuPage = () => {
    const elements = [
        "titre",
        "item",
        "link"
        ]
    return <div className="mlr-20">
        <section>
            <h1 className="title-page">Menu</h1>
        </section>
        <p></p>
        <section className="mtb-60">
            <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="menu" className="title-section">Title</h2>
                        <div className="mb-30">
                            <div className="mb-10"><div className={`p-5 menu-titre`}>This is a title.</div></div>
                        </div>
                    </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                            <HighlightCode code={`<div class="menu menu-titre"></div>`} translateToReact language="htmlbars" />
                    </div>
            </div>
        </section>
        <section className="mtb-60">
        <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="borders" className="title-section">Item</h2>
                        <div className="mb-30">
                            <div className="mb-10"><div className={`p-5 menu-item`}>This is an object.</div></div>
                        </div>
                    </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                            <HighlightCode code={`<div class="menu menu-item"></div>`} translateToReact language="htmlbars" />
                    </div>
            </div>
        </section>
        <section className="mtb-60">
        <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="borders" className="title-section">Link</h2>
                        <div className="mb-30">
                            <div className="mb-10"><div className={`p-5 menu-link`}>This is a link.</div></div>
                        </div>
                    </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                            <HighlightCode code={`<div class="menu menu-link"></div>`} translateToReact language="htmlbars" />
                    </div>
            </div>
        </section>
    </div>
}

export default MenuPage
