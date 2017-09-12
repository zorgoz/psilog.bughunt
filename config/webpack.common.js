var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'vendor': './src/vendor.js',
    'app': './src/main.js'
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [
      { 
        test: /bootstrap\/dist\/js\/umd\//, 
        use: 'imports?jQuery=jquery' 
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        use: 'riot-tag-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
      }
    ]
  },

  plugins: [
    
    new webpack.optimize.OccurrenceOrderPlugin(),
	
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    }),

    new HtmlWebpackPlugin({
      template: 'src/app/index.html'
    }),

    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        riot: 'riot',
        rr: 'riot-route',
        Popper: ['popper.js', 'default']
    })
  ]
};

