function search() {
	
	if(document.getElementById(array[0]).innerHTML==""){
	document.getElementById(array[0]).innerHTML=document.getElementById(array[1]).innerHTML;
	document.getElementById(array[1]).innerHTML="";
	}
	if(document.getElementById(array[1]).innerHTML==""){
	document.getElementById(array[1]).innerHTML=document.getElementById(array[2]).innerHTML;
 	document.getElementById(array[2]).innerHTML="";
	}
		
    var pos=0;
    var x = document.getElementById("myText").value;
    for(var i=0;i<arr.length;i++){
     if (arr[i].includes(x) && x!="") {
     //In the array!
     document.getElementById(array[pos]).setAttribute("href",x);
     document.getElementById(array[pos]).innerHTML=arr[i];
     pos++;
     if(pos==3){
     pos=0;
     }
     if(document.getElementById(array[0]).innerHTML.includes(x)=false){
     document.getElementById(array[0]).innerHTML="";
     }	     
     if(document.getElementById(array[1]).innerHTML.includes(x)=false){
     document.getElementById(array[1]).innerHTML="";
     }	
     if(document.getElementById(array[2]).innerHTML.includes(x)=false){
     document.getElementById(array[2]).innerHTML="";
     }	
	     
     } else {
     //Not in the array
     document.getElementById(array[pos]).setAttribute("href",x);
     document.getElementById(array[pos]).innerHTML="";
     }
}
}
