function alphanumeric(str){
    const regex = new RegExp(/(?=.*[a-zA-Z\d].*)[a-zA-Z\d!@#$%&*]{7,}/g);
    if(str.match(regex)){
                console.log("Its a numeric value");
    }else {
                console.log("its not alphanumeric value");
    }
}
alphanumeric("A400088");
/*Restrict the PIN code from
taking alphabets or special
characters at the
beginning.
Check for A400088 – this
should fail*/