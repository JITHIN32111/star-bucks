function buttenclick(val){
    console.log(val)
    document.getElementById("screen").value+=val;
}

function cleardDisplay(){
    document.getElementById("screen").value="";
}
function equalclick(){

    var text=document.getElementById("screen").value
var result=eval(text)
document.getElementById("screen").value=result
}