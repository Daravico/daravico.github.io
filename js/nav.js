function openNav(){
    document.getElementById("mobile-menu").style.width = "100%"

}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%"
}

function showNav(section){
    loadElement(section, false);
    closeNav();
}