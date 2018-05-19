class Student {
    fullName: string;
    constructor(public first: string,public middle: string, public last: string){
        this.fullName = first + ''+middle+ ''+ last;
    }
}

interface Person {
    first: string;
    last: string;
}

let name: string = "fffff";
let list: number[] = [1, 2, 3];

let vaiable = '455'
let u: undefined = undefined;
let n: null = null;


function greeter(person: Person) {
    return "Hello, " + person.first + name + list[0] +'/' + u + n + vaiable;
}

//let user = "Jane User";
//let user = [0, 1, 2];
//let user = { first: "Jane", last: "User" };
let user = new Student("jone",'hoff','uese')
document.body.innerHTML = greeter(user);