M.AutoInit();

function AddText(text) {
    var currentValue = document.getElementById("calcscreen").value;
    document.getElementById("calcscreen").value = currentValue + text;
}

function DeleteText(clearOrDel) {
    if (clearOrDel) {
        document.getElementById("calcscreen").value = "";
    }
    else {
        var currentValue = document.getElementById("calcscreen").value;
        var newValue = currentValue.substring(0, currentValue.length-1);
        document.getElementById("calcscreen").value = newValue;
    } 
}

// function Calculate() {
//     var currentValue = document.getElementById("calcscreen").value;
//     currentValue = currentValue.replace("×", "*");
//     currentValue = currentValue.replace("÷", "/");
//     var newValue = Number(currentValue); Hahahah ga bisa gini boy
//     document.getElementById("calcscreen").value = newValue;
// }