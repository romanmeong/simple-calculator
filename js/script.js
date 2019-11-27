M.AutoInit();

function AddText(value) {
    var currentValue = document.getElementById("calcscreen").value;
    document.getElementById("calcscreen").value = currentValue + value;
}

function DeleteText(clearOrDel) {
    if (clearOrDel) {
        document.getElementById("calcscreen").value = "";
    }
    else {
        var currentValue = document.getElementById("calcscreen").value;
        var value = currentValue.substring(0, currentValue.length-1);
        document.getElementById("calcscreen").value = value;
    } 
}