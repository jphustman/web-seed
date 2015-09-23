var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browsersync  = require('browser-sync');
var sass         = require('gulp-sass');
var gulpFilter   = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function() {
  var sassConfig = config.sass.options,
      sassQueue;

  sassConfig.onError = browsersync.notify;

  function reportFinished() {
      if (sassQueue) {
          sassQueue--;
          if (sassQueue === 0) {
              callback();
          }
      }
  }

  function sassCompile (filename) {
    .pipe(sass(sassConfig))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixer))
    //.pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write('.', { includeContent: false }))
    //.pipe(filter.restore()) // Restore original files
    .pipe(gulp.dest(config.sass.dest));
});
