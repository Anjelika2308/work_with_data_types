var measure = "кілограми";
var value = 10;

switch (measure){
    case "кілометри":
        console.log(value + " км це " + (value * 1000) + " м.");
        break;
    case "години":
        console.log(value + " г це " + (value * 60) + " хв.");
        break;
    case "кілограми":
        console.log(value + " кг це " + (value * 1000) + " грм.");
        break;
    default:
        console.log("Невірна одиниця вимірювання");
}