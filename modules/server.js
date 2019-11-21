const express = require('express');
let app = express();
const bodyParser = require('body-parser');
let PORT = 5000;

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('Welcome to the homepage!!!');
});

app.listen(5000, function(){
    console.log('listening on port', 5000);
});
 