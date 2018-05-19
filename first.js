var Student = /** @class */ (function () {
    function Student(first, middle, last) {
        this.first = first;
        this.middle = middle;
        this.last = last;
        this.fullName = first + '' + middle + '' + last;
    }
    return Student;
}());
var name = "fffff";
var list = [1, 2, 3];
var vaiable = '455';
var u = undefined;
var n = null;
function greeter(person) {
    return "Hello, " + person.first + name + list[0] + '/' + u + n + vaiable;
}
//let user = "Jane User";
//let user = [0, 1, 2];
//let user = { first: "Jane", last: "User" };
var user = new Student("jone", 'hoff', 'uese');
document.body.innerHTML = greeter(user);
