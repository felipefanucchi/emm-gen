import gulp from 'gulp'
import images from './commom/images'
import webpack from './commom/webpack'

const dev = gulp.series(webpack)

export default dev
