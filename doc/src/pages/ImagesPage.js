import React from "react";
import HighlightCode from "../components/HighlightCode";

const ImagesPage = () => {
    return (
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Images</h1>
            </section>
            <p>
                You can display nice looking <span className="badge bg-success">Images</span> 
                with the <span className="badge bg-success">Image Component</span>.
            </p>
            <section className="mtb-60">
                <h2 id='images' className="title-section">Example of images</h2>
                <div className="mb-30 row row-tiers">
                    <div className="col col-tiers">
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Profile" className="img-fluid" />
                    </div>
                    <div className="col col-two-tiers">
                        <HighlightCode code={`<img src="#" alt="Profile picture" class="img-fluid" />`} 
                        translateToReact language="htmlbars" />
                    </div>
                </div>
                <div className="mb-30 row row-tiers">
                    <div className="col col-two-tiers">
                        <HighlightCode code={`<img src="#" alt="Profile picture" class="img-thumbnails" />`} 
                        translateToReact language="htmlbars" />
                    </div>
                    <div className="col col-tiers">
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Profile" className="img-thumbnails" />
                    </div>
                </div>

                <div className="mb-30 row row-tiers">
                    <div className="col col-tiers">
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Profile" className="img-rounded" />
                    </div>
                    <div className="col col-two-tiers">
                        <HighlightCode code={`<img src="#" alt="Profile picture" class="img-rounded" />`} 
                        translateToReact language="htmlbars" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ImagesPage;