var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myBlend(arr){
    for(var i = 0; i < arr.length; i++) {
        var randomIndex = Math.floor(Math.random() * i);
        var randomValue = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = randomValue;
    }
    return arr;
}

console.log(myBlend(arr));
