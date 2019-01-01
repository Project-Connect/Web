const fs = require('fs');
const path = require('path');
module.exports = {
    handleFileUpload(req, res) {
      //save audiofile onto server
      if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
      }
      // The name of the input field (i.e. "audioFile") is used to retrieve the uploaded file
      let resumeFile = req.files.resume;
      let username = req.body.username;

      //Alternate solution to file uploads
      // Use the mv() method to place the file somewhere on your server
      resumeFile.mv('./public/' + username + "/"+ resumeFile.name, function(err) {
        if (err)
          return res.status(500).send(err);
        res.send('File uploaded!');
      });
    },

    handleFileRequest(req, res) {
      //save audiofile onto server
      // The name of the input field (i.e. "audioFile") is used to retrieve the uploaded file
      let username = req.body.username;
      let resumePath = path.join(__dirname, '../../public/', username, '/resume.pdf')
      let base64EncodedResume = base64_encode(resumePath);
      res.writeHead(200, {
         'Content-Type': 'application/pdf',
         'Content-Length': base64EncodedResume.length
      });

      res.end(base64EncodedResume);
    }
}


// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    let bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
