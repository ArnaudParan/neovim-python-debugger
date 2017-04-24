/* jshint esversion:6 */
var gulp = require('gulp');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

gulp.task('install-deps', callback => {
  exec('venv/bin/pip install -r requirements.txt', (err, stdout, stderr) => {
    console.log(stderr);
    callback();
  });
});

gulp.task('install-test-deps', callback => {
  exec('venv/bin/pip install -r test/requirements.txt', (err, stdout, stderr) => {
    console.log(stderr);
    callback();
  });
});

gulp.task('pylint', callback => {
  exec('venv/bin/pylint -f colorized -r n rplugin test', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    callback();
  });
});

gulp.task('test', callback => {
  exec('venv/bin/py.test -q --color=yes --cov=rplugin test', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
  });
});

gulp.task('watch-python', () => {
  gulp.watch('./**/*.py', ['pylint', 'test']);
});

gulp.task('default', ['install-deps', 'install-test-deps', 'watch-python']);
