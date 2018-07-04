import gulp from 'gulp'
import minify from 'gulp-imagemin'
import newer from 'gulp-newer'
import config from '../config.json'

const src = config.paths.src;
const dest = config.paths.dist;

const images = e =>
  gulp
    .src(`${src}images/`, { allowEmpty: true })
    .pipe(newer(`${dest}images/`))
    .pipe(minify({
      progressive: true,
      svgoPlugins: [
        { removeViewBox: false },
        { cleanupIDs: false },
      ],
      optimizationLevel: 5
    }))
    .pipe(gulp.dest(`dist/images/`))

export default images;
