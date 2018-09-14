const activateTab = (selectedTab, selectedTabBody, inactiveTabOne, inactiveTabOneBody, inactiveTabTwo, inactiveTabTwoBody) => {
    document.getElementById(selectedTab).style.background = "rgba(150, 150, 150, 0.5)";
    document.getElementById(selectedTabBody).style.display = "block";
    document.getElementById(inactiveTabOne).style.background = "lightcoral";
    document.getElementById(inactiveTabOneBody).style.display = "none";
    document.getElementById(inactiveTabTwo).style.background = "lightcoral";
    document.getElementById(inactiveTabTwoBody).style.display = "none";
}

const turnRed = (id) => {
    document.getElementById(id).style.color = "red";
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}