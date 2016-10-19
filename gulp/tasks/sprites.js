var gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	rename = require('gulp-rename'),
	del = require('del'),
	svg2png = require('gulp-svg2png');

var config = {
	shape: {
		spacing: {
			padding: 1
		}
	},
	mode: {
		css: {
			variables: {
				replaceSvgWithPng: function() {
					return function(sprite, render) {
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
};

gulp.task('beginCleanup', function() {
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginCleanup'], function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('createPngCopy', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteImage', ['createPngCopy'], function() {
	return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
		.pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endCleanup', ['copySpriteImage', 'copySpriteCSS'], function() {
	return del(['./app/temp/sprite']);
});

gulp.task('icons', ['beginCleanup', 'createSprite', 'createPngCopy',
	'copySpriteImage',
	'copySpriteCSS', 'endCleanup'
]);