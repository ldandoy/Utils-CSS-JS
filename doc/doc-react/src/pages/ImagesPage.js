import React from "react";
import HighlightCode from "../components/HighlightCode";

const ImagesPage = () => {
    return (
        <div>
            <section>
                <h1 class="title-page">Images</h1>
            </section>
            <p>
                You can display nice looking <span class="badge bg-success">Images</span> 
                with the <span class="badge bg-success">Image Component</span>.
            </p>
            <section class="mtb-60">
                <h2 id='images' class="title-section">Example of images</h2>
                <div class="mb-30 grid grid-cols-2">
                    <div class="w-20">
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Profile" class="img-fluid" />
                    </div>
                    <div>
                        <HighlightCode code={`<div class="w-20">
    <img src="#" alt="Profile picture" class="img-fluid" />
</div>`} language="htmlbars" />
                    </div>
                </div>
                <div class="mb-30 grid grid-cols-2">
                    <div class="w-40">
                        <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Profile" class="img-thumbnails" />
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