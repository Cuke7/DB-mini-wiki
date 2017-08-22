
function search2() {
	document.getElementById(array2[0]).innerHTML="";
	document.getElementById(array2[1]).innerHTML="";
	document.getElementById(array2[2]).innerHTML="";
	document.getElementById(array2[3]).innerHTML="";
	document.getElementById(array2[4]).innerHTML="";	
    var pos=0;
    var x = document.getElementById("myText2").value.toLowerCase();
    for(var i=0;i<Name.length;i++){
     if (Name[i].toLowerCase().includes(x) && x!="") {
     //In the array!
     document.getElementById(array2[pos]).setAttribute("href","basic_units.html#"+Name[i]);
     document.getElementById(array2[pos]).innerHTML=Name[i];
     pos++;
     if(pos==5){
     pos=0;
     }     
     } else {
     //Not in the array
     document.getElementById(array2[pos]).setAttribute("href",x);
     document.getElementById(array2[pos]).innerHTML="";
     }
}
	if(x==""){
		document.getElementById(array2[0]).innerHTML="";
		document.getElementById(array2[1]).innerHTML="";
		document.getElementById(array2[2]).innerHTML="";
		document.getElementById(array2[3]).innerHTML="";
		document.getElementById(array2[4]).innerHTML="";
	}
	
	if(document.getElementById(array2[0]).innerHTML==""){
		document.getElementById(array2[0]).setAttribute("href",document.getElementById(array2[1]).getAttribute("href"));
		document.getElementById(array2[0]).innerHTML=document.getElementById(array2[1]).innerHTML;
		document.getElementById(array2[1]).innerHTML="";
	}
	if(document.getElementById(array2[1]).innerHTML==""){
		document.getElementById(array2[1]).setAttribute("href",document.getElementById(array2[2]).getAttribute("href"));
		document.getElementById(array2[1]).innerHTML=document.getElementById(array2[2]).innerHTML;
		document.getElementById(array2[2]).innerHTML="";
	}
	if(document.getElementById(array2[2]).innerHTML==""){
		document.getElementById(array2[2]).setAttribute("href",document.getElementById(array2[3]).getAttribute("href"));
		document.getElementById(array2[2]).innerHTML=document.getElementById(array2[3]).innerHTML;
		document.getElementById(array2[3]).innerHTML="";
	}
	if(document.getElementById(array2[3]).innerHTML==""){
		document.getElementById(array2[3]).setAttribute("href",document.getElementById(array2[4]).getAttribute("href"));
		document.getElementById(array2[3]).innerHTML=document.getElementById(array2[4]).innerHTML;
		document.getElementById(array2[4]).innerHTML="";
	}
	
	for( var j=0;j<array2.length;j++){
	if(document.getElementById(array2[j]).innerHTML.toLowerCase().includes(x)==false){
		document.getElementById(array2[j]).innerHTML="";
	}
	}
}
