var fs=require('fs');

fs.rename('demo-appendfile','mytxtfile' , function(err){
    if (err) throw err;
    console.log('file renamed successfully!');
    
})