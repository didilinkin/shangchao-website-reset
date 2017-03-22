var gulp = require('gulp'),                            // gulp
	util = require('gulp-util'),                       // gulp常用的工具库——gulp-util
	// 图片压缩
	imagemin = require('gulp-imagemin'),               // 图片压缩
	pngquant = require('imagemin-pngquant')            // PNG图片压缩

// 图片压缩
gulp.task('imagemin',function(){
    // 未压缩图片( 处理前 需要手动将src路径下的静态图片资源清空 )
	gulp.src('./unCompressionImages/*.{png,jpg,gif,ico}')
	.pipe(imagemin({
		progressive: true,
		svgPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('./src/assets/img/'));
});

// 默认开启服务器，打开监听
gulp.task('default', ['imagemin'])
