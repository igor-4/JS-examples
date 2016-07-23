var gulp        = require('gulp');
var browserSync = require('browser-sync');

var basedir = 'multiplication_table(v 2)/';

gulp.task('server', function () {  
	browserSync({
		port: 9000,
		server: {
			baseDir: basedir
		}
	});
});

// Слежка
gulp.task('watch', function () {
	gulp.watch([
		basedir+'/*.html',
		basedir+'/*.js',
		basedir+'/*.css'
	]).on('change', browserSync.reload);
});

// Задача по-умолчанию
gulp.task('default', ['server', 'watch']);