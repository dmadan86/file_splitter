var stdio = require('stdio');

var options = stdio.getopt({
    'input': {key: 'i', description: 'User name', mandatory: true, args: 1},
    'output': {key: 'o', description: 'User surname',  mandatory: true, args: 1},
    'size': {key: 's', description: 'Based on file size', args: 1},
    'line': {key: 'l', description: 'Number of Lines to be split'}
});