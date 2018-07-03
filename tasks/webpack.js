import path from 'path'
import webpack from 'webpack'

let config = {
  entry: ['./index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  context: path.resolve(__dirname, '../src/js')
}

export const scripts = function scripts() {
  return new Promise(resolve => webpack(config, (err, status) => {
    if(err) console.log('Error in Webpack', err)
    resolve()
  })).then(res => console.log('Scripts Compilados!'))
}

