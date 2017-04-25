/* jshint esversion:6 */
var gulp = require('gulp');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

var PYTHON_PLUGIN_PATH = 'rplugin/python/neovim_python_debugger';
var PYTHON_TESTS_PATH = 'test';

gulp.task('install-deps', callback => {
  exec('venv/bin/pip install -r requirements.txt', (err, stdout, stderr) => {
    console.log(stderr.toString().trim());
    callback();
  });
});

gulp.task('install-test-deps', callback => {
  exec('venv/bin/pip install -r test/requirements.txt', (err, stdout, stderr) => {
    console.log(stderr.toString().trim());
    callback();
  });
});

gulp.task('pylint', callback => {
  exec('venv/bin/pylint -f colorized -r n ' + PYTHON_PLUGIN_PATH + ' ' + PYTHON_TESTS_PATH, (err, stdout, stderr) => {
    console.log(stdout.toString().trim());
    console.log(stderr.toString().trim());
    callback();
  });
});

gulp.task('test', callback => {
  exec('venv/bin/py.test -q --color=yes --cov=' + PYTHON_PLUGIN_PATH + ' ' + PYTHON_TESTS_PATH, (err, stdout, stderr) => {
    console.log(stdout.toString().trim());
    console.log(stderr.toString().trim());
    callback();
  });
});

gulp.task('watch-python', () => {
  gulp.watch('./**/*.py', ['pylint', 'test']);
});

gulp.task('watch-requirements', () => {
  gulp.watch('./requirements.txt', ['install-deps']);
});

gulp.task('watch-test-requirements', () => {
  gulp.watch('./test/requirements.txt', ['install-test-deps']);
});

gulp.task('default', ['install-deps', 'install-test-deps', 'watch-python', 'watch-requirements', 'watch-test-requirements']);
