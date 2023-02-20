var btnTranslate = document.querySelector("#btn-translate");
var btnClear = document.querySelector("#btn-clear");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
    console.log("url fetched");
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);

function clickClearHandler() {
    console.log("clear")
    // var inputText = txtInput.value;
    txtInput.value = " " ;
    outputDiv.value = " " ;
}

btnClear.addEventListener("click", clickClearHandler, false );

// function clear()
// {   
//    document.getElementById("btn-clear").reset();
// }




// -- basic code ---
// var url = "https://api.funtranslations.com/translate/minion.json?text=I am Inshirah";

// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json));

// -- OP in console ---

// {success: {…}, contents: {…}}
// contents: 
// text: "I am Tanay"
// translated: "ka am Tanay"
// translation: "minion"
// [[Prototype]]: Object
// success: {total: 1}
// [[Prototype]]: Object

