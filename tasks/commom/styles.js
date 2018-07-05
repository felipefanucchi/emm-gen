import gulp from 'gulp'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import mqpacker from 'css-mqpacker'
import autoprefixer from 'autoprefixer'
import assets from 'postcss-assets'
import cssnano from 'cssnano'
import sourcemaps from 'gulp-sourcemaps'

import config from '../config.json'

const isProd = config.env === 'development' ? false : true

const src = config.paths.src
const dist = config.paths.dist

const assetsOptions = {
  relative: true,
  basePath: 'dist/',
  loadPaths: ['images','fonts'],
  cachebuster: true
}

const autoprefixerOptions = {
  browsers: ['last 2 versions', '> 2%'],
  cascade: false
}

const postCssPlugins = [
  assets(assetsOptions),
  autoprefixer(autoprefixerOptions)
]

const sassOptions = {
  imagePath: 'images/',
  precision: 3,
  errorLogToConsole: true,
  sourceMap: true
}

if (isProd) {
  postCssPlugins.push(mqpacker,cssnano)
}

const styles = () =>
  gulp
    .src(`../${src}main.scss`, {allowEmpty: true})
    .pipe(gulpif(
      !isProd, sourcemaps.init()
    ))
    .pipe(sass(sassOptions))
    .pipe(postcss(postCssPlugins))
    .pipe(gulpif(
      !isProd, sourcemaps.write()
    ))
    .pipe(gulp.dest(`${dist}css/`))

export default styles
