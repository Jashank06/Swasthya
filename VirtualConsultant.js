const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 4000;
const VirtualConsultant = fs.readFileSync('VirtualConsultant.html')
const MobileHealthClinic = fs.readFileSync('MobileHealthClinic.html')
const HIE = fs.readFileSync('HIE.html')
const Contact = fs.readFileSync('Contact.html')

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    if (url =='/'){
    res.end(VirtualConsultant);
    }
    else if (url =='/MobileHealthClinic.html'){
        res.end(MobileHealthClinic);
        }
        else if (url =='/HIE.html'){
            res.end(HIE);
            }
            else if (url =='/Contact.html'){
                res.end(Contact);
                }
                  else{
                      res.statusCode = 404;
                      res.end("<h1>404 not Found</h1>");
                  }

});

server.listen(port ,hostname,() => {
    console.log('Server listening at http://${hostname}:${port}/');

});
