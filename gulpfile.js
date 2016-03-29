var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
 
gulp.task('cleanBuild', function () {
  return gulp.src('./app/js/build/*.js', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('cleanIndex', function () {
  return gulp.src('./app/index.js', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('jsx', function(){
   return gulp.src(['./app/js/components/*.jsx'])
            .pipe(react())
            .pipe(gulp.dest('./app/js/build'));
});

gulp.task('browserify', function(){
      return gulp.src('./app/js/build/index.js')
            .pipe(browserify())
            .pipe(gulp.dest('./app'));
});
gulp.task('clean', ['cleanBuild', 'cleanIndex']);
gulp.task('build', ['jsx', 'browserify']);
gulp.task('default', ['build']);