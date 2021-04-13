var error=document.getElementById("error");
var email=document.getElementById("email");

var email=document.getElementById("phone");


function ValidatePassword()
{    
    var password=document.getElementById("password");
    var strength=document.getElementById("strength");
    var score = 0.0;  

    var hasEight = false;
    var hasCapital = false;
    var hasSmol = false;
    var hasNum = false;
    
    hasEight = (password.value.length >= 8);
    hasCapital = (/[A-Z]/.test(password.value));
    hasSmol = (/[a-z]/.test(password.value));
    hasNum = (/[0-9]/.test(password.value));

    score += hasEight ? 1 : 0;
    score += hasCapital ? 1 : 0;
    score += hasSmol ? 1 : 0;
    score += hasNum ? 1 : 0;

    switch(score)
    {
        case 0:           
        case 1:
            //RED
            strength.innerText="Weak";
            strength.style.color = "red";
            break;
        case 2:
        case 3:
            //AMBER
            strength.innerText="Medium";
            strength.style.color = "orange";
            break;
        case 4:
            //GREEN
            strength.innerText="Strong";
            strength.style.color = "green";
            break;
    }
}

function ValidateEmail()
{
    var email=document.getElementById("email");
    

var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(regexp.test(email.value))
{
    // alert("email");
    // error.innerHtml="valid";
    error.innerText="true";
    error.style.color="green";
    return true;
}
else 
{
    alert("Email Invalid")
    return false;
}
}
var phone=document.getElementById("phone");
function phonenumber()
{
    var phone=document.getElementById("phone");
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if((phone.value.match(phoneno)))
        {
            //alert("message");
      return true;
        }
      else
        {
        alert("Phone no Invalid");
        return false;
        }
}



