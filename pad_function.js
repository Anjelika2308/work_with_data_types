function pad(string, addSymbol, number, startAdd){
    if(startAdd) {
        return string.padStart(number, addSymbol);
    } else {
        return string.padEnd(number, addSymbol);
    }
}

console.log(pad("1234", "5678", 8, false));
console.log(pad("1234", "5678", 8, true));
