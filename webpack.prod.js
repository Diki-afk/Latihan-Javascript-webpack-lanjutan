const merge = require("webpack-merge");
const common = require("./webpack.common");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = merge(common, {
    mode: "production",
    optimization:{
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins:[
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: "/node_module/",
                use: [
                    {
                        loader: "babel-loader",
                        options:{
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    }
})