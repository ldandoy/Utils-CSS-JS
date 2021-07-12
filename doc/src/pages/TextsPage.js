import React from "react";
import HighlightCode from "../components/HighlightCode";


const TextsPage= () => {
    return(
        <div>
            <section>
                <h1 className="title-page">Texts</h1>
            </section>
            <p>
                You can apply <span className="badge bg-success">Text Effects</span> 
                so easyly with the <span className="badge bg-success">Text Component</span>.
            </p>
            <section className="mtb-60">
                <h2 id="texts" className="title-section">Examples of text effects</h2>
                <div className="txt-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span className="txt-green-1000">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                    Lorem ipsum dolor sit amet <span className="txt-yellow-1000">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                </div>
                <div className="txt-justify mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span className="txt-overline">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                    Lorem ipsum dolor sit amet <span className="txt-line-through">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                </div>
                <div className="pb-30 txt-justify mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span className="txt-orange-600 txt-wavy">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                    Lorem ipsum dolor sit amet <span className="txt-red-400 txt-dotted">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                </div>

                {/* Code */}
                <h3>Code</h3>
                <HighlightCode code={`<div class="txt-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span class="txt-green-1000">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet <span class="txt-yellow-1000">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
</div>
<div class="txt-justify mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span class="txt-overline">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet <span class="txt-line-through">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
</div>
<div class="txt-justify mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span class="txt-orange-600 txt-wavy">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet <span class="txt-red-400 txt-dotted">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
</div>`} language="htmlbars" />
            </section>
        </div>
    );
}

export default TextsPage;