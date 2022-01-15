import React from "react";
import { makeStyles } from "@material-ui/core";
import HighlightCode from "../components/HighlightCode";

const useStyles = makeStyles({
    colorSquare: {
        width: "100px",
        height: "100px",
        justifyContent: "center",
        display: "flex", 
        alignItems: "center",
    },
    });

const ColorsPage = () => {
    const classes = useStyles();
    const colors = ["blue", 
        "red",
        "green",
        "orange",
        "pink",
        "gray",
        "yellow",
        "purple",
        "white",
        "brown"]

    return (
        <div className="mlr-20">
            <section>
                <h1 className="title-page">Colors</h1>
            </section>
            <section className="mtb-60">
                <h2 id="colors" className="title-section">Background color palettes</h2>
                   {colors.map(color => 
                        <>
                            <h3 className="title-section">{color}</h3>
                            <div className="mb-30 grid grid-cols-2 gap-4">
                                <div className="flex">
                                    <div className={`bg-${color}-100 ${classes.colorSquare}`}>100</div>
                                    <div className={`bg-${color}-200 ${classes.colorSquare}`}>200</div>
                                    <div className={`bg-${color}-300 ${classes.colorSquare}`}>300</div>
                                    <div className={`bg-${color}-400 ${classes.colorSquare}`}>400</div>
                                    <div className={`bg-${color}-500 ${classes.colorSquare}`}>500</div>
                                    <div className={`bg-${color}-600 ${classes.colorSquare}`}>600</div>
                                    <div className={`bg-${color}-700 ${classes.colorSquare}`}>700</div>
                                    <div className={`bg-${color}-800 ${classes.colorSquare}`}>800</div>
                                    <div className={`bg-${color}-900 ${classes.colorSquare}`}>900</div>
                                    <div className={`bg-${color}-1000 ${classes.colorSquare}`}>1000</div>
                                </div>
                                {/* Code */}
                                <div>
                                    <HighlightCode code={`<div class="bg-${color}-100">100</div>
<div class="bg-${color}-200">200</div>
<div class="bg-${color}-300">300</div>
<div class="bg-${color}-400">400</div>
<div class="bg-${color}-500">500</div>
<div class="bg-${color}-600">600</div>
<div class="bg-${color}-700">700</div>
<div class="bg-${color}-800">800</div>
<div class="bg-${color}-900">900</div>
<div class="bg-${color}-1000">1000</div>`} translateToReact language="htmlbars" />
                                </div>
                            </div>
                        </>
                    )}
            </section>
            <section className="mtb-60">
                <h2 id="colors" className="title-section">Text color palettes</h2>
                   {colors.map(color => 
                        <>
                            <h3 className="title-section">{color}</h3>
                            <div className="mb-30 grid grid-cols-2 gap-4">
                                <div className="flex">
                                    <div className={`txt-${color}-100 ${classes.colorSquare}`}>100</div>
                                    <div className={`txt-${color}-200 ${classes.colorSquare}`}>200</div>
                                    <div className={`txt-${color}-300 ${classes.colorSquare}`}>300</div>
                                    <div className={`txt-${color}-400 ${classes.colorSquare}`}>400</div>
                                    <div className={`txt-${color}-500 ${classes.colorSquare}`}>500</div>
                                    <div className={`txt-${color}-600 ${classes.colorSquare}`}>600</div>
                                    <div className={`txt-${color}-700 ${classes.colorSquare}`}>700</div>
                                    <div className={`txt-${color}-800 ${classes.colorSquare}`}>800</div>
                                    <div className={`txt-${color}-900 ${classes.colorSquare}`}>900</div>
                                    <div className={`txt-${color}-1000 ${classes.colorSquare}`}>1000</div>
                                </div>
                                {/* Code */}
                                <div>
                                    <HighlightCode code={`<div class="txt-${color}-100">100</div>
<div class="txt-${color}-200">200</div>
<div class="txt-${color}-300">300</div>
<div class="txt-${color}-400">400</div>
<div class="txt-${color}-500">500</div>
<div class="txt-${color}-600">600</div>
<div class="txt-${color}-700">700</div>
<div class="txt-${color}-800">800</div>
<div class="txt-${color}-900">900</div>
<div class="txt-${color}-1000">1000</div>`} translateToReact language="htmlbars" />
                                </div>
                            </div>
                        </>
                    )}
            </section>

            <section className="mtb-60">
                <h2 className="title-section">Example of colors by trend</h2>
                <h3 className="title-section">Default</h3>
                <div className="mb-30 flex flex-row flex-jc-space-between">
                    <div className={`bg-orange ${classes.colorSquare}`}>bg-orange</div>
                    <div className={`bg-blue-light ${classes.colorSquare}`}>bg-blue-light</div>
                    <div className={`bg-brown ${classes.colorSquare}`}>bg-brown</div>
                    <div className={`bg-yellow ${classes.colorSquare}`}>bg-yellow</div>
                    <div className={`bg-blue-dark ${classes.colorSquare}`}>bg-blue-dark</div>
                    <div className={`bg-green-light ${classes.colorSquare}`}>bg-green-light</div>
                    <div className={`bg-orange-light ${classes.colorSquare}`}>bg-orange-light</div>
                    <div className={`bg-green-dark ${classes.colorSquare}`}>bg-green-dark</div>
                    <div className={`bg-purple ${classes.colorSquare}`}>bg-purple</div>
                    <div className={`bg-pink-dark ${classes.colorSquare}`}>bg-pink-dark</div>
                </div>
                <div className="flex flex-row flex-jc-space-between">
                    <div className={`txt-orange ${classes.colorSquare}`}>txt-orange</div>
                    <div className={`txt-blue-light ${classes.colorSquare}`}>txt-blue-light</div>
                    <div className={`txt-brown ${classes.colorSquare}`}>txt-brown</div>
                    <div className={`txt-yellow ${classes.colorSquare}`}>txt-yellow</div>
                    <div className={`txt-blue-dark ${classes.colorSquare}`}>txt-blue-dark</div>
                    <div className={`txt-green-light ${classes.colorSquare}`}>txt-green-light</div>
                    <div className={`txt-orange-light ${classes.colorSquare}`}>txt-orange-light</div>
                    <div className={`txt-green-dark ${classes.colorSquare}`}>txt-green-dark</div>
                    <div className={`txt-purple ${classes.colorSquare}`}>txt-purple</div>
                    <div className={`txt-pink-dark ${classes.colorSquare}`}>txt-pink-dark</div>
                </div>
                <div className="mb-30 grid grid-cols-2 gap-8">
                    <div>
                        {/* Code */}
                        <h3>Code background</h3>
                        <HighlightCode code={`<div class="bg-orange">bg-orange</div>
<div class="bg-blue-light">bg-blue-light</div>
<div class="bg-brown">bg-brown</div>
<div class="bg-yellow">bg-yellow</div>
<div class="bg-blue-dark">bg-blue-dark</div>
<div class="bg-green-light">bg-green-light</div>
<div class="bg-orange-light">bg-orange-light</div>
<div class="bg-green-dark">bg-green-dark</div>
<div class="bg-purple">bg-purple</div>
<div class="bg-pink-dark">bg-pink-dark</div>`} translateToReact language="htmlbars" />
                    </div>
                    <div>
                        {/* Code */}
                        <h3>Code text</h3>
                        <HighlightCode code={`<div class="txt-orange">txt-orange</div>
<div class="txt-blue-light">txt-blue-light</div>
<div class="txt-brown">txt-brown</div>
<div class="txt-yellow">txt-yellow</div>
<div class="txt-blue-dark">txt-blue-dark</div>
<div class="txt-green-light">txt-green-light</div>
<div class="txt-orange-light">txt-orange-light</div>
<div class="txt-green-dark">txt-green-dark</div>
<div class="txt-purple">txt-purple</div>
<div class="txt-pink-dark">txt-pink-dark</div>`} translateToReact language="htmlbars" />
                    </div>
                </div>

                <h3 className="title-section">2021</h3>
                <div className="mb-30 flex flex-row flex-jc-space-between">
                    <div className={`bg-marigold ${classes.colorSquare}`}>bg-marigold</div>
                    <div className={`bg-cerulean ${classes.colorSquare}`}>bg-cerulean</div>
                    <div className={`bg-rust ${classes.colorSquare}`}>bg-rust</div>
                    <div className={`bg-illuminating ${classes.colorSquare}`}>bg-illuminating</div>
                    <div className={`bg-french-blue ${classes.colorSquare}`}>bg-french-blue</div>
                    <div className={`bg-green-ash ${classes.colorSquare}`}>bg-green-ash</div>
                    <div className={`bg-burnt-coral ${classes.colorSquare}`}>bg-burnt-coral</div>
                    <div className={`bg-mint ${classes.colorSquare}`}>bg-mint</div>
                    <div className={`bg-amethyst-orchid ${classes.colorSquare}`}>bg-amethyst-orchid</div>
                    <div className={`bg-raspberry-sorbet ${classes.colorSquare}`}>bg-raspberry-sorbet</div>
                </div>
                <div className="flex flex-row flex-jc-space-between">
                    <div className={`txt-marigold ${classes.colorSquare}`}>txt-marigold</div>
                    <div className={`txt-cerulean ${classes.colorSquare}`}>txt-cerulean</div>
                    <div className={`txt-rust ${classes.colorSquare}`}>txt-rust</div>
                    <div className={`txt-illuminating ${classes.colorSquare}`}>txt-illuminating</div>
                    <div className={`txt-french-blue ${classes.colorSquare}`}>txt-french-blue</div>
                    <div className={`txt-green-ash ${classes.colorSquare}`}>txt-green-ash</div>
                    <div className={`txt-burnt-coral ${classes.colorSquare}`}>txt-burnt-coral</div>
                    <div className={`txt-mint ${classes.colorSquare}`}>txt-mint</div>
                    <div className={`txt-amethyst-orchid ${classes.colorSquare}`}>txt-amethyst-orchid</div>
                    <div className={`txt-raspberry-sorbet ${classes.colorSquare}`}>txt-raspberry-sorbet</div>
                </div>
                <div className="mb-30 grid grid-cols-2 gap-8">
                    <div>
                        {/* Code */}
                        <h3>Code background</h3>
                        <HighlightCode code={`<div class="bg-marigold">bg-marigold</div>
<div class="bg-cerulean">bg-cerulean</div>
<div class="bg-rust">bg-rust</div>
<div class="bg-illuminating">bg-illuminating</div>
<div class="bg-french-blue">bg-french-blue</div>
<div class="bg-green-ash">bg-green-ash</div>
<div class="bg-burnt-coral">bg-burnt-coral</div>
<div class="bg-mint">bg-mint</div>
<div class="bg-amethyst-orchid">bg-amethyst-orchid</div>
<div class="bg-raspberry-sorbet">bg-raspberry-sorbet</div>`} translateToReact language="htmlbars" />
                    </div>
                    <div>
                        {/* Code */}
                        <h3>Code text</h3>
                        <HighlightCode code={`<div class="txt-marigold">txt-marigold</div>
<div class="txt-cerulean">txt-cerulean</div>
<div class="txt-rust">txt-rust</div>
<div class="txt-illuminating">txt-illuminating</div>
<div class="txt-french-blue">txt-french-blue</div>
<div class="txt-green-ash">txt-green-ash</div>
<div class="txt-burnt-coral">txt-burnt-coral</div>
<div class="txt-mint">bg-mint</div>
<div class="txt-amethyst-orchid">txt-amethyst-orchid</div>
<div class="txt-raspberry-sorbet">txt-raspberry-sorbet</div>`} translateToReact language="htmlbars" />
                    </div>
                </div> 

                <h3 className="title-section">2020</h3>
                <div className="mb-30 flex flex-row flex-jc-space-between">
                    <div className={`bg-flame-scarlet ${classes.colorSquare}`}>bg-flame-scarlet</div>
                    <div className={`bg-saffron ${classes.colorSquare}`}>bg-saffron</div>
                    <div className={`bg-biscay-green ${classes.colorSquare}`}>bg-biscay-green</div>
                    <div className={`bg-chive ${classes.colorSquare}`}>bg-chive</div>
                    <div className={`bg-faded-denim ${classes.colorSquare}`}>bg-faded-denim</div>
                    <div className={`bg-orange-peel ${classes.colorSquare}`}>bg-orange-peel</div>
                    <div className={`bg-mosaic-blue ${classes.colorSquare}`}>bg-mosaic-blue</div>
                    <div className={`bg-sunlight ${classes.colorSquare}`}>bg-sunlight</div>
                    <div className={`bg-coral-pink ${classes.colorSquare}`}>bg-coral-pink</div>
                    <div className={`bg-cinnamon-stick ${classes.colorSquare}`}>bg-cinnamon-stick</div>
                    <div className={`bg-grape-compote ${classes.colorSquare}`}>bg-grape-compote</div>
                    <div className={`bg-lark ${classes.colorSquare}`}>bg-lark</div>
                    <div className={`bg-navy-blazer ${classes.colorSquare}`}>bg-navy-blazer</div>
                    <div className={`bg-brilliant-white ${classes.colorSquare}`}>bg-brilliant-white</div>
                    <div className={`bg-ash ${classes.colorSquare}`}>bg-ash</div>
                </div>
                <div className="flex flex-row flex-jc-space-between">
                    <div className={`txt-flame-scarlet ${classes.colorSquare}`}>txt-flame-scarlet</div>
                    <div className={`txt-saffron ${classes.colorSquare}`}>txt-saffron</div>
                    <div className={`txt-biscay-green ${classes.colorSquare}`}>txt-biscay-green</div>
                    <div className={`txt-chive ${classes.colorSquare}`}>txt-chive</div>
                    <div className={`txt-faded-denim ${classes.colorSquare}`}>txt-faded-denim</div>
                    <div className={`txt-orange-peel ${classes.colorSquare}`}>txt-orange-peel</div>
                    <div className={`txt-mosaic-blue ${classes.colorSquare}`}>txt-mosaic-blue</div>
                    <div className={`txt-sunlight ${classes.colorSquare}`}>txt-sunlight</div>
                    <div className={`txt-coral-pink ${classes.colorSquare}`}>txt-coral-pink</div>
                    <div className={`txt-cinnamon-stick ${classes.colorSquare}`}>txt-cinnamon-stick</div>
                    <div className={`txt-grape-compote ${classes.colorSquare}`}>txt-grape-compote</div>
                    <div className={`txt-lark ${classes.colorSquare}`}>txt-lark</div>
                    <div className={`txt-navy-blazer ${classes.colorSquare}`}>txt-navy-blazer</div>
                    <div className={`txt-brilliant-white ${classes.colorSquare}`}>txt-brilliant-white</div>
                    <div className={`txt-ash ${classes.colorSquare}`}>txt-ash</div>
                </div>
                <div className="mb-30 grid grid-cols-2 gap-8">
                    <div>
                        {/* Code */}
                        <h3>Code background</h3>
                        <HighlightCode code={`<div class="bg-flame-scarlet">bg-flame-scarlet</div>
<div class="bg-saffron">bg-saffron</div>
<div class="bg-biscay-green">bg-biscay-green</div>
<div class="bg-chive">bg-chive</div>
<div class="bg-faded-denim">bg-faded-denim</div>
<div class="bg-orange-peel">bg-orange-peel</div>
<div class="bg-mosaic-blue">bg-mosaic-blue</div>
<div class="bg-sunlight">bg-sunlight</div>
<div class="bg-coral-pink">bg-coral-pink</div>
<div class="bg-cinnamon-stick">bg-cinnamon-stick</div>
<div class="bg-grape-compote">bg-grape-compote</div>
<div class="bg-lark">bg-lark</div>
<div class="bg-navy-blazer">bg-navy-blazer</div>
<div class="bg-brilliant-white">bg-brilliant-white</div>
<div class="bg-ash">bg-ash</div>`} translateToReact language="htmlbars" />
                    </div>
                    <div>
                        {/* Code */}
                        <h3>Code text</h3>
                        <HighlightCode code={`<div class="txt-flame-scarlet">bg-flame-scarlet</div>
<div class="txt-saffron">txt-saffron</div>
<div class="txt-biscay-green">txt-biscay-green</div>
<div class="txt-chive">txt-chive</div>
<div class="txt-faded-denim">txt-faded-denim</div>
<div class="txt-orange-peel">txt-orange-peel</div>
<div class="txt-mosaic-blue">txt-mosaic-blue</div>
<div class="txt-sunlight">txt-sunlight</div>
<div class="txt-coral-pink">txt-coral-pink</div>
<div class="txt-cinnamon-stick">txt-cinnamon-stick</div>
<div class="txt-grape-compote">txt-grape-compote</div>
<div class="txt-lark">txt-lark</div>
<div class="txt-navy-blazer">txt-navy-blazer</div>
<div class="txt-brilliant-white">txt-brilliant-white</div>
<div class="txt-ash">txt-ash</div>`} translateToReact language="htmlbars" />
                    </div> 
                </div>

                <h3 className="title-section">2019</h3>
                <div className="mb-30 flex flex-row flex-jc-space-between">
                    <div className={`bg-fiesta ${classes.colorSquare}`}>bg-fiesta</div>
                    <div className={`bg-jester-red ${classes.colorSquare}`}>bg-jester-red</div>
                    <div className={`bg-turmeric ${classes.colorSquare}`}>bg-turmeric</div>
                    <div className={`bg-living-coral ${classes.colorSquare}`}>bg-living-coral</div>
                    <div className={`bg-pink-peacock ${classes.colorSquare}`}>bg-pink-peacock</div>
                    <div className={`bg-pepper-stem ${classes.colorSquare}`}>bg-pepper-stem</div>
                    <div className={`bg-aspen-gold ${classes.colorSquare}`}>bg-aspen-gold</div>
                    <div className={`bg-princess-blue ${classes.colorSquare}`}>bg-princess-blue</div>
                    <div className={`bg-toffee ${classes.colorSquare}`}>bg-toffee</div>
                    <div className={`bg-mango-mojito ${classes.colorSquare}`}>bg-mango-mojito</div>
                    <div className={`bg-terrarium-moss ${classes.colorSquare}`}>bg-terrarium-moss</div>
                    <div className={`bg-sweet-lilac ${classes.colorSquare}`}>bg-sweet-lilac</div>
                    <div className={`bg-soybean ${classes.colorSquare}`}>bg-soybean</div>
                    <div className={`bg-eclipse ${classes.colorSquare}`}>bg-eclipse</div>
                    <div className={`bg-sweet-corn ${classes.colorSquare}`}>bg-sweet-corn</div>
                </div>
                <div className="flex flex-row flex-jc-space-between">
                    <div className={`txt-fiesta ${classes.colorSquare}`}>txt-fiesta</div>
                    <div className={`txt-jester-red ${classes.colorSquare}`}>txt-jester-red</div>
                    <div className={`txt-turmeric ${classes.colorSquare}`}>txt-turmeric</div>
                    <div className={`txt-living-coral ${classes.colorSquare}`}>txt-living-coral</div>
                    <div className={`txt-pink-peacock ${classes.colorSquare}`}>txt-pink-peacock</div>
                    <div className={`txt-pepper-stem ${classes.colorSquare}`}>txt-pepper-stem</div>
                    <div className={`txt-aspen-gold ${classes.colorSquare}`}>txt-aspen-gold</div>
                    <div className={`txt-princess-blue ${classes.colorSquare}`}>txt-princess-blue</div>
                    <div className={`txt-toffee ${classes.colorSquare}`}>txt-toffee</div>
                    <div className={`txt-mango-mojito ${classes.colorSquare}`}>txt-mango-mojito</div>
                    <div className={`txt-terrarium-moss ${classes.colorSquare}`}>txt-terrarium-moss</div>
                    <div className={`txt-sweet-lilac ${classes.colorSquare}`}>txt-sweet-lilac</div>
                    <div className={`txt-soybean ${classes.colorSquare}`}>txt-soybean</div>
                    <div className={`txt-eclipse ${classes.colorSquare}`}>txt-eclipse</div>
                    <div className={`txt-sweet-corn ${classes.colorSquare}`}>txt-sweet-corn</div>
                </div>
                <div className="mb-30 grid grid-cols-2 gap-8">
                    <div>
                        {/* Code */}
                        <h3>Code background</h3>
                        <HighlightCode code={`<div class="bg-fiesta">bg-fiesta</div>
<div class="bg-jester-red">bg-jester-red</div>
<div class="bg-turmeric">bg-turmeric</div>
<div class="bg-living-coral">bg-living-coral</div>
<div class="bg-pink-peacock">bg-pink-peacock</div>
<div class="bg-pepper-stem">bg-pepper-stem</div>
<div class="bg-aspen-gold">bg-aspen-gold</div>
<div class="bg-princess-blue">bg-princess-blue</div>
<div class="bg-toffee">bg-toffee</div>
<div class="bg-mango-mojito">bg-mango-mojito</div>
<div class="bg-terrarium-moss">bg-terrarium-moss</div>
<div class="bg-sweet-lilac">bg-sweet-lilac</div>
<div class="bg-soybean">bg-soybean</div>
<div class="bg-eclipse">bg-eclipse</div>
<div class="bg-sweet-corn">bg-sweet-corn</div>`} translateToReact language="htmlbars" />
                    </div>
                    <div>
                        {/* Code */}
                        <h3>Code text</h3>
                        <HighlightCode code={`<div class="txt-fiesta">txt-fiesta</div>
<div class="txt-jester-red">txt-jester-red</div>
<div class="txt-turmeric">txt-turmeric</div>
<div class="txt-living-coral">txt-living-coral</div>
<div class="txt-pink-peacock">txt-pink-peacock</div>
<div class="txt-pepper-stem">txt-pepper-stem</div>
<div class="txt-aspen-gold">txt-aspen-gold</div>
<div class="txt-princess-blue">txt-princess-blue</div>
<div class="txt-toffee">txt-toffee</div>
<div class="txt-mango-mojito">txt-mango-mojito</div>
<div class="txt-terrarium-moss">txt-terrarium-moss</div>
<div class="txt-sweet-lilac">txt-sweet-lilac</div>
<div class="txt-soybean">txt-soybean</div>
<div class="txt-eclipse">txt-eclipse</div>
<div class="txt-sweet-corn">txt-sweet-corn</div>`} translateToReact language="htmlbars" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ColorsPage;