// module.exports = async ({ config }) => console.dir(config.plugins, { depth: null }) || config;
const path = require('path');


module.exports = {
  module: {
    rules: [
      {
        // look for .scss files
        test: /\.(css|sass|scss)$/,
        // in the `src` directory
        include: path.resolve(__dirname, '../'),
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        //Font loader
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ],
  },
};
