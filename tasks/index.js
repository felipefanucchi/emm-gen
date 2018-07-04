import gulp from 'gulp'
import { scripts } from './commom/webpack'

export const dev = gulp.series(scripts)

export default dev
