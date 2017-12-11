var express = require('express');
var router = express.Router();

var formidable = require('formidable');
var fs = require('fs');



router.post('/', function(req, res, next) {
  var AVATAR_UPLOAD_FOLDER = '/images/'  
  var form = new formidable.IncomingForm();   
  form.encoding = 'utf-8';      
  form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER;  
  form.keepExtensions = true;    
  form.maxFieldsSize = 2 * 1024 * 1024;  

  form.parse(req, function(err, fields, files) {

    if (err) {

      res.json({'avatar':'error'}); 
      return;
    }

        var extName = '';  
    switch (files.avatar.type) { 
        case 'image/pjpeg':
            extName = 'jpg';
            break;
        case 'image/jpeg':
            extName = 'jpg';
            break;
        case 'image/png':
            extName = 'png';
            break;
        case 'image/x-png':
            extName = 'png';
            break;
        }

    if(extName.length == 0){

        res.json({'avatar':'invalid format'});
        return;
    }

    var avatarName = Math.random() + '.' + extName;
    var newPath = form.uploadDir + avatarName;

    console.log(newPath);
    fs.renameSync(files.avatar.path, newPath);  

    res.json({'image':newPath});
    });
});

module.exports = router;