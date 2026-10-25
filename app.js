let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let maths = Number(prompt("Enter your Mathematics score:"));
let english = Number(prompt("Enter your English score:"));
let computer = Number(prompt("Enter your Computer score:"));

let totalScore = maths + english + computer;
let remark;

if (totalScore >= 70) {
    remark = "Excellent";
} else if (totalScore >= 50) {
    remark = "Good";
} else if (totalScore >= 35) {
    remark = "You can do better";
} else {
    remark = "Fail";
}

console.log("STUDENT EXAMINATION RESULT");
console.log("Full Name: " + firstName + " " + lastName);
console.log("Mathematics: " + maths);
console.log("English: " + english);
console.log("Computer: " + computer);
console.log("Total Score: " + totalScore);
console.log("Remark: " + remark);



for (let number = 1; number <= 100; number++) {

    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");
    } else if (number % 3 == 0) {
        console.log("Fizz");
    } else if (number % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }

}