function isNan(value) {
    if(value === undefined || !isFinite(value)) {
        return true;
    }
    return false;
}

console.log(isNan(123));
console.log(isNan("123"));
console.log(isNan("123s"));
console.log(isNan(null));
console.log(isNan(undefined))
