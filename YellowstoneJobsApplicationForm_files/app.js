$(document).ready(function () {

    $("select#isFelony").on("change",calculate );
    $("select#isPrevEmploy").on("change",calculate);
    $("button#nextButton").on("click", makeToast);
    $("button#backButton").on("click",backButton);
    $("select#isTitlePicked").on("change", fillTitle);
    $("*").on("change",goGreen);
    $("button#contButton").on("click" , loadWorkHist);
});

function goGreen(){
    let isFelon = $("#isFelony").val();
    let isPrevEmplo = $("#isPrevEmploy").val();
    let titlePicked = $("#isTitlePicked").val();
    if (isFelon != null  && isPrevEmplo != null && titlePicked != null){
        $("button#nextButton").css('background', '#15e774');
    } else {
        (isFelon == null  || isPrevEmplo == null || titlePicked == null)
        $("button#nextButton").css('background', '#e71534');}
}

function makeToast(){
    let isFelon = $("#isFelony").val();
    let isPrevEmplo = $("#isPrevEmploy").val();
    let titlePicked = $("#isTitlePicked").val();
    $("p#oPut").text(`${isFelon}${isPrevEmplo}${titlePicked}` );
    if (isFelon == null  || isPrevEmplo == null || titlePicked == null){
        $('#toast').toast({ autohide: false }).toast('show');
    } else {
        $("div#landingPage").hide();
        $("div#homePage").show();
        $("div#appForm").show();
        $("button#nextButton").hide();
        $("button#contButton").show();
        // $("button#submitButton").hide();
    }
}


function calculate()
{
//Gather Information//
    let isFelon = $("#isFelony").val();
    let isPrevEmplo = $("#isPrevEmploy").val();
//output//
    if (isFelon == 1){
        $("#crimeForm").show();
    }else {
        $("#crimeForm").hide();
    }
    if (isPrevEmplo == 1){
        $("#employForm").show();
    }else {
        $("#employForm").hide();
    }
}

function backButton() {
    $("div#landingPage").show();
    $("div#homePage").hide();

}

function fillTitle (){
    //gather//
    let pickedTitle = $("#isTitlePicked").val();
    //output//
    $("span#jobTitle").text("Filling application for " + pickedTitle);

}
function loadWorkHist (){
    $("div#landingPage").hide();
    $("div#homePage").hide();
    $("div#appForm").hide();
    $("button#nextButton").hide();
    $("button#contButton").hide();
    $("button#submitButton").show();
    $("div#workHist").show();
}

// $("button#nextButton").css('background', '#15e774');
