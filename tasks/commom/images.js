import gulp from 'gulp'
import imagemin from 'imagemin'
import config from '../config.json'

const src = config.paths.src;
const dest = config.paths.dist;

export const images = e =>
  gulp
    .src(`../${src}/images/`)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        { removeViewBox: false },
        { cleanupIDs: false },
      ],
      optimizationLevel: 5
    }))
    .pipe(gulp.dest(`../${dest}/images/`))

export default images;
