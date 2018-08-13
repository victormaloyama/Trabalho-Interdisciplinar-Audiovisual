/* Licenced by Victor Silva Maloyama | 2018 */
var gulp = require('gulp')
    ,imagemin = require('gulp-imagemin')
    ,clean = require('gulp-clean')
    ,usemin = require('gulp-usemin')
    ,uglify = require('gulp-uglify')
    ,cssmin = require('gulp-cssmin');

    //COMMAND: npm run gulp server.
    gulp.task('default', ['copy'], function(){
        //Single action.
        gulp.start('compress-img', 'usemin');
    });

    //Copying dist folder.
    gulp.task('copy', ['clean'], function(){
        //Making a copy and leaving the original files as backups.
        return gulp.src('www/**/*')
            .pipe(gulp.dest('dist')); 
      });

    //Deleting dist folder.
    gulp.task('clean', function(){
        return gulp.src('dist')
            .pipe(clean());
    });
    
    //Image compressor.
    gulp.task('compress-img', function() {
        gulp.src('dist/img/**/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img'));
    });

    //js and CSS compressor.
    gulp.task('usemin', function(){
        gulp.src('dist/**/*.html')
            .pipe(usemin({
                js: [uglify],
                css: [cssmin]
            }))
            .pipe(gulp.dest('dist'));
    });