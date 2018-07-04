import path from 'path'
import webpack from 'webpack'
import config from '../config.json'

// You may want to change the MODE property when deploy your application


let webpackConfig = {
  mode: 'development',
  entry: config.entryFiles,
  output: {
    path: path.resolve(__dirname, config.paths.dist),
    filename: 'bundle.js'
  },
  context: path.resolve(__dirname, `../${config.paths.src}/js/`)
}

export const scripts = function() {
  return new Promise(resolve => webpack(webpackConfig, (err, status) => {
    try{
      console.log(status.toString());
      resolve()
    } catch(err) {
      console.log('Error in Webpack', err)
    }
  })).then(res => console.log('Scripts Compilados'))
}

