const student = {
    name: "Akshat",
    age: 43,
    branch: "CSE"
}

const newStudent = {
    ...student,
    section: "A"
}

console.log("New Object Name: ", newStudent.name);
console.log("New Object Age: ", newStudent.age);
console.log("New Object Branch: ", newStudent.branch);
console.log("New Object Section: ", newStudent.section);




function sum(...args) {
    const ans = args.reduce((s, i) =>
        s + i
    );
    return ans;
}

console.log(sum(1, 2, 3, 4, 5));




function add(...args) {
    let s = 0;
    for (let e of args) {
        s = s + e;
    }
    return s;
}

console.log(add(1, 2, 3, 4, 5, 6));