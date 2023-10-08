function contactTo(){
    var name = document.getElementById("autoSizingInput").value;
    var mail = document.getElementById("autoSizingInputGroup").value;
    var ser = document.getElementById("autoSizingSelect").value;

    name = name.replace(/\s/g,"%20");
    ser = ser.replace(/\s/g,"%20");

    var url = "https://wa.me/+919823891852?text="+name+"%0a"+mail+"%0a"+ser;
    window.open(url , "_blank");
}
function getQuote(ser){
    ser = ser.replace(/\s/g,'%20');
    var url = "https://wa.me/+919823891852?text=I%20Want%20To%20Know%20More%20About%20+"+ser;
    window.open(url , "_blank");
}
