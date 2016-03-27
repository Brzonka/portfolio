var gulp=require('gulp');
var uglify=require('gulp-uglify');
var sass=require('gulp-ruby-sass');
var autoprefixer=require('gulp-autoprefixer');
var livereload=require('gulp-livereload');
//uglify
gulp.task('scripts', function(){
	gulp.src('js/effects.js').pipe(uglify()).pipe(gulp.dest('build/js/'));
});

//sass
gulp.task('styles',function(){
	return sass('sass/*.scss').pipe(gulp.dest('build/css/'));
});

//autoprefixer
gulp.task('autoprefix', function(){
	gulp.src('build/css/*.css').pipe(autoprefixer()).pipe(gulp.dest('css/')).pipe(livereload());
});

//watch
gulp.task('watch', function(){
	var server=livereload();
	gulp.watch('js/effects.js', ['scripts']);
	gulp.watch('sass/*.scss', ['styles']);
	gulp.watch('build/css/*.css', ['autoprefix']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);