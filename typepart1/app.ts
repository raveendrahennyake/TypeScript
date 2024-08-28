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















