function finishLoading() {
    document.getElementById("loading").style.display = "none";
    center.style.display = "block";
}
function loading() {
    console.log("ran")
    var center = document.getElementById("center");
    center.style.display = "none";
    setTimeout(function(){finishLoading()},7500);

    addText("Welcome to Ulania");
    setTimeout(function(){addText(" > loading Socials")},1500);
    setTimeout(function(){addText(" > loading Bio")},1750);
    setTimeout(function(){addText(" > loading Stats")},2000);
    setTimeout(function(){addText(" > loading Preferences")},2250);
    setTimeout(function(){addTextNoBr(" > New User Detected.  Begin? ")},3500);
    setTimeout(function(){addTextNoBr("y")},5000);
    setTimeout(function(){addTextNoBr("e")},5150);
    setTimeout(function(){addText("s")},5300);
    setTimeout(function(){addText("Welcome")},5750);
    setTimeout(function(){html.className = "loaded";},2250);
}
function addText(string) {
    var theDiv = document.getElementById("loading");
    var content = document.createTextNode(string);
    theDiv.appendChild(content);
    theDiv.appendChild(document.createElement("br"));
}
function addTextNoBr(string) {
    var theDiv = document.getElementById("loading");
    var content = document.createTextNode(string);
    theDiv.appendChild(content);
}