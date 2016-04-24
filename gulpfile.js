var gulp = require('gulp'),
    less = require('gulp-less');

var directories = {
  src: __dirname + '/src',
  public: __dirname + '/public'
};

var files = {
  less: [
    directories.src + '/less/**/*.less'
  ],

  html: [
    directories.src + '/**/*.html'
  ],
};

gulp.task('html', function() {
  gulp.src(files.html)
    .pipe(gulp.dest(directories.public));
});

gulp.task('less', function() {
  gulp.src(files.less)
    .pipe(less())
    .pipe(gulp.dest(directories.public + '/css'));
});


gulp.task('default', ['html', 'less']);

//Task watch
gulp.task('watch', function() {
    gulp.watch(files.less.concat(directories.src + '/less/**/*.less'), ['styles:app:less']);
    gulp.watch(files.html, ['html']);

    gulp.watch(__dirname + '/gulpfile.js', ['build']);
});
