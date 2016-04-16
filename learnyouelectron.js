// Main executable goes here

// #!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'learnyouelectron',
    title       : 'learnyouelectron',
    subtitle    : 'Learn the basics of cross-platform apps with electron',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
})
