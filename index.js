const mergeImages = require('merge-images');
const Canvas = require('canvas');
const fs = require('fs');
const Jimp = require("jimp");

//
// Jimp.read("body.png", function (err, img) {
//   if (err) throw err;
//   img.resize(256, 256)            // resize
//     .quality(60)                 // set JPEG quality
//     .greyscale()                 // set greyscale
//     .write("body-bw.png"); // save
// });

Jimp.read("body.png").then(function (img) {
  img.resize(256, 256)            // resize
  // img.resize(512, 512)            // resize 512
    // .quality(60)                 // set JPEG quality
    .greyscale()                 // set greyscale
    .write("body-bw.png", function (err) {
      mergeImages(['./body-bw.png', './eyes.png', './mouth.png'], {
        Canvas: Canvas
      }).then((b64) => {
        // console.log(b64);
        var data = b64.replace(/^data:image\/\w+;base64,/, "");
        var buf = new Buffer(data, 'base64');
        fs.writeFile('test.png', buf);
        return
      });
    }); // save
}).catch(function (err) {
  if (err) throw err;
});

// mergeImages(['./body-bw.png', './eyes.png', './mouth.png'], {
//   Canvas: Canvas
// }).then(b64 => {
//   // console.log(b64);
//   var data = b64.replace(/^data:image\/\w+;base64,/, "");
//   var buf = new Buffer(data, 'base64');
//   fs.writeFile('test.png', buf);
//   return
// });

