const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
    return {
        mode: 'development',
        entry: './src/index.tsx',
        output: {
            filename: 'bundle.js',
        },
        devtool: 'source-map',
        target: 'web',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: ['ts-loader'],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: {
                        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
                    },
                },
                {
                    test: /\.(ttf|eot|jpg|jpeg|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    use: {
                        loader: 'file-loader',
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx', '.scss', '.json', '.tsx', '.ts'],
        },
        plugins: [
            new Dotenv(),
            new HTMLWebpackPlugin({
                inject: true,
                template: './public/index.html',
                favicon: './public/favicon.ico',
                meta: [
                    { charset: 'UTF-8' },
                    { viewport: 'width=500, initial-scale=1' },
                    { name: 'description', content: 'NPM Package' },
                ],
                xhtml: true,
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
                'process.env.VERSION': JSON.stringify(
                    process.env.npm_package_version
                ),
            }),
        ],
        watchOptions: {
            poll: 1000,
            ignored: '/node_modules/',
        },
        devServer: {
            historyApiFallback: true,
            compress: true,
            port: env.PORT,
            open: true,
        },
    }
}
