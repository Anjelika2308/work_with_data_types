let num = 4;
let degree = 4;
let sum = function pow(num, degree){
    let temp = num;
   for(let i = 1; i < degree; i++){
       temp *= num;
   }
   return temp;
}
console.log(sum(num, degree));
