import React from "react";
import HighlightCode from "../components/HighlightCode";


const TextsPage= () => {
    return(
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Texts</h1>
            </section>
            <p>
                You can apply <span className="badge bg-success">Text Effects</span> 
                so easyly with the <span className="badge bg-success">Text Component</span>.
            </p>
            <section className="mtb-60">
                <div className="row">
                    <div className="col">
                        <h2 id="texts" className="title-section">Examples of text effects</h2>
                        <div className="txt-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span className="txt-green-1000">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                            Lorem ipsum dolor sit amet <span className="txt-yellow-500">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <HighlightCode codeHtml={`<div class="txt-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span class="txt-green-1000">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet <span class="txt-yellow-500">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
</div>`} language='htmlbars' codeReact={`<div className="txt-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span className="txt-green-1000">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
Lorem ipsum dolor sit amet <span className="txt-yellow-500">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
</div>`} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="txt-justify mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span className="txt-overline">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                            Lorem ipsum dolor sit amet <span className="txt-line-through">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <HighlightCode codeHtml={`<div class="txt-justify mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span class="txt-overline">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet <span class="txt-line-through">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
</div>`} language='htmlbars' codeReact={`<div className="txt-justify mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span className="txt-overline">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
Lorem ipsum dolor sit amet <span className="txt-line-through">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
</div>`} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="pb-30 txt-justify mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span className="txt-orange-600 txt-wavy">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                            Lorem ipsum dolor sit amet <span className="txt-red-400 txt-dotted">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <HighlightCode codeHtml={`
<div class="txt-justify mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span class="txt-orange-600 txt-wavy">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet <span class="txt-red-400 txt-dotted">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
</div>`} language='htmlbars' codeReact={`
<div className="txt-justify mt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab <span className="txt-orange-600 txt-wavy">provident aliquam</span> eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet <span className="txt-red-400 txt-dotted">consectetur adipisicing elit</span>. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident aliquam eos hic dolor aut doloremque inventore sint. Quis, dignissimos recusandae! Ea numquam aspernatur assumenda tenetur a autem, nihil quo?
</div>`} />
                    </div>
                </div>
            </section>
            <section className="mb-60 ">
                <div class="row mb-20">
                    <div class="col">
                        <h2>Autre class possible</h2>
                    </div>
                </div>
                <div class="row row-half">
                    <div class="col col-half">
                        <HighlightCode codeHtml={`<!-- For text in bold: .txt-bold -->
<div class="txt-bold">Texte</div>

<!-- For text in italic: .txt-italic -->
<div class="txt-italic">Texte</div>

<!-- For text in right: .txt-right -->
<div class="txt-right">Texte</div>

<!-- For text in left: .txt-left -->
<div class="txt-left">Texte</div>

<!-- For text in center: .txt-center -->
<div class="txt-center">Texte</div>

<!-- For text in justify: .txt-justify -->
<div class="txt-justify ">Texte</div>

<!-- For text with no underline: .txt-no-underline -->
<div class="txt-no-underline">Texte</div>

<!-- For text no-wrap: .txt-no-wrap -->
<div class="txt-no-wrap">Texte</div>

<!-- For text in oblique: .txt-oblique -->
<div class="txt-oblique">Texte</div>

<!-- For text in uppercase: .txt-uppercase -->
<div class="txt-uppercase">Texte</div>

<!-- For text in lowercase: .txt-lowercase -->
<div class="txt-lowercase">Texte</div>

<!-- For text in capitalize: .txt-capitalize -->
<div class="txt-capitalize">Texte</div>

<!-- For text in underline: .txt-underline -->
<div class="txt-underline">Texte</div>

<!-- For text in dashed: .txt-dashed -->
<div class="txt-dashed ">Texte</div>

<!-- For text in dotted: .txt-dotted -->
<div class="txt-dotted">Texte</div>

<!-- For text in double: .txt-double -->
<div class="txt-double">Texte</div>

<!-- For text in line-through: .txt-line-through -->
<div class="txt-line-through">Texte</div>

<!-- For text in none: .txt-none -->
<div class="txt-none ">Texte</div>

<!-- For text in overline: .txt-overline -->
<div class="txt-overline">Texte</div>

<!-- For text in solid: .txt-solid -->
<div class="txt-solid">Texte</div>

<!-- For text in wavy: .txt-wavy -->
<div class="txt-wavy">Texte</div>`} language='htmlbars' codeReact={``} />
                    </div>
                    <div class="col col-half">
                        <HighlightCode codeHtml={`<!-- For text in small: .txt-small -->
<div class="txt-small">Texte</div>

<!-- For text in normal: .txt-normal -->
<div class="txt-normal">Texte</div>

<!-- For text in large: .txt-large -->
<div class="txt-large">Texte</div>

<!-- For text in xl: .txt-xl -->
<div class="txt-xl">Texte</div>`} language='htmlbars' codeReact={``} />

                        <HighlightCode codeHtml={`<!-- For text in line-height-sm: .txt-line-height-sm -->
<div class="txt-line-height-sm">Texte</div>

<!-- For text in line-height: .txt-line-height -->
<div class="txt-line-height">Texte</div>

<!-- For text in line-height-l: .txt-line-height-l -->
<div class="txt-line-height-l">Texte</div>

<!-- For text in line-height-xl: .txt-line-height-xl -->
<div class="txt-line-height-xl">Texte</div>`} language='htmlbars' codeReact={``} />

                        <HighlightCode codeHtml={`<!-- For text size form 8px to 30px: .txt-size-8 -->
<div class="txt-size-21">Texte</div>

<!-- For text form 30px to 100px five by five: .txt-size-55 -->
<div class="txt-size-70">Texte</div>`} language='htmlbars' codeReact={``} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TextsPage;