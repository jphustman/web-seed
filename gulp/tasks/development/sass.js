var gulp         = require('gulp');
var browsersync  = require('browser-sync');
var glob = require('glob');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../config');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
<<<<<<< HEAD
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
=======
gulp.task('sass', function(callback) {
  var sassConfig = config.sass.options;
  sassConfig.onError = browsersync.notify;

  browsersync.notify('Compiling Sass');

  gulp(config.sass.src, function (er, files) {
      sassQueue = files.length;
      files.forEach(sassCompile);
  });

  function reportFinished () {
      if (sassQueue) {
          sassQueue--;
          if (sassQueue === 0) {
              // If queue is empty, tell gulp the task is complete.
              // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
              callback();
          }
      }
  }

  function sassCompile (filename) {
      sass(filename, sassConfig)
>>>>>>> 4ce6fbd2d2482870d8e886626d3c626db530c5b6
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.write('.', { includeContent: false }))
    .pipe(gulp.dest(config.sass.dest))
    .on('finish', reportFinished);
  }
});
