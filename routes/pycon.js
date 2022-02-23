const express = require('express');
const router = express.Router();

// spawn new child process to call the python script
const { spawn } = require("child_process");

/* GET Backend Python */
router.get('/pycon', (req, res, next) => {
  var dataToSend;

  const PythonProgram = spawn('python3', ['Scripts/web3PyTest.py']);
   // ['A7.py', Argument_1, 'Argument_2']

  // collect data from script
  PythonProgram.stdout.on('data', function (data) {
      console.log('Pipe data from python script ...');
      dataToSend = data.toString();
      console.log(dataToSend);
      res.send(dataToSend);
  });
  // on std err
  PythonProgram.stderr.on('data', (data) => {
      console.log('stderr: ' + data);
  });

  // res.render('wallet.html');

});

module.exports = router;
