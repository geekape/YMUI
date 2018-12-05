var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function() {
    return gulp.src('./style/ymui.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./example'));
});

gulp.task('watch', function() {
    gulp.watch('./style/**/*.scss', ['sass']);
});