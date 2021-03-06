var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var PageSrc =  path.join(__dirname, 'pages')

var pages = [
  { name: 'home'},
  { name: 'login'}
]
var config = {
  devtool: '#inline-source-map',
  entry: {},
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: './',
    filename: "[name].js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.css']
  },
  module: {
    loaders: [
      { test: /(\.css$)/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.js?$/, loader: 'babel', include: path.join(__dirname) },
      {
        test: /\.woff$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
      }, {
        test: /\.woff2$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
      }, {
        test: /\.(eot|ttf|svg|gif|png)$/,
        loader: "file-loader"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
}

pages.forEach(page => {
  const { name } = page;
  config.entry[name] = `./pages/${name}.js`
  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: false,
      chunks: [name],
      filename: `${name}.html`
    })
  )
})

module.exports = config
