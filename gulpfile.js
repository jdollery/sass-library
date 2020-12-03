const gulp = require('gulp');
const sass = require('gulp-sass');
// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');


const paths = {
  styles: {
    src: './src/scss/**/*.scss',
    dest: './dist'
  },
  // scripts: {
  //   src: [
  //     './base/assets/js/jquery.js',
  //     './base/assets/js/navigation.js',
  //     './base/assets/js/validate.js',
  //     './base/assets/js/script.js'
  //   ],
  //   dest: './base'
  // }
};

	
function css() {
  return gulp
  .src(paths.styles.src)
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(gulp.dest(paths.styles.dest))
}

exports.css = css;


// function js() {
//   return gulp
//   .src(paths.scripts.src)
//   .pipe(concat('script.js'))
//   .pipe(uglify())
//   .pipe(gulp.dest(paths.scripts.dest))
// }

// exports.js = js;


function watch() {
  gulp.watch(paths.styles.src, css);
  // gulp.watch(paths.scripts.src, js);
}
	
exports.watch = watch;