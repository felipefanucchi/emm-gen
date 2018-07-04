import path from 'path'
import webpack from 'webpack'
import config from '../config.json'

// You may want to change the MODE property when deploy your application
const src = config.paths.src;
const dest = config.paths.dist;

let webpackConfig = {
  mode: config.env,
  entry: config.entryFiles,
  output: {
    path: path.resolve(__dirname, `../${dest}`),
    filename: 'bundle.js'
  },
  context: path.resolve(__dirname, `../${src}/js/`)
}

const scripts = function() {
  return new Promise((resolve, reject) => {
    try{
      webpack(webpackConfig, (err, stats) => {
        console.log(stats.toString())
        resolve()
      })
    } catch(e) {
      reject('Has ocurred an error on WEBPACK async task')
    }
  })
}

export default scripts

