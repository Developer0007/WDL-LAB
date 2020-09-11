$(document).ready(function(){
    
    $("#submit").click(function () {
        var uname = $('#uname').val();
        var pass = $('#pass').val();
        if(uname.length === 0){
            alert("enter user name");
        } else if(pass.length === 0){
            alert("enter password");
        }
    });

    
      
$('#btn1').click(function() {
        
    $('form[id="signup_form"]').validate({
        rules: {
            uname: {
                        required: true,
                        pattern:/^[A-Za-z]{5,}$/,
            },

            email: {
                        required: true,
                        pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            },

            contact_no:{
                        required: true,
                        pattern: /^[0-9]{10}$/,
            },
            psw:{
                required:true,
                pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,

            },
            psw_repeat:{
                required:true,
                equalTo: "#psw",
            },
            address:{
                required: true,
                pattern: /^[^'\x22]+$/,
            },
            messages: {
                        uname: {
                                    pattern: 'use charecter only',
                                },
                        email: {
                                    pattern: 'Enter valid Email',
                        },

                        contact_no: {
                                    pattern:'enter 10 numbers only',
                        },

                        psw: {
                                pattern:'minimum 1 uppercase,1 lowercase , 1 number & minmium 8 charecter password',
                        },

                        psw_repeat: 'password not matched',

                        address: {
                                pattern:'do not use commas',
                        }
            },
            
            submitHandler: function(form) {
              form.submit();
            }
        }
      });
    });
});


$('#con_btn').click(function() {

    $('form[id="contact"]').validate({

        rules:{
            firstname:{
                required: true,
                pattern:/^[A-Za-z]{1,}$/,
            },
            lastname:{
                required: true,
                pattern:/^[A-Za-z]{1,}$/,
            },
            email:{
                required: true,
                pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            },
            subject:{
                pattern: /^[^'\x22]+$/,
            },
        messages:{
            firstname:'Enter chrecter only',
            lasttname:'Enter chrecter only',
            email:'enter valid email only',
            subject:'dont use commas',
        },
        submitHandler: function(form) {
            form.submit();
          }

        }
    });
    
});