let highTriangle = 7;
var sign = "*";

function drawTriangleByFor(highTriangle, sign){
    var line = sign;
    for (let i = 0; i < highTriangle; i++){
        console.log(line);
        line += sign;
    }
}

function drawTriangleByWhile(highTriangle, sign){
    var line = sign;
    let i = 0;
    while (i < highTriangle) {
        console.log(line);
        line += sign;
        i++;
    }
}

drawTriangleByFor(highTriangle, sign);
drawTriangleByWhile(highTriangle, sign);
