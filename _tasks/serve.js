'use strict';

import gulp from 'gulp';

gulp.task('serve', ['browser-sync'], () => {
  //asset pipeline
  gulp.watch(['assets/sass/**/*.scss'], ['sass']);
  gulp.watch(['assets/js/**/*.js'], ['scripts']);
  gulp.watch(['assets/images/**/*'], ['imagemin']);
  gulp.watch(['assets/icons/**/*.svg'], ['icons']);

  //jekyll
  gulp.watch(['*.html', '_layouts/**/*', '_includes/**/*', '_posts/**/*', '_projects/**/*'], ['jekyll:reload']);
});

gulp.task('default', ['serve']);