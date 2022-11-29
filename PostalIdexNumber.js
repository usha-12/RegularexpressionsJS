function Check(str){
    const regex = new RegExp(/[0-9a-zA-Z]+([_+-.a-z0-9A-Z]+)*[@][a-zA-Z]+[.][a-z]{2,4}/g);
    if(str.match(regex)){
                console.log("emailid exist");
    }else {
                console.log("does not exist")
    }
}
const y = Check("1abc@bridge-lab.com");
console.log(y);
/*Ensure @ and validate the
mandatory 2nd part i.e.
bridgelabz*/