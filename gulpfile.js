0218-'use strict';


// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var baked = require('baked/gulp');
var htmlmin = require('gulp-htmlmin');
var del = require('del');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var bundle = require('gulp-bundle-assets');

//Added for Algolia search
var replace = require('gulp-replace');
var prismicAlgolia = require('@volusion/prismic-algolia');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');

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

    gulp.watch(['src/**/*.html'], function () {
        runSequence(
            'baked:generate',
            browserSync.reload
        );
    });
});

// Minify Images
gulp.task('imagemin', function() {
  return gulp.src(['./src/assets/images/*','./src/assets/images/**/*'])
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('./build/assets/images/'));
});

// minify html
gulp.task('minify-html', function() {
  return gulp.src(['build/**/*.html', '!build/partials/**', '!build/controllers/**'])
    .pipe(htmlmin({collapseWhitespace: true, minifyJS : true, minifyCSS: true , removeComments: true}))
    .pipe(gulp.dest('build'));
});
// Load and get the baked configuration
  // in order to use srcDir and dstDir
  var config = baked.init({
      options: {
          srcDir: 'src',
          dstDir: 'build',
          ignore: [
              '/assets/images',
              '/assets/js',
              '/assets/sass'
          ]
      }
  });

  // This example uses its specific package.json file so its gulp instance seems
  // to be distinct than the baked's one. This helper allows to load every tasks
  // in the right gulp environment.
  baked.defineTasks(gulp);

