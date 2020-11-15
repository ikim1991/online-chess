const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    
    output:{
        path: path.resolve(__dirname, "build"),
        filename: 'main-[fullhash].js'
    },
    resolve:{
        extensions: ['.ts', '.tsx', '.js', 'jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /nodule_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].ext',
                        outputPath: 'assets'
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        watchContentBase: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            favicon: './public/assets/favicon.png'
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[fullhash].css'
        }            
        ),
        new webpack.DefinePlugin({
            "process.env":{
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new CleanWebpackPlugin.CleanWebpackPlugin()
    ]
}