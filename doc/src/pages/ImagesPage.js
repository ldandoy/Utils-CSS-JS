import React from "react";
import HighlightCode from "../components/HighlightCode";

const ImagesPage = () => {
    return (
        <div>
            <section>
                <h1 className="title-page">Images</h1>
            </section>
            <p>
                You can display nice looking <span className="badge bg-success">Images</span> 
                with the <span className="badge bg-success">Image Component</span>.
            </p>
            <section className="mtb-60">
                <h2 id='images' className="title-section">Example of images</h2>
                <div className="mb-30 grid grid-cols-2">
                    <div className="w-20">
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Profile" className="img-fluid" />
                    </div>
                    <div>
                        <HighlightCode code={`<div class="w-20">
    <img src="#" alt="Profile picture" class="img-fluid" />
</div>`} language="htmlbars" />
                    </div>
                </div>
                <div className="mb-30 grid grid-cols-2">
                    <div className="w-40">
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Profile" className="img-thumbnails" />
                    </div>
                    <div>
                        <HighlightCode code={`<div class="w-40">
    <img src="#" alt="Profile picture" class="img-thumbnails" />
</div>`} language="htmlbars" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ImagesPage;