import express from 'express';
var https = require('https');
const router = express.Router();

router.post('/get_data', function(request, response){
    var variable = request.body.city;
    console.log(variable);
    const options = {
        hostname: 'pastebin.com',
        port: 443,
        path: '/raw/'+variable,
        method: 'GET'
        //FLe7z4LS
      }
      const req = https.request(options, res => {
        res.on('data', function (chunk) {
            response.send(chunk.toString('utf8'))
          });
      })
      
      req.on('error', error => {
        console.error(error)
      })
      
      req.end()
    });

    export default router;