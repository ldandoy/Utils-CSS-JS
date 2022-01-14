import React from 'react'
import HighlightCode from "../components/HighlightCode";

const SpacingPage = () => {
    return (
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Spacing</h1>
            </section>
            <p>
                Try out the <span className="badge bg-success">Spacing Component</span>.
            </p>
            <section className="mtb-60 ">
                <h2 id="toasts" className="title-section">How to put margin (external spacing) and padding (internal spacing)</h2>
            
                <div className="mb-30 grid grid-cols-2 gap-8">
                    <div className="">
                        <div className="m-30 bg-purple-500">
                            Test
                        </div>

                        <div className="p-50 bg-green-200">
                            Test
                        </div>
                    </div>
                    <div className="">
                        {/* Code */}
                        <HighlightCode code={`<div class="m-30 bg-purple-500">
    Test
</div>

<div class="p-50 bg-green-200">
    Test
</div>`} translateToReact language="htmlbars" />
                    </div>
                </div>
                <div className="mb-30">
                    So if you want to add a padding of 20px, you can add the class: p-20.<br />
                    With the same idea, you can add a margin of 35px on the right by adding: pr-35<br />
                    You can go with: 0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100 pixels
                </div>
            </section>
        </div>
    )
}

export default SpacingPage
