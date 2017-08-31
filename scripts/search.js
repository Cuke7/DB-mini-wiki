function search() {
	focus();
	document.getElementById(array[0]).innerHTML="";
	document.getElementById(array[1]).innerHTML="";
	document.getElementById(array[2]).innerHTML="";
	document.getElementById(array[3]).innerHTML="";
	document.getElementById(array[4]).innerHTML="";	
	document.getElementById(array[5]).innerHTML="";	
	document.getElementById(array[6]).innerHTML="";	
    var pos=0;
    var x = document.getElementById("myText").value.toLowerCase();

     // --------------------------Offensive spheres-----------------------------
     for(var i=0;i<Offensespheres.length;i++){
     if (Offensespheres[i].toLowerCase().includes(x) && x!="") {
     //In the array!
     document.getElementById(array[pos]).setAttribute("href","spheres.html#"+Offensespheres[i]);
     document.getElementById(array[pos]).setAttribute("class","offense");
     document.getElementById(array[pos]).innerHTML=Offensespheres[i];
     pos++;
     if(pos==7){
     pos=0;
     }     
     } else {
     //Not in the array
     document.getElementById(array[pos]).setAttribute("href",x);
     document.getElementById(array[pos]).innerHTML="";
     }
}
     // --------------------------Defensive spheres-----------------------------
     for(var i=0;i<Defensespheres.length;i++){
     if (Defensespheres[i].toLowerCase().includes(x) && x!="") {
     //In the array!
     document.getElementById(array[pos]).setAttribute("href","spheres.html#"+Defensespheres[i]);
     document.getElementById(array[pos]).setAttribute("class","defense");
     document.getElementById(array[pos]).innerHTML=Defensespheres[i];
     pos++;
     if(pos==7){
     pos=0;
     }     
     } else {
     //Not in the array
     document.getElementById(array[pos]).setAttribute("href",x);
     document.getElementById(array[pos]).innerHTML="";
     }
}
     // --------------------------Support spheres-----------------------------
     for(var i=0;i<Supportspheres.length;i++){
     if (Supportspheres[i].toLowerCase().includes(x) && x!="") {
     //In the array!
     document.getElementById(array[pos]).setAttribute("href","spheres.html#"+Supportspheres[i]);
     document.getElementById(array[pos]).setAttribute("class","support");
     document.getElementById(array[pos]).innerHTML=Supportspheres[i];
     pos++;
     if(pos==7){
     pos=0;
     }     
     } else {
     //Not in the array
     document.getElementById(array[pos]).setAttribute("href",x);
     document.getElementById(array[pos]).innerHTML="";
     }
}

     // --------------------------Characters-----------------------------
     for(var i=0;i<Character.length;i++){
     if (Character[i].toLowerCase().includes(x) && x!="") {
     //In the array!
     document.getElementById(array[pos]).setAttribute("href","characters.html#"+Character[i]);
     document.getElementById(array[pos]).setAttribute("class","char");
     document.getElementById(array[pos]).innerHTML=Character[i];
     pos++;
     if(pos==7){
     pos=0;
     }     
     } else {
     //Not in the array
     document.getElementById(array[pos]).setAttribute("href",x);
     document.getElementById(array[pos]).innerHTML="";     
     }
}

     // --------------------------Basic units-----------------------------
     for(var i=0;i<Name.length;i++){
     if (Name[i].toLowerCase().includes(x) && x!="") {
     //In the array!
     document.getElementById(array[pos]).setAttribute("href","basic_units.html#"+Name[i]);
     document.getElementById(array[pos]).setAttribute("class","unit");
     document.getElementById(array[pos]).innerHTML=Name[i];
     pos++;
     if(pos==7){
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
		document.getElementById(array[5]).innerHTML="";
		document.getElementById(array[6]).innerHTML="";
	}
	for(var k=0;k<array.length-1;k++){
	 if(document.getElementById(array[k]).innerHTML==""){
		document.getElementById(array[k]).setAttribute("href",document.getElementById(array[k+1]).getAttribute("href"));
		document.getElementById(array[k]).innerHTML=document.getElementById(array[k+1]).innerHTML;
		document.getElementById(array[k]).setAttribute("class",document.getElementById(array[k+1]).getAttribute("class"));
		document.getElementById(array[k+1]).innerHTML="";
	 }
	}
	
	for( var j=0;j<array.length;j++){
	if(document.getElementById(array[j]).innerHTML.toLowerCase().includes(x)==false){
		document.getElementById(array[j]).innerHTML="";
	}
	}
}
