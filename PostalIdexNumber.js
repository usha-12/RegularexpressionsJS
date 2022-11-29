function Check(str){
    const regex = new RegExp(/[0-9a-zA-Z]+([_+-.a-z0-9A-Z]+)*[@][a-zA-Z]+[.][a-z]{2,4}/g);
    if(str.match(regex)){
                console.log("emailid exist");
    }else {
                console.log("does not exist")
    }
}
const y = Check("abc.xyz@bridgelabz.co.in");
console.log(y);
/*Validate Email address with a
regex. The email consists of
minimum 3 and optional 2 more
parts with mandatory @ and .
abc.xyz@bridgelabz.co.in
Here abc, bridgelabz and co are
mandatory and the remaining 2
are optional
To begin with lets validate the
mandatory part and start with abc*/