let gulp = require('gulp');
let browserSync = require('browser-sync').create();


gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: 'Introduction/hooks'
        }
    })

    gulp.watch("./**/*.*").on("change", browserSync.reload);
});