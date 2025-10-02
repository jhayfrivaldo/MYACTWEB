
let a = 10;
let b = 5;
let result = a * b; 

let greeting = "HELLO ME! This is the assignment that my prof wants!";

let student = {
    name: "JHAY",
    course: "BSIT",
    year: 3,
    introduce: function() {
        return `Hi, I'm ${this.name}, a ${this.year}rd year ${this.course} student.`;
    }
};

function checkNumber(num) {
    if (num > 0) {
        return `${num} is {POSITIVE!}`;
    } else if (num < 0) {
        return `${num} is NEGATIVE!`;
    } else {
        return "The NUMBER is ZERO!";
    }
}

function generateList() {
    let numbers = "";
    for (let i = 1; i <= 5; i++) {
        numbers += i + " ";
    }
    return numbers;
}

function runExamples() {
    document.getElementById("exampleOutput").innerHTML = `
        <b>Variables & Operators:</b> 10 * 5 = ${result} <br>
        <b>String:</b> ${greeting} <br>
        <b>Object:</b> ${student.introduce()} <br>
        <b>Conditional:</b> ${checkNumber(-3)} <br>
        <b>Loop (1 to 5):</b> ${generateList()}
    `;
}
