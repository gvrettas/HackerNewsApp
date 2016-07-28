var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-ruby-sass');
var reload = browserSync.reload;

gulp.task('sass', function() {
    return sass('app/styles/styles.scss')
    .pipe(gulp.dest('app/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('serve', ['sass'], function() {
    var options = {
        server: {
            baseDir: 'app'
        },
        open: 'external'
    };

    browserSync(options);

    gulp.watch('app/styles/*.scss', ['sass']);
    gulp.watch("app/**/*.html").on('change', reload);
    gulp.watch("app/**/*.js").on('change', reload);
});