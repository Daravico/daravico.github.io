// ---------------------------
// *** Loading the header. ***
// ---------------------------
$(function () {
    $("#headerSpace").load("/components/head.html");
});

// ---------------------------
// *** Element removal. ***
// ---------------------------
function removeElement(id){
    elementInfo = document.getElementById(id);
    elementInfo.remove();
}

// ---------------------------
// *** Element insertion. ***
// ---------------------------
function loadElement(section){
    // Label of the Div where the information is placed.
    const label = "showing";

    // Deletes previous "showing" information.
    removeElement("showing");

    // Creates the Div element.
    const informationDiv = document.createElement("div");
    informationDiv.id = label;
    
    // Gathers the required content (AJAX).
    $(function () {
        $("#"+label).load("/html/" + section + ".html");
    });

    // Inserts the information before the referenced Div (Empty Div).
    const currentDiv = document.getElementById("referenceDiv");
    document.body.insertBefore(informationDiv, currentDiv);
}