const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules:[
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.htm",
            filename: "index.html"
        })
    ]
}