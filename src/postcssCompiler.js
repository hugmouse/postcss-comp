import postcss from "postcss";

async function compileCSS(inputCSS) {
    const plugins = [];

    if (document.getElementById('use-autoprefixer').checked) {
        const { default: autoprefixer } = await import('autoprefixer');
        plugins.push(autoprefixer({ overrideBrowserslist: ['> 0.01%', 'ie 11'] }));
    }

    if (document.getElementById('use-preset-env').checked) {
        const { default: postcssPresetEnv } = await import('postcss-preset-env');
        plugins.push(postcssPresetEnv({ browsers: ['> 0.01%', 'ie 11'], features: { 'custom-properties': true } }));
    }

    try {
        const processor = postcss(plugins);
        const result = await processor.process(inputCSS);
        return result.css;
    } catch (error) {
        console.error('PostCSS Compilation Error:', error);
        throw error;
    }
}

export default compileCSS;
