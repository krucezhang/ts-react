const { resolve } = require('./../utils');
const TsImportPlugin = require('ts-import-plugin');

module.exports = [
    {
        test: /\.ts(x?)$/,
        use: [{
            loader: 'awesome-typescript-loader',
            options: {
                useCache: true,
                cacheDirectory: resolve('.cache-loader')
            }
        }]
    }
]