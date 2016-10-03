// List all available tasks


const path = require('path');
const src = 'src';
const dest = 'dist';

const organiser = require('gulp-organiser');
organiser.registerAll('./tasks', {
  less: {
    watch: path.join(src, 'less', '**/*.less'),
    src: path.join(src, 'less', '**/style.less'),
    dest: path.join(dest, 'css'),
  },
  'copy-static': {
    src: path.join(src, '**/*'),
    dest,
    map: {
      'src/pages/**/*.*': 'dist',
    },
  },
  'browser-sync': {
    src: '.', // it doesn't matter, it's just so the task object is not ignored.
    reloadOn: ['less', 'copy-static'], // reload page when these tasks happen
    startPath: 'dist/index.html',
    baseDir: './',
  },
});
