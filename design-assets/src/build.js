const fs = require("fs");
const assetModulesFolders = ['icons'];
const {svgToJS} = require("./utils/svgToJS");

assetModulesFolders.forEach(asset => {
  const options = {
    inputDir: `src/assets/${asset}`,
    outputDir: `dist/assets/${asset}`
  }

  svgToJS(options);
})