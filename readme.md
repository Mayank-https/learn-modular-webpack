[Check out Website]()

This website demonstrates using webpack plugins to create a simple site using the modular pattern approach.

__Modular pattern__ is an approach where self contained pieces of codes encapsulate related functionality together. In simple terms, code and assets that are closely associated live together in seperate modules.

If you are a beginner and didn't understand anything, just know that you create separate subfolders for each web component (for e.g. in this website - a section) and then put .html, .css, images, fonts, etc. in that subfolder that will be used by component. Webpack automatically bundles all modules into single files.

Check `package.json` to see what plugins are required (see `devDependencies`). Check sections subfolder to see how modules were grouped and code was structured.