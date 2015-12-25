const gulp = require('gulp')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const jshint = require('gulp-jshint')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const livereload = require('gulp-livereload')
const jade = require('gulp-jade')

gulp.task('jade', () => {
    return gulp.src(['./src/**/*.jade', '!./src/*.jade'])
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./presentations/'))
        .pipe(livereload())
})

gulp.task('watch', () => {
    livereload.listen()
    gulp.watch(['./src/**/*.jade', '!./src/*.jade'], ['jade']);
})
// 默认任务
gulp.task('default', () => {

})

// js文件监听
//function scriptHandler(src, dest) {
//  return gulp.src(src)
//    .pipe(babel({
//      presets: ['es2015']
//    }))
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'))
//    .pipe(gulp.dest(dest))
//     .pipe(livereload())
//}
