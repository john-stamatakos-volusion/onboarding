'use strict';


// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var css2js = require('gulp-css2js');

// Delete Build folder
gulp.task('clean', function() {
  return del(['build']);
});


//////////////////////////////////////////////////////////////////
// Browser-Sync
gulp.task('browser-sync', function() {
    browserSync.init({
        reloadDebounce: 5000,
        server: {
            baseDir: './build'
        }, 
        port: 8000,
        tunnel: false // only need to enable this if with a device not on the same wifi - crashes often so off by default
    });

    gulp.watch(['src/**/*.html', 'src/**/*.js'], function () {
        runSequence(
            'html',
            browserSync.reload
        );
    });
});

gulp.task('images', function(){
  return gulp.src('src/assets/images/**')
    .pipe(gulp.dest('build/assets/images'));
  })

gulp.task('html', function(){
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('build/'));
  })

// Compile Our Sass
gulp.task('sass', function () {
  return gulp.src('src/assets/sass/**/*.scss')
    .pipe(sass({includePaths: ['./node_modules'], outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('build/assets/stylesheets/'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('scripts', ['onboarding:js'], function(){
  var src = [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/vbox/js/hammer.min.js',
    './node_modules/vbox/js/jquery.hammer.js',
    './node_modules/vbox/js/velocity.min.js',
    './node_modules/vbox/js/sideNav.js',
    './node_modules/vbox/js/leanModal.js',
    './node_modules/hopscotch/dist/js/hopscotch.js',
    './build/assets/js/onboarding.js'
  ];

  return gulp.src(src)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('build/assets/js/'))
    .pipe(browserSync.stream({match: '**/*.js'}));
});

gulp.task('onboarding:js', function(){
  var src = [
    './src/assets/js/onboarding.js',
    './src/assets/js/onboarding.helpers.js',
    './src/assets/js/onboarding.service.js',
    './src/assets/js/onboarding.nav.js',
    './src/assets/js/onboarding.tour.js',
    './src/assets/js/optimizely.init.js',
    './src/assets/js/onboarding.css.js'
  ];

  return gulp.src(src)
    .pipe(concat('onboarding.js'))
    .pipe(gulp.dest('build/assets/js/'))
    .pipe(browserSync.stream({match: '**/*.js'}));
});


//////////////////////////////////////////////////////////////////
// Watch & Serve
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.js', ['scripts']);
});


gulp.task('serve', function(callback) {
  runSequence('clean',
              ['html', 'images', 'sass'],
              ['onboarding:js'], 
              ['scripts', 'watch'],
              'browser-sync',
              callback);
});
