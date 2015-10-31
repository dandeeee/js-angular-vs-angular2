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
        port: 9001,
        logPrefix: "front-end"
    });
});

gulp.task('deploy-static',function(){
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9001, app;

    app = connect().use(serveStatic(PATHS.out));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['build', 'deploy-static', 'watch']);
