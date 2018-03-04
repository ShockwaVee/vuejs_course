let gulp = require('gulp');
let browserSync = require('browser-sync').create();


gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: 'Applications/Notemaster'
        }
    })

    gulp.watch("./Applications/Notemaster/*.*").on("change", browserSync.reload);
});