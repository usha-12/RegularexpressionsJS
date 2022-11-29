function alphanumeric(str){
    const regex = new RegExp(/^[0-9]+[a-z]/g);
    if(str.match(regex)){
                console.log("Its a numeric value");
    }else {
                console.log("its not alphanumeric value");
    }
}
alphanumeric("400088");
/*The Postal Index Number
(PIN) or PIN Code is a 6
digit code of Post Office
numbering used
by India Post.
Create a regex pattern to*/