var num = Number(prompt("Введіть число для розрахунку"));
let sum = 0;
for(let i = 1; i <= 100; i++){
   if(i % num){
       sum += i;
   }
}
console.log(sum);
