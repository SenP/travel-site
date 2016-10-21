var gulp = require('gulp'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync').create();

gulp.task("previewDist", function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'docs'
		}
	});
});

gulp.task('deleteDist', ['icons'], function() {
	return del('./docs');
});

gulp.task('optimizeImages', ['deleteDist'], function() {
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons',
			'!./app/assets/images/icons/**/*'
		])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTaskTrigger', ['deleteDist'], function() {
	gulp.start('useminTask');
});


gulp.task('useminTask', ['styles', 'scripts'], function() {
	return gulp.src('./app/index.html')
		.pipe(usemin({
			css: [rev, cssnano],
			js: [rev, uglify]
		}))
		.pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDist', 'optimizeImages', 'useminTaskTrigger']);