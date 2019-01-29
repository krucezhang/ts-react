const { resolve } = require('./../utils');


module.exports = [
    {
        test: /\.scss$/,
        //Compile only for .scss files in the src directory
        include: [ resolve('src') ],
        use: [
            'style-loader',
            {
                //construct cache
                loader: 'cache-loader',
                options: {
                    cacheDirectory: resolve('.cache-loader')
                }
            },
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    includePaths: [ resolve('src/styles') ]
                }
            }
        ]
    }
]