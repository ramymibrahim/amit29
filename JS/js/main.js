function validate_name(){
    var val = document.getElementById('name').value;    
    if(val.length<8 || val.length>255){        
        document.getElementById('val_name').innerHTML="برجاء كتابة إسم  مابين 8 و 255";        
    }
    else{
        document.getElementById('val_name').innerHTML="";        
    }
}

function validate_email(){
    var val = document.getElementById('email').value; 
    if(val.indexOf("@yahoo.com")==-1 && val.indexOf("@gmail.com")==-1 && val.indexOf("@hotmail.com")==-1){
        document.getElementById('val_email').innerHTML="برجاء إختيار بريد صحيح";        
    }
    else{
        document.getElementById('val_email').innerHTML="";        
    }
}

function validate_tel(){
    var val = document.getElementById('tel').value;     
    if(!(Number(val)>=0 || Number(val)<0)){
        document.getElementById('val_tel').innerHTML="برجاء كتابة رقم صحيح";
    }
    else{
        document.getElementById('val_tel').innerHTML="";        
    }
}
