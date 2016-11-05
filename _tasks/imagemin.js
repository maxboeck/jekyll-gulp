'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

// Optimise images + copy any other assets
gulp.task('imagemin', () => {
  return gulp.src('assets/images/**/*')
    .pipe($.imagemin())
    .pipe(gulp.dest('_site/assets/images'));
});