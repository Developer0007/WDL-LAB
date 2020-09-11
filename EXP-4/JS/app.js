document.getElementById("btn1").addEventListener("click", function(){

    var pass1 = document.querySelector('#pass1').value;
    var pass2 = document.querySelector('#pass2').value;
    if (pass1 != pass2) {
        alert("Password is not matching...");
    }

  });
