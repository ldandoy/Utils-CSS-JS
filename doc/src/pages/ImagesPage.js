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
                <div className="mb-30 row">
                    <div className="col col-tiers">
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Profile" className="img-fluid" />
                    </div>
                    <div className="col col-two-tiers">
                        <HighlightCode codeHtml={`<div class="w-20">
    <img src="#" alt="Profile picture" class="img-fluid" />
</div>`} language="htmlbars" codeReact={`<div className="w-20">
    <img src="#" alt="Profile picture" className="img-fluid" />
</div>`} />
                    </div>
                </div>
                <div className="mb-30 row">
                    <div className="col col-two-tiers">
                        <HighlightCode codeHtml={`<div class="w-40">
    <img src="#" alt="Profile picture" class="img-thumbnails" />
</div>`} language="htmlbars" codeReact={`<div className="w-40">
    <img src="#" alt="Profile picture" className="img-thumbnails" />
</div>`} />
                    </div>
                    <div className="col col-tiers">
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Profile" className="img-thumbnails" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ImagesPage;