function search() {
		
    var pos=0;
    var x = document.getElementById("myText").value.toLowerCase();
    for(var i=0;i<Character.length;i++){
     if (Character[i].toLowerCase().includes(x) && x!="") {
     //In the array!
     document.getElementById(array[pos]).setAttribute("href",x);
     document.getElementById(array[pos]).innerHTML=Character[i];
     pos++;
     if(pos==3){
     pos=0;
     }     
     } else {
     //Not in the array
     document.getElementById(array[pos]).setAttribute("href",x);
     document.getElementById(array[pos]).innerHTML="";
     }
}
}
