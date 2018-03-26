const mergeImages = require('merge-images');
const Canvas = require('canvas');
const fs = require('fs');
const sys = require('sys');

mergeImages(['./body.png', './eyes.png', './mouth.png'], {
  Canvas: Canvas
}).then(b64 => {
  // console.log(b64);
  var data = b64.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(data, 'base64');
  fs.writeFile('test.png', buf);
  return
});

