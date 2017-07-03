var gulp = require('gulp');
var config = {
  source: './src/',
  dist: './public'
};

var paths = {
  html: "**/*.html",
};

var sources = {
  html: config.source + paths.html,
};

gulp.task('html', () => {
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});
