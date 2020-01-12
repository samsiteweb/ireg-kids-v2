const { override, fixBabelImports } = require("customize-cra");
// const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);
