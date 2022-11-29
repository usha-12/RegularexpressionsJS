function alphanumeric(str){
    const regex = new RegExp(/(?=.*[a-zA-Z\d].*)\s[a-zA-Z\d!@#$%&*]{7,}/g);
    if(str.match(regex)){
                console.log("Its a numeric value");
    }else {
                console.log("its not alphanumeric value");
    }
}
alphanumeric("400 088B");
/*Make sure 400 088 is also
valid along with 400088*/