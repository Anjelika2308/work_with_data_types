function checkProbabilityTheory(count){
    let countOddNumbers = 0;
    let countEvenNumbers = 0;
    for(let i = 0; i < count; i++){
        if(Math.floor(Math.random() * (1000 - 100 + 1) + 100) %2 === 0){
            countEvenNumbers +=1;
        } else {
            countOddNumbers +=1;
        }
    }
    let percentOddNumber = (countOddNumbers * 100) / count;
    let percentEvenNumber = (countEvenNumbers * 100) / count;
    return "Кількість сгенерованих чисел: " + count + ", кількість парних чисел: " +
        countEvenNumbers + ", кількість непарних чисел: " +
        countOddNumbers + ", відсоток парних до не парних: " +
        percentEvenNumber + "%" +percentOddNumber;
}

console.log(checkProbabilityTheory(50));
