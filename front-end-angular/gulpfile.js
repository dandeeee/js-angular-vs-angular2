var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var browserSync = require("browser-sync");

var reload = browserSync.reload;
var log = plug.util.log;

var PATHS = {
    src:    'src/**/*.js',
    res:    'src/**/*.css',
    html:   'src/**/*.html',
    lib:    'src/lib/*.*',
    out:    'build'
};

gulp.task('clean', function(cb) {
    log('Cleaning: ' + plug.util.colors.blue(path.out));
    var del = require('del');
    del([PATHS.out], cb);
});

gulp.task('res', function () {
    return gulp.src(PATHS.res).pipe(gulp.dest(PATHS.out));
});

gulp.task('html', function () {
    return gulp.src(PATHS.html).pipe(gulp.dest(PATHS.out));
});

gulp.task('lib', function () {
    return gulp.src(PATHS.lib).pipe(gulp.dest(PATHS.out + '/lib'));
});

gulp.task('js', function () {
    return gulp.src(PATHS.src).pipe(gulp.dest(PATHS.out));
});

// TODO gulp.task('analyze', function() {});
// TODO gulp.task('templatecache', function() {});
// TODO third-pary css and js merging
// TODO minification and uglification

gulp.task('build', ['js', 'res', 'html', 'lib']);

gulp.task('watch', function(){
    return gulp.watch(PATHS.src, ['build']);
});

gulp.task('deploy', function () {
    browserSync({
        server: {
            baseDir: PATHS.out
        },
        tunnel: true,
        host: 'localhost',
        port: 7200,
        logPrefix: "front-end"
    });
});

gulp.task('default', ['build', 'deploy', 'watch']);

