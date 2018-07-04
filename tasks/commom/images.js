import gulp from 'gulp'
import imagemin from 'imagemin'
import config from '../config.json'

export default gulp.task('images', e =>
  gulp
    .src(`../${config.paths.src}/images/`)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        { removeViewBox: false },
        { cleanupIDs: false },
      ],
      optimizationLevel: 5
    }))
    .pipe(gulp.dest(`../${config.paths.dist}/images/))
);
