var services = {
    "Стрижка": "60",
    "Гоління": "80",
    "Миття голови": "100"
};

function addNewService(key, value){
    services[key] = value;
}
function price(){
    let sum = 0;
    for(let i in services){
        sum += Number(services[i]);
    }
    return sum;
}
function minPrice(){
    let minCost = Number.MAX_VALUE;
    for(let i in services){
        let temp = Number(services[i]);
        if(temp < minCost){
            minCost = temp;
        }
    }
    return minCost;
}
function maxPrice(){
    let maxCost = Number.MIN_VALUE;
    for(let i in services){
        let temp = Number(services[i]);
        if(temp > maxCost){
            maxCost = temp;
        }
    }
    return maxCost;
}
addNewService("Фарбування", "300");
addNewService("Вкладання волосся", "350");
console.log(price());
console.log(minPrice());
console.log(maxPrice());
