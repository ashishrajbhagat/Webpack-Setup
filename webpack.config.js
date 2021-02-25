const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src", "javascript", "index.js"),
        // example: path.resolve(__dirname, "src", "javascript", "example.js")
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '',
        filename: 'bundle.js'
        // filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: ''
                            }
                        },
                        {
                            loader: "css-loader",
                        },
                        {
                            loader: "postcss-loader"
                        },
                        {
                            loader: "sass-loader",
                            options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                       {
                        loader: "file-loader",
                        options: {
                            name:'[name].[ext]',
                            outputPath: 'images'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                       {
                        loader: "file-loader",
                        options: {
                           outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new HtmlWebpackPlugin({
            filename: 'example.html',
            template: path.resolve(__dirname, "src", "example.html")
          }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],

    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000,
    // },

    mode: 'development',
    watch: true
};