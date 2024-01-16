const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (env, argv) => {
  return {
    mode: argv.mode === "development" ? "development" : "production",
    devtool: argv.mode === "development" ? "cheap-module-source-map" : "source-map",
    entry: {
      background: "./src/background/index.ts",
      content: "./src/content/index.ts",
      // popup: "./src/popup/index.ts",
      popup: "./src/client/index.tsx",
      utils: "./src/utils/index.ts",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "~/": "./src",
      },
      plugins: [new TsconfigPathsPlugin()],
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
  };
};
