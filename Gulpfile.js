'use strict';

var gulp = require('gulp'),
    changed = require('gulp-changed'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    eslint = require('eslint'),
    babelify = require('babelify'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    htmlReplace = require('gulp-html-replace'),
    image = require('gulp-image'),
    reload = browserSync.reload,
    p = {
      jsx: './src/demo.jsx',
      bundle: 'app.js',
      distJs: 'build/js',
      distHtml: './',
      distImg: 'dist/img'
    };

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watchify', function() {
  var bundler = watchify(browserify(p.jsx, watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(p.bundle))
      .pipe(gulp.dest(p.distJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', function() {
  browserify(p.jsx)
    .transform(babelify)
    .bundle()
    .pipe(source(p.bundle))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(p.distJs));
});


gulp.task('html-replace', function () {
  var replacements = {
    js: 'build/js/app.js'
  };

  return gulp.src('index.html')
    .pipe(htmlReplace(replacements))
    .pipe(gulp.dest(p.distHtml));
});

gulp.task('image', function () {
  return gulp.src('img/**')
    .pipe(image())
    .pipe(gulp.dest(p.distImg));
});

gulp.task('lint', function() {
  return gulp.src('src/**/*.jsx')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watchTask', function() {
  gulp.watch('src/**/*.jsx', ['lint']);
});

gulp.task('watch', ['clean'], function() {
  gulp.start(['browserSync', 'watchTask', 'watchify', 'lint', 'image']);
});

gulp.task('build', ['clean'], function() {
  process.env.NODE_ENV = 'production';
  gulp.start(['browserify', 'html-replace', 'image']);
});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});