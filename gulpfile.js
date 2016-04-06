var nscabinet = require('nscabinet');
var gulp = require('gulp');
var watch = require('gulp-watch');
var argv = require('yargs').argv;
var cache = require('gulp-cached');

var nsconfig = {
	email: 'email@mail.com',
	password: 'PASSWORD',
	account: 'YOUR_ID', // your account ID
	script: 'customscript_scpq_rst_nscabinet', // customscript - auto prefix added by NS
	rootPath: '/'
	// you can specify some more params there or visit https://github.com/suiteplus/nscabinet for more info
	// realm: 'sandbox.netsuite.com',
	// 'role': 3
};

// filesystem that should be monitored for changings
var filesystem = [
	'**/*.*',
	'!node_modules/**',
	'!gulpfile.js',
	'!package.json',
	'!readme.md',
	'!.idea/**',
	'!.git/**',
	'!.settings/**',
	'!.project/**',
	'!project.xml'
];

// create live copy of current instance state
gulp.task('ramCache:create', function() {
	return gulp.src(filesystem)
				.pipe(cache('live'));
});

// upload new files to NS if live copy updated
gulp.task('ramCache:update', function() {
	return gulp.src(filesystem)
				.pipe(cache('live'))
				.pipe(nscabinet(nsconfig));
});

// upload certain file from --file argument or all files
gulp.task('upload', function() {
	var file = argv && argv.file || false;

	if (!file) { // upload all files
		return gulp.src(filesystem)
					// .pipe(nscabinet(nsconfig));
					.pipe(gulp.dest('test'));
	}
	else { // upload single file from --file parameter
		return gulp.src(file)
					.pipe(nscabinet(nsconfig));
	}
	
});

// download all files from instance or certain from --file argument
gulp.task('download', function() {
	var file = argv && argv.file || '**/*.*';

	return nscabinet.download(file, nsconfig)
	    .pipe(gulp.dest('.'));
});

// watch task will will create ram cache
// then monitor changing & update ram & upload files to NS if changed
gulp.task('default', ['ramCache:create'], function(){
	gulp.watch(filesystem, ['ramCache:update']);
});