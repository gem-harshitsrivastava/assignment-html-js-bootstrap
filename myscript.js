var info=[];
var table=document.createElement("table");
createTable();
bringData();
function bringData(){
    console.log("("+localStorage.length)
    if(localStorage.length!=0){
    info=[localStorage.getItem("name"),localStorage.getItem("email"),localStorage.getItem("phone")];
    console.log("!"+info);
    tableData();
    }
}
function saveData(){
   event.preventDefault();
   var uname=document.getElementById('uname').value;
   var uemail=document.getElementById('uemail').value;
   var uphone=document.getElementById('uphone').value;
   localStorage.setItem("name",uname);
   localStorage.setItem("email",uemail);
   localStorage.setItem("phone",uphone);
  bringData();
}
function createTable(){
    var abcd=document.getElementById("abcd");
    abcd.append(table);
    table.style.border="1px solid";
    table.style.width="80%";
    const rows=['Name','Email','PhoneNo.'];
    for(let row in rows){
        var th=document.createElement("th");
        var thText=document.createTextNode(rows[row]);
        th.appendChild(thText);
        table.appendChild(th);
        th.style.border="1px solid";
        th.style.fontWeight="bold";
    }
}
function tableData(){

    var tr=document.createElement("tr");
    var trText=document.createTextNode(info[0]);
    var td=document.createElement("td");
    td.append(trText);
    tr.append(td); 
    var trText=document.createTextNode(info[1]);
    var td=document.createElement("td");
    td.append(trText);
    tr.append(td); 
    var trText=document.createTextNode(info[2]);
    var td=document.createElement("td");
    td.append(trText);
    tr.append(td); 
    table.appendChild(tr);
}
function validate(){
   var uname=document.getElementById('uname').value;
   var uemail=document.getElementById('uemail').value;
   var uphone=document.getElementById('uphone').value;
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   var alphaExp = /^[a-zA-Z]+$/;
   var f=0;
   var flag="";
   //inputAlphabet(uname,"Invalid NAME")
    if(uname=="" || !uname.match(alphaExp)){
        f=1;
        flag+="name ";
   }
   if (!uemail.match(mailformat)) {
        f=1;
        flag+="email  ";
  }
    if(uphone!=''){
       if(uphone.length!=10){
       f=1;
       flag+="phone ";
       }
   }
if(f==0){
   saveData();return true;
}
else{
  alert(flag+" Invalid");return false;
}
}
function inputAlphabet(inputtext, alertMsg){
    var alphaExp = /^[a-zA-Z]+$/;
    if(inputtext.match(alphaExp)){
    return true;
    }else{
    alert(alertMsg);
    
    return false;
    }
}
function textNumeric(inputtext, alertMsg){
    var numericExpression = /^[0-9]+$/;
    if(inputtext.value.match(numericExpression)){
    return true;
    }else{
    alert(alertMsg);
    inputtext.focus();
    return false;
    }
}
    