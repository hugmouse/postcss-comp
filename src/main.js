import compileCSS from './postcssCompiler.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('compile-button').addEventListener('click', async () => {
        const inputCSS = document.getElementById('input-css').value;
        const outputElement = document.getElementById('output-css');
        try {
            outputElement.value = await compileCSS(inputCSS);
        } catch (error) {
            console.error(error);
        }
    });
});
