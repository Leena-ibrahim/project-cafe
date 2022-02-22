function sendMail(params){
    var tempParams={
        from_name: document.getElementById("name").value,
        to_name: document.getElementById("phone").value,
        message: document.getElementById("msg").value,

    };
    emailjs.send('service_s837b7c','template_3nb85d9',tempParams)
   .then(function(res){
        console.log("success",res.status);
        

    }
    )

}