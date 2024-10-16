window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.querySelector(selector);
        if (element) {
            element.innerText = text;
        }
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`#${type}-version`, process.versions[type]);

    }

});
