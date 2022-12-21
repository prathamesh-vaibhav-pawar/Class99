var Speech = window.webkitSpeechRecognition
var Recognition = new Speech

function TakePhoto(){
    document.getElementById("Text_area").innerHTML = " "
    Recognition.start()
}

Recognition.onresult = function(event){
    console.log(event)
    var Output = event.results[0][0].transcript
    document.getElementById("Text_area").innerHTML = Output
    if(Output == "Selfie"){

    }
}