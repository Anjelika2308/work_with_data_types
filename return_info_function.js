var user = {
    "Name" : "John",
    "Age" : 25,
    "Eyes" : "blue"
}

function getInfo() {
    for(let i in user) {
        console.log(i +" : " + user[i]);
    }
}

function addNewProperty(newProperty) {
    user.newProperty = newProperty;
}

getInfo();
addNewProperty("male");
getInfo();
