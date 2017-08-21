Table tab;

tab = loadTable("data/char2.csv", "header");
TableRow row = tab.getRow(2);

void display(){
  document.getElementById(array[0]).innerHTML=row.getString(0);  
}
