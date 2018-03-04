let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let less = require('gulp-less');

gulp.task('less', function(){
    return gulp.src('./Applications/Notemaster/style.less')
    .pipe(less())
    .pipe(gulp.dest('./Applications/Notemaster'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: 'Applications/Notemaster'
        }
    })
    gulp.watch("./Applications/Notemaster/*.less", ['less']);
    gulp.watch("./Applications/Notemaster/*.index").on("change", browserSync.reload);
});