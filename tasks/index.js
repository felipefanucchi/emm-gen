import gulp from 'gulp'
import { scripts } from './webpack'
import images from './images'

console.log(images);

export const dev = gulp.series(scripts)

export default dev
