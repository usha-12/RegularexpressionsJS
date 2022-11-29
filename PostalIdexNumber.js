function alphanumeric(str){
    const regex = new RegExp(/(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]{7,}/g);
    if(str.match(regex)){
                console.log("Its a numeric value");
    }else {
                console.log("its not alphanumeric value");
    }
}
alphanumeric("400088B");
/*Restrict the PIN code from
taking alphabets or special
characters at the End.
Check for 400088B – this
should fail*/