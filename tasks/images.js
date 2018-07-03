import gulp from 'gulp'
import imagemin from 'imagemin'
import { src, dist } from './path'

export default 'teste'

gulp.task('images', e =>
  gulp
    .src(`${src}/images/`)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        { removeViewBox: false },
        { cleanupIDs: false },
      ],
      optimizationLevel: 5
    }))
    .pipe(gulp.dest(`${dist}/images/`))
);
