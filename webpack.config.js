const path = require('path')

module.exports = function (env, argv) {
    let devtool

    if (argv.mode === 'development') {
        devtool = 'sourcemap'
    }

    return {
        output: {
            path: path.resolve(__dirname, 'lib'),
            filename: `react-i18n.js`,
            library: 'reactI18n',
            libraryTarget: 'commonjs2'
        },
        devtool: devtool,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                }
            ]
        },
        externals: [
            'object-path',
            'prop-types',
            'react'
        ]
    }
}
