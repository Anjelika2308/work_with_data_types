var age = Number(prompt("Вкажіть ваш вік"));
let temp = age % 100;
if (age < 0) {
    console.log(age + " це від'ємне число")
} else if (temp >= 10 && temp <= 20) {
    console.log(age + " років");
} else if (temp % 10 === 1) {
    console.log(age + " рік");
} else if (temp % 10 >= 2) {
    console.log(age + " роки");
} else {
    console.log(age + " років");
}
