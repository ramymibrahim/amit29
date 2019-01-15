function changeDiv(){
    var obj = document.getElementById('js-test');
    obj.innerHTML="<a href='https://google.com'>Welcome</a>";
    obj.style.backgroundColor="red";
}

function CheckPassword(){
    var obj=document.getElementById('password');
    var div=document.getElementById('js-test');
    if(obj.value=='123456'){
        div.style.backgroundColor="green";
        div.innerHTML="Correct Password";
        //document.write("Correct Password");
        //div.style.display="none";
        //alert("Correct Password");
        console.log("correct Password");
    }
    else
    {
        div.style.backgroundColor="red";
        div.innerHTML="Wrong Password";
        //document.write("Wrong Password");
        //alert("Wrong Password");
        console.log("correct Password");
    }
}