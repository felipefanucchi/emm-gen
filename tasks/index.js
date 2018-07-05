import gulp from 'gulp'
import images from './commom/images'
import webpack from './commom/webpack'
import styles from './commom/styles'

const dev = gulp.series(styles)

export default dev
