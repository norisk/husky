// Run when package is installed
var fs    = require('fs')
var husky = require('../src/')
var hooks = require('../src/hooks.json')

console.log('\033[4;36m%s\033[0m', 'husky')
console.log('setting up hooks in .git/hooks')

husky.hooksDir(function(err, dir, cmd_prefix, args) {
  if (err) {
    console.error('  ' + err)
  } else {
    hooks.forEach(function (hook) {
      script = hook.replace(/-/g, '')
      script = cmd_prefix+script;
      husky.create(dir, hook, script, args)
    })
    console.log(dir + ' done\n')
  }
})
