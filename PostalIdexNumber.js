function Check(str){
    const regex = new RegExp(/[0-9a-zA-Z]*[@][a-zA-Z]+[.][a-z]{2,4}/g);
    if(str.match(regex)){
                console.log("emailid exist");
    }else {
                console.log("does not exist")
    }
}
const y = Check("abc@gmail.com");
console.log(y);
/*Ensure “.” after bridgelabz
and validate the
mandatory 3rd part i.e. co*/