const fs = require('fs');
const peach = function(obj) {
  // trace traced
  console.trace('traced');
  console.log(obj);
};
const bowser = function(callback) {
  fs.readFile(process.argv[2], {encoding: 'utf8'}, callback);
};
const koopa = function(err, file) {
 // handle error
 if (err) return console.error(err);
 peach(JSON.parse(file));
};
bowser(koopa);
