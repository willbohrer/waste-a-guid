window.onload = init;

var GUIDElement;
var button;

function init() {
    GUIDElement = document.getElementById("GUID");
    button = document.getElementById("GenerateGUID");

    generateGUID();
}

function generateGUID() {
    GUIDElement.innerText = crypto.randomUUID();
}