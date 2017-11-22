var objPeople = [
    {
        username: "admin",
        password: "admin"
    }
]
var attempt=3;
function getinfo() 
{
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
    
        if(username=="admin" && password=="admin")
        {
          //  window.alert("Welcome "+username);
            window.open("dashboard.html",'_self');
            
        }
    
    else{
        attempt--;//decrementing by one
        window.alert("The username or password is incorrect so you have" +attempt+" attempt");
        if(attempt==0)
        {
            document.getElementById("username").disabled=true;
            document.getElementById("password").disabled=true;
            document.getElementById("button").disabled=true;
        }
    }    
}