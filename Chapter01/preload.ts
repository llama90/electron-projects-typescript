// 1. import electron objects from electron module
window.addEventListener("DOMContentLoaded", () => {
    // 2. declare a variable to hold the main window
    const replaceText = (selector: string, text: string | undefined) => {
        const element = document.getElementById(selector);
        if (element) {
            if (typeof text === "string") {
                element.innerText = text;
            }
        }
    }

    // 3. create a function to create the main window
    for (const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, process.versions[type]);
    }
});
