var path = require('path')
var config = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            process: 'process/browser',
        },
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
        'react-router': {
            root: 'ReactRouter',
            commonjs2: 'react-router',
            commonjs: 'react-router',
            amd: 'react-router',
        },
        'react-router-dom': {
            root: 'ReactRouterDOM',
            commonjs2: 'react-router-dom',
            commonjs: 'react-router-dom',
            amd: 'react-router-dom',
        },
    },
    optimization: {
        minimize: true,
    },
}

var mainConfig = Object.assign({}, config, {
    name: 'a',
    entry: './src/Package.ts',
    output: {
        path: path.resolve('lib'),
        filename: 'Package.js',
        libraryTarget: 'commonjs2',
    },
})
var reducersConfig = Object.assign({}, config, {
    name: 'b',
    entry: {
        themeReducer: './src/features/theme/reducers/changeThemeReducer.ts',
    },
    output: {
        path: path.resolve('lib/reducers'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
    },
})

var sliceConfig = Object.assign({}, config, {
    name: 'c',
    entry: {
        theme: './src/features/theme/theme.slice.ts',
    },
    output: {
        path: path.resolve('lib/features'),
        filename: '[name].slice.js',
        libraryTarget: 'commonjs2',
    },
})

module.exports = [mainConfig, reducersConfig, sliceConfig]
