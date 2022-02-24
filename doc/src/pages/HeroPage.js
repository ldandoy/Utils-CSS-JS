import React from 'react'
import HighlightCode from "../components/HighlightCode";


const HeroPage = () => {

    const elements = [
        "hero",
        "hero-rounded"
    ]
    return <div className="mlr-20">
        <section>
            <h1 className="title-page">Hero</h1>
        </section>
        <p></p>
        <section className="mtb-60">
            <div className="mb-20 row row-tiers">
                    <div className="col col-tiers">
                        <h2 id="hero" className="title-section">Example of hero element</h2>
                        <div className="mb-30">
                            {elements.map(element =>
                                <div className="mb-10" key={element}><div className={`p-5 hero ${element}`}>This is an {element}.</div></div>
                            )}                       
                        </div>
                    </div>
                    {/* Code */}
                    <div className="col col-two-tiers mt-50">
                        <h3>Code</h3>
                            <HighlightCode code={`
<div class="hero"></div>
<div class="hero hero-rounded"></div>`} translateToReact language="htmlbars" />
                    </div>
            </div>
        </section>
    </div>
}

export default HeroPage
