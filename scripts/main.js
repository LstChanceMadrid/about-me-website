const activateTab = (selectedTab, selectedTabBody, inactiveTabOne, inactiveTabOneBody, inactiveTabTwo, inactiveTabTwoBody) => {
    document.getElementById(selectedTab).style.background = "rgba(150, 150, 150, 0.5)";
    document.getElementById(selectedTabBody).style.display = "block";
    document.getElementById(inactiveTabOne).style.background = "rgb(236, 17, 17)";
    document.getElementById(inactiveTabOneBody).style.display = "none";
    document.getElementById(inactiveTabTwo).style.background = "rgb(236, 17, 17)";
    document.getElementById(inactiveTabTwoBody).style.display = "none";
}