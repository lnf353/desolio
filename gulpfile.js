// npm init
// npm install gulp
// export PATH=./node_modules/.bin:../node_modules/.bin:../../node_modules/bin:$PATH
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    csso = require('gulp-csso');

gulp.task('ss', function() {
    return gulp.src('sass/import.scss') 
	.pipe(sass())
	.pipe(csso())
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('bs', function(){

    browserSync.init( { server: { baseDir: './' }
			
		      });

});

gulp.task('default',['bs', 'ss'], function() {
    gulp.watch('sass/**/**/*.scss', ['ss']);

});


