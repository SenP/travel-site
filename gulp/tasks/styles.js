var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    cssvars = require('postcss-simple-vars'),
    cssnested = require('postcss-nested'),
    cssimport = require('postcss-import'),
    cssmixin = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba');

gulp.task("styles", function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssimport, cssmixin, cssvars, cssnested, hexrgba, autoprefixer]))
        .on('error', function(errormsg) {
            console.log(errormsg.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});