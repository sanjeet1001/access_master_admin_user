var http = require('http');
var express = require('express');
var cors = require('cors');
app = express();
app.use(cors());
app.use(express.static(__dirname + '/uploadApp'));
app.listen(process.env.PORT || 7878,function(req,res){
    console.log('server started');
});
