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
function loadElement(section, firstLoad){
    // Deletes previous "showing" information.
    if (!firstLoad){
        // Gathers the information of the previous Div.
        previousDiv = document.getElementById("referenceDiv").children[0];

        // Comparing ID.
        if (previousDiv.id == section){
            return;
        }

        // In case the ID is different the function continues.
        previousDiv.remove();        
    }

    // Creates the Div element.
    const informationDiv = document.createElement("div");
    informationDiv.id = section;
    
    // Gathers the required content (AJAX).
    $(function () {
        $("#"+section).load("/html/" + section + ".html");
    });

    // Inserts the information before the referenced Div (Empty Div).
    $('#referenceDiv').append(informationDiv)
}