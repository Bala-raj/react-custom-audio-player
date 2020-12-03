import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
const packageJson = require('./package.json');


export default () => ({
    entry: {
        index: path.join(__dirname, 'src/index.js'),
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: packageJson.name,
        libraryTarget: 'umd',
    },

    module: {
        rules: [{
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            ['es2015', { modules: false }],
                            'react',
                        ],
                    }
                }]
            }
        ]
    },

    plugins: [
        // Clean dist folder
        new CleanWebpackPlugin(['dist/*.*']),

    ]
});