const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// Define paths
const paths = {
  styles: {
    src: 'dev/scss/styles.scss',
    dest: 'dist/css/'
  }
};

// Task to compile SCSS to CSS
function compileStyles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.styles.dest));
}

// Watch task to track changes in SCSS files
function watch() {
  gulp.watch(paths.styles.src, compileStyles);
}

// Create a named task for the watch function
gulp.task('watch', watch);

// Default task
exports.default = watch;