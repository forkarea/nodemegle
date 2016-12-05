var path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, 'client', 'src', 'scripts', 'app.js')
    ],
    output: {
        path: path.join(__dirname, 'client', 'public', 'bundle'),
        filename: 'bundle.js',
        publicPath: './bundle/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.(png|jpg|jpeg|gif|svg|eot|woff|woff2|ttf)$/, loader: 'url-loader?limit=8192'},
            {test: /\.vue$/, loader: 'vue'},
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    externals: {
        jquery: 'jQuery'
    },
    devtool: "#inline-source-map"
};
