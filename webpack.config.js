var path = require('path');

module.exports = {

    entry: "./client/scripts/index.js",
    output: {
      path: __dirname + "/public/assets/",
      filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'client'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
