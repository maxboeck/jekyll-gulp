'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import childProcess from 'child_process';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

// Builds Jekyll site
gulp.task('jekyll', done => {
  return childProcess.spawn('jekyll', ['build'], {stdio: 'inherit'})
  .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
  .on('close', done);
});

// First runs jekyll build task, then reloads browser
gulp.task('jekyll:reload', ['jekyll'], () => { reload(); });

// Runs jekyll build for 'production' environment
gulp.task('jekyll:prod', done => {
  var productionEnv = process.env;
      productionEnv.JEKYLL_ENV = 'production';

  return childProcess.spawn('jekyll', ['build'], {stdio: 'inherit' , env: productionEnv})
  .on('close', done);
});