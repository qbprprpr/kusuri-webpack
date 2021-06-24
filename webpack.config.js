const path = require('path');
// html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 将css放到header头部，link接收
const MiniCssExtraPlugin = require('mini-css-extract-plugin');
// 压缩css
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        utils: './src/js/utils.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html', // 相对路径
            title: 'KUSURI'
        }),
        new MiniCssExtraPlugin({
            filename: 'css/[name].css'
        }),
        new CssMinimizerWebpackPlugin(),
    ],
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // 每次构建前清理 /dist 文件夹
    },
    mode: 'development',
    module: {
        rules: [
            // {
            //     test: /\.(c|le)ss$/,
            //     use: [
            //         'less-loader',
            //         'postcss-loader',
            //         {
            //             loader: MiniCssExtraPlugin.loader,
            //             options: {
            //                 publicPath: '../'
            //             }
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 esModule: false,
            //                 importLoaders: 1
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtraPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtraPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        esModule: false
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/',
                            // publicPath: './images',
                            esModule: false
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 6291456,
                        },
                    },
                ],
            },
        ],
    },
};