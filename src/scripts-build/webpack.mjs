import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import path from 'path'

function getCompiler () {
  const config = {
    entry: path.resolve('src/scripts-browser/initialise-dom.mjs'),
    mode: 'none',
    stats: 'minimal',
    output: {
      path: path.resolve('dist/scripts'),
      filename: 'bundle.min.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    resolve: {
      alias: {
        node_modules: path.resolve('node_modules')
      }
    }
  }
  return webpack(config)
}

export async function runWebpack () {
  const compiler = getCompiler()
  console.log('Webpack attempting to compile')
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err)
      console.log('Webpack compiled successfully')
      resolve()
    })
  })
}