// CUSTOMIZED VERSION here, original task is in node_modules/baked/gulp.js
// reason is we need to add a process.exit(1) to fail the build if there's any errors
// that's the only change we made to this gulp task when copy & pasting it
gulp.task('baked:generate:customized', ['baked:init'], function () {
  return Q.fcall(config.beforeGenerate || _.identity)
    .then(function () {
      return config.baked.generate(config.options);
    })
    .then(config.afterGenerate || _.identity)
    .then(
      function (failures) {
        if (!_.isEmpty(failures)) {
          console.error("" + failures.length + " errors:\n");
          _.each(failures, function (failure) {
            console.error(failure.src + ": ", failure.error);
            console.error(failure.dst, "args:", failure.args||{}, "\n");
          });
          process.exit(1); // THIS IS THE ONLY CHANGE WE MADE TO THIS TASK!
        }
      },
      function (err) { console.error(err.stack); throw err; process.exit(1); }
    );
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function () {
  return gulp.src('src/assets/sass/**/*.scss')
    .pipe(sass({includePaths: ['./node_modules'], outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('build/assets/stylesheets/'))
    .pipe(browserSync.stream({match: '**/*.css'}));

});

//////////////////////////////////////////////////////////////////
// Concatenate & Minify JS

// Ignores files used for bundle task
gulp.task('globalScripts', function() {
    return gulp.src(['src/assets/js/global-scripts/*.js'])
        .pipe(concat('global.js'))
        .pipe(gulp.dest('build/assets/javascript'))
        .pipe(rename('global.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/javascript'))
        .pipe(browserSync.stream({match: '**/**/*.js'}));
});

// Uses bundle.config.js to find npm js files and bundles/uglifys them
gulp.task('bundleScripts', function() {
  return gulp.src('src/assets/js/global-admin/bundle.config.js')
    .pipe(bundle())
    .pipe(rename('global-admin.js'))
    .pipe(gulp.dest('build/assets/javascript'));
});

// Creates search.js for use with Algolia
// Currently disabled in favor of webpack implementation
gulp.task('searchScripts', function() {
  return gulp.src([
        'src/assets/js/searchTest/*.js',
        './node_modules/jquery/dist/jquery.js',
        './node_modules/hogan.js/lib/hogan.js',
        './node_modules/algoliasearch/dist/algoliasearch.js',
        './node_modules/algoliasearch-helper/index.js',
        './node_modules/url/url.js'
        ])
        .pipe(concat('search.js'))
        .pipe(gulp.dest('build/assets/javascript'))
        .pipe(rename('search.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/javascript'));
});

gulp.task('scripts', ['globalScripts', 'bundleScripts']);


//////////////////////////////////////////////////////////////////
// algoliaIndexResources
gulp.task('algoliaIndexResources', function(cb) {
  // Run this to create a new index for each build
  // By creating a new index with a new name, each index is tied to a build
  // and we can revert both netlify and algolia
  var config = {
    prismic: {
      url: 'https://volusion.prismic.io/api',
      documentType: 'resource',
      pageSize: '100'
    },
    algolia: {
      appId: '7FI9T0IXZ5',
      appKey: 'd360874a60258fef0a3b35108b04023d',
      index: {
        name: 'vol-resources',
        settings: {
          attributesToIndex: [
            'fragments.resource.resourceType.value',
            'fragments.resource.resourceName.value',
            'fragments.resource.resourceShortDescription.value',
            'fragments.resource.resourceShortDescription2.value',
            'tags'],
          attributesForFaceting: [
            'fragments.resource.resourceType.value',
            'fragments.resource.resourceTopics.value.topic.value'
          ],
          customRanking: [
            'desc(fragments.resource.resourceDateAdded.value)',
            'asc(fragments.resource.resoureName.value)'
          ]
        },
        slaves: [
          {
            suffix: '_by_alpha_desc',
            customRanking: [
              'asc(fragments.resource.resoureName.value)',
              'desc(fragments.resource.resourceDateAdded.value)'
            ]
          }
        ]
      }
    }
  }
  prismicAlgolia(config, updateRefs);
  function updateRefs(newIndexName) {
    //find any string starting with 'vol-resources and ending with '
    //replace it with the new index name
    console.log('new index is ' + newIndexName);
    gulp.src(['build/assets/javascript/search.js'])
      .pipe(replace(/\'vol-resources(.*?)\'/, '\'' + newIndexName + '\''))
      .pipe(gulp.dest('./build/assets/javascript/'));
    gulp.src(['build/assets/javascript/search.min.js'])
      .pipe(replace(/\"vol-resources(.*?)\"/, '\"' + newIndexName + '\"'))
      .pipe(gulp.dest('./build/assets/javascript/'));
    gulp.src(['src/assets/js/search/search.js'])
      .pipe(replace(/\'vol-resources(.*?)\'/, '\'' + newIndexName + '\''))
      .pipe(gulp.dest('./src/assets/js/search/'));
    cb();
  }
  // TODO: Make sure it fails the build if there's an error with this
});

//////////////////////////////////////////////////////////////////
// Webpack 
// Handles js dependencies for Algolia module
gulp.task('webpack', function() {
  return gulp.src(['./src/assets/js/search/search.js'])
    .pipe(gulpWebpack({
      entry: {
        search: './src/assets/js/search/search.js'
      },
      output: {
        filename: '[name].min.js'
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
      ]
    }))
    .pipe(gulp.dest('./build/assets/javascript/'));
});
gulp.task('webpack:dev', function() {
  return gulp.src(['./src/assets/js/search/search.js'])
    .pipe(gulpWebpack({
      watch: false,
      entry: {
        search: './src/assets/js/search/search.js'
      },
      output: {
        filename: '[name].min.js'
      }
    }))
    .pipe(gulp.dest('./build/assets/javascript/'));
});

//////////////////////////////////////////////////////////////////
// Watch & Serve
// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['baked:generate']);
    gulp.watch('src/**/*.js', ['baked:generate']);
    gulp.watch('node_modules/vbox/js/bin/*.js', ['bundle']);
    gulp.watch('node_modules/vbox/sass/**/*.scss', ['sass']);
});

//////////////////////////////////////////////////////////////////
// Master Tasks
// Default Task <-- Make into Dev build vs. Prod build
gulp.task('default', function(callback) {
  runSequence('clean',
              ['lint', 'sass', 'scripts', 'imagemin', 'webpack', 'baked:generate'],
              'minify-html',
              callback);
});

gulp.task('netlify', function(callback) {
  runSequence('clean',
              ['lint', 'sass', 'baked:generate'],
              'minify-html',
              callback);
});

gulp.task('serve', function(callback) {
  runSequence('clean',
              ['lint', 'sass', 'baked:generate', 'watch'],
              'browser-sync',
              'minify-html',
              callback);
});