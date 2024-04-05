var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
service:'gmail',
auth:{
    user:'sobhindra2005@gmail.com',
    pass:'websecurity@2062@2084'
}

});

var mailoptions=
{
    from:'sobhindra2005@gmail.com',
    to:'sobindra271@gmail.com',
    subject:'sending mail using the node.js',
    text:'waaau hecker me '
};

transporter.sendMail(mailoptions,function(error,info){
if (error){
    console.log(error);

}
else{
    console.log('Email sent:' + info.response);

}
});