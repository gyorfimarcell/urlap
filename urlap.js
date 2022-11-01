function kuld() {
    document.getElementById("nevSpan").innerHTML = document.getElementById("nev").value;
    document.getElementById("cimSpan").innerHTML = document.getElementById("cim").value;
    document.getElementById("telSpan").innerHTML = document.getElementById("tel").value;
}

function focusFunction(kuldo) {
    kuldo.style.backgroundColor = "lightSlateGray";
}

function blurFunction(kuldo) {
    kuldo.style.backgroundColor = "white";
}