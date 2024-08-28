//Enum

enum ProjectSturture {
    New,
    Activations,
    Finsihed,
}

const Mydetails=ProjectSturture.New;
console.log(Mydetails);


//Any Data Type

let RandomValue:any;
RandomValue=144;
RandomValue=true;
RandomValue="sam";

console.log(RandomValue);


//Unknow DataType

let Numbers:unknown;
Numbers=100;
Numbers="sam";

console.log(Numbers);

//Type Assertions

let details:any;

details="123";

let translate:number;

translate=details as number;
console.log(translate);

//Type Gurds

let Numberss:number; 
Numbers=100;

if(typeof Numbers==='number'){
    console.log(true);
}else {
    console.log(false);
}

//Untion And Intersetcion Type

//untion Type

let detailss:number | string

details="sam";
details=1223365;


function add (x:number | string,y:number | string){
    if(typeof x==='number' && typeof y==='number'){
        return x+y

    }else if (typeof x==='string' && typeof y==='string'){
        return x.concat(y);
    }
}

console.log(add("sam "," tom"));
console.log(add(100,1000));

//Intersetcion Type

interface Employers {
    name:string,
    age:number
}

interface EmployerDetails {
    city:string
}

type Details=Employers & EmployerDetails

let NewDetails: Details = {
    name:"sam",
    age:100,
    city:"NewYork"

}

console.log(NewDetails.age);
console.log(NewDetails.city);


//Literal Type

