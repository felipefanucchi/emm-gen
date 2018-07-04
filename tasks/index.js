import gulp from 'gulp'
import images from './commom/images'
import webpack from './commom/webpack'

const dev = gulp.parallel(images, webpack)

export default dev
