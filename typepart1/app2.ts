let helloworld:string="Helloworld";

const documentsss="sam";

console.log(helloworld);

//Defining Types

interface User{
    name:string;
    id:number;
}

const user:User= {
    name:"sam",
    id:100

}

const newUser:User=user

function function5 (e:User){
    console.log(e.id);
    console.log(e.name);

}



//Defining Types2

class NewUser {
    name:string;
    id:number;

    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }
    
}
 const newdetails:User= new NewUser("sam",1000);






