function search() {
	focus();
	document.getElementById(array[0]).innerHTML="";
	document.getElementById(array[1]).innerHTML="";
	document.getElementById(array[2]).innerHTML="";
	document.getElementById(array[3]).innerHTML="";
	document.getElementById(array[4]).innerHTML="";	
    var pos=0;
    var x = document.getElementById("myText").value.toLowerCase();
    for(var i=0;i<Character.length;i++){
     if (Character[i].toLowerCase().includes(x) && x!="") {
     //In the array!
     document.getElementById(array[pos]).setAttribute("href","characters.html#"+Character[i]);
     document.getElementById(array[pos]).innerHTML=Character[i];
     pos++;
     if(pos==5){
     pos=0;
     }     
     } else {
     //Not in the array
     document.getElementById(array[pos]).setAttribute("href",x);
     document.getElementById(array[pos]).innerHTML="";
     }
}
	if(x==""){
		document.getElementById(array[0]).innerHTML="";
		document.getElementById(array[1]).innerHTML="";
		document.getElementById(array[2]).innerHTML="";
		document.getElementById(array[3]).innerHTML="";
		document.getElementById(array[4]).innerHTML="";
	}
	
	if(document.getElementById(array[0]).innerHTML==""){
		document.getElementById(array[0]).setAttribute("href",document.getElementById(array[1]).getAttribute("href"));
		document.getElementById(array[0]).innerHTML=document.getElementById(array[1]).innerHTML;
		document.getElementById(array[1]).innerHTML="";
	}
	if(document.getElementById(array[1]).innerHTML==""){
		document.getElementById(array[1]).setAttribute("href",document.getElementById(array[2]).getAttribute("href"));
		document.getElementById(array[1]).innerHTML=document.getElementById(array[2]).innerHTML;
		document.getElementById(array[2]).innerHTML="";
	}
	if(document.getElementById(array[2]).innerHTML==""){
		document.getElementById(array[2]).setAttribute("href",document.getElementById(array[3]).getAttribute("href"));
		document.getElementById(array[2]).innerHTML=document.getElementById(array[3]).innerHTML;
		document.getElementById(array[3]).innerHTML="";
	}
	if(document.getElementById(array[3]).innerHTML==""){
		document.getElementById(array[3]).setAttribute("href",document.getElementById(array[4]).getAttribute("href"));
		document.getElementById(array[3]).innerHTML=document.getElementById(array[4]).innerHTML;
		document.getElementById(array[4]).innerHTML="";
	}
	
	for( var j=0;j<array.length;j++){
	if(document.getElementById(array[j]).innerHTML.toLowerCase().includes(x)==false){
		document.getElementById(array[j]).innerHTML="";
	}
	}
}
