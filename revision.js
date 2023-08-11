
function sum(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var c = parseInt(a) + parseInt(b);
    console.log(c);
    var d = document.getElementById("res")
d.innerText=`${c}`;
}

function sube(){
    var e=document.getElementById("sub1").value;
    var f=document.getElementById("sub2").value;
    var g=parseInt(e)-parseInt(f);  
    var i= document.getElementById("subbtn")
    i.innerText=`${g}`;
    
}

