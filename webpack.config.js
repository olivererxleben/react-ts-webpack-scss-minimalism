const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/app.tsx',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        rules: [{
            loader: 'ts-loader',
            test: /\.ts?x$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}
