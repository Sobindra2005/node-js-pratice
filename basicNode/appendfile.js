var fs=require('fs');

fs.appendFile('demo-appendfile','hello content!lorem54',function(err){
    if(err) throw err;
    console.log('saved!');

});