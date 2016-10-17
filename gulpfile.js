// List all available tasks


const path = require('path');
const src = 'web/theme/src';
const dest = 'web/theme/dist';

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
      [path.join(src, 'pages/**/*.*')]: dest,
    },
  },
  'browser-sync': {
    src: '.', // it doesn't matter, it's just so the task object is not ignored.
    reloadOn: ['less', 'copy-static'], // reload page when these tasks happen
    startPath: path.join(dest, 'index.html'),
    baseDir: './',
  },
});
