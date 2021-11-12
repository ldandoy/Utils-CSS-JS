import React from "react";
import HighlightCode from "../components/HighlightCode";

const FormsPage = () => {
    return (
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Forms</h1>
            </section>
            <p>
                Implement nice looking <span className="badge bg-success">Forms</span> with 
                the <span className="badge bg-success">Form Component</span>.
            </p>
            <section className="mtb-60">
                <h2 id="forms" className="title-section">Example of form with border</h2>

                <div className='row'>
                    <div className='col col-tiers'>
                        <form className="form-bordered">
                            <div className="form-group">
                                <label for="" className="form-label">Label</label>
                                <input type="text" value="" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Label</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Label</label>
                                <textarea className="form-textarea txt-purple-900">Test</textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn bg-purple-600 txt-white-100 hover:bg-purple-900 btn-rounded">Link</button>
                            </div>
                        </form>
                    </div>

                    <div className='col col-two-tiers'>
                        {/* Code */}
                        <h3>Code</h3>
                        <HighlightCode codeHtml={`<form class="form-bordered">
    <div class="form-group">
        <label for="" class="form-label">Label</label>
        <input type="text" value="" class="form-input" />
    </div>
    <div class="form-group">
        <label for="" class="form-label">Label</label>
        <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
    <div class="form-group">
        <label for="" class="form-label">Label</label>
        <textarea class="form-textarea txt-purple-900">Test</textarea>
    </div>
    <div class="form-group">
        <button class="btn bg-purple-600 
            txt-white-100 
            hover:bg-purple-900 
            btn-rounded">
                Link
        </button>
    </div>
</form>`} language="htmlbars" codeReact={`<form className="form-bordered">
<div className="form-group">
    <label for="" className="form-label">Label</label>
    <input type="text" value="" className="form-input" />
</div>
<div className="form-group">
    <label for="" className="form-label">Label</label>
    <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</div>
<div className="form-group">
    <label for="" className="form-label">Label</label>
    <textarea class="form-textarea txt-purple-900">Test</textarea>
</div>
<div className="form-group">
    <button class="btn bg-purple-600 
        txt-white-100 
        hover:bg-purple-900 
        btn-rounded">
            Link
    </button>
</div>
</form>`} />
                    </div>
                </div>
            </section>
            <section className="mtb-60">
                <h2 className="title-section">Example of form without border</h2>
                <div className="row">
                    <div className="col col-two-tiers">
                        {/* Code */}
                        <h3>Code</h3>
                        <HighlightCode codeHtml={`<form class="form-no-bordered">
    <div class="form-group">
        <label for="" class="form-label">Label</label>
        <input type="text" value="" class="form-input" 
            placeholder="Test sans bordure" />
        <div class="form-message">Explication du champs</div>
    </div>
    <div class="form-group form-group-error">
        <label for="" class="form-label">Label</label>
        <input type="text" value="" class="form-input" />
        <div class="form-message">Champs en erreur</div>
    </div>
    <div class="form-group">
        <label for="" class="form-label">Label</label>
        <select class="form-select">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
    <div class="form-group">
        <label for="" class="form-label">Label</label>
        <textarea class="form-textarea">Test</textarea>
    </div>
    <div class="form-group">
        <button class="btn 
            bg-purple-600
            txt-white-100
            hover:bg-purple-900">
                Link
        </button>
    </div>
</form>`} language="htmlbars" codeReact={`<form className="form-no-bordered">
    <div className="form-group">
        <label for="" className="form-label">Label</label>
        <input type="text" value="" className="form-input"
            placeholder="Test sans bordure" />
        <div className="form-message">Explication du champs</div>
    </div>
    <div className="form-group form-group-error">
        <label for="" className="form-label">Label</label>
        <input type="text" id="" value="" className="form-input" />
        <div className="form-message">Champs en erreur</div>
    </div>
    <div className="form-group">
        <label for="selectInput" className="form-label">Label</label>
        <select className="form-select" id="selectInput">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
    <div className="form-group">
        <label for="" className="form-label">Label</label>
        <textarea className="form-textarea">Test</textarea>
    </div>
    <div className="form-group">
        <button className="btn
            bg-purple-600*
            txt-white-100
            hover:bg-purple-900">
                Link
        </button>
    </div>
</form>`} />
                    </div>
                    <div className="col col-tiers">
                        <form className="form-no-bordered">
                            <div className="form-group">
                                <label for="" className="form-label">Label</label>
                                <input type="text" value="" className="form-input" placeholder="Test sans bordure" />
                                <div className="form-message">Explication du champs</div>
                            </div>
                            <div className="form-group form-group-error">
                                <label for="" className="form-label">Label</label>
                                <input type="text" value="" className="form-input" />
                                <div className="form-message">Champs en erreur</div>
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Label</label>
                                <select className="form-select">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="" className="form-label">Label</label>
                                <textarea className="form-textarea">Test</textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn bg-purple-600 txt-white-100 hover:bg-purple-900">Link</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FormsPage;