var path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, 'client', 'src', 'scripts', 'app.js')
    ],
    output: {
        path: path.join(__dirname, 'client', 'public'),
        filename: 'bundle.js',
        publicPath: './'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.(png|jpg|jpeg|gif|svg|eot|woff|woff2|ttf)$/, loader: 'url-loader?limit=2048'},
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    devtool: "#inline-source-map"
};
