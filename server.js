const express = require('express');

const app = express();

const port = 3000;


app.use(express.static('public'));  // ask dan just for clarification middleware.serving static assets from public/ folder. in the public folder static content was created (index.html) and server will return it. index.html is the default page of the web server. 

app.listen(port, () => {
  console.log('Server listening at port ' + port)
})


//if localhost:3000/style.css was entered in browser we would get a 304 response because it is a redirect from that actual index.html. It contains the content in the css file. style.css is not a file path its a URL