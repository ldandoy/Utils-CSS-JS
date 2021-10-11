import React from 'react'
import HighlightCode from "../components/HighlightCode";

const FlexPage = () => {
    return (
        <div>
            <section>
                <h1 className="title-page">Flex Box</h1>
            </section>
            <p>
                The <span className="badge bg-success">Flex Box</span> 
                is an easy way to display a card with a title, an image 
                and some buttons.
            </p>
            <section className="mt-30 mb-60">
                <h2 className="title-section">Exemple of Flex Box</h2>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div className="flex flex-ai-center flex-jc-space-around">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ai-center flex-jc-space-around">
    <div class="bg-blue-600 p-20">Test 1</div>
    <div class="bg-brown-600 p-20">Test 2</div>
</div>`} language="htmlbars"/>
                    </div>
                </div>
            </section>

            <section className="mt-30 mb-60">
                <h2 className="title-section">Example of Justify content</h2>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div className="flex flex-jc-start">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-jc-start">
    ...
</div>`} language="htmlbars"/>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-jc-end">
    ...
</div>`} language="htmlbars"/>
                    </div>
                    <div className="flex flex-jc-end">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div className="flex flex-jc-center">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-jc-center">
    ...
</div>`} language="htmlbars"/>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-jc-space-between">
    ...
</div>`} language="htmlbars"/>
                    </div>
                    <div className="flex flex-jc-space-between">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div className="flex flex-jc-space-around">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-jc-space-around">
    ...
</div>`} language="htmlbars"/>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-jc-space-evenly">
    ...
</div>`} language="htmlbars"/>
                    </div>
                    <div className="flex flex-jc-space-evenly">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                </div>
            </section>

            <section className="mt-30 mb-60">
                <h2 className="title-section">Exemple of Align item</h2>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div className="flex flex-ai-stretch">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ai-stretch">
    ...
</div>`} language="htmlbars"/>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ai-baseline">
    ...
</div>`} language="htmlbars"/>
                    </div>
                    <div className="flex flex-ai-baseline">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div className="flex flex-ai-center">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ai-center">
    ...
</div>`} language="htmlbars"/>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ai-flex-start">
    ...
</div>`} language="htmlbars"/>
                    </div>
                    <div className="flex flex-ai-flex-start">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div className="flex flex-ai-flex-end">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ai-flex-end">
    ...
</div>`} language="htmlbars"/>
                    </div>
                </div>
            </section>

            <section className="mt-30 mb-60">
                <h2 className="title-section">Example of Justify content</h2>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div className="flex flex-ac-start">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ac-start">
    ...
</div>`} language="htmlbars"/>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ac-end">
    ...
</div>`} language="htmlbars"/>
                    </div>
                    <div className="flex flex-ac-end">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div className="flex flex-ac-center">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ac-center">
    ...
</div>`} language="htmlbars"/>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ac-space-between">
    ...
</div>`} language="htmlbars"/>
                    </div>
                    <div className="flex flex-ac-space-between">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div className="flex flex-ac-space-around">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ac-space-around">
    ...
</div>`} language="htmlbars"/>
                    </div>
                </div>
                <div className="mb-20 grid grid-cols-2 gap-8">
                    <div>
                        <h3>Code</h3>
                        <HighlightCode code={`<div class="flex flex-ac-space-stretch">
    ...
</div>`} language="htmlbars"/>
                    </div>
                    <div className="flex flex-ac-space-stretch">
                        <div className="bg-blue-600 p-20">Test 1</div>
                        <div className="bg-brown-600 p-20">Test 2</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FlexPage
