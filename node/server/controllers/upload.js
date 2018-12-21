//you can use error handling to see if there are any errors
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
    }
}
