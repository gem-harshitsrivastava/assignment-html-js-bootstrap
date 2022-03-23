var keyid=0;
var info=[];
var table=document.createElement("table");
createTable();
//localStorage.clear();
console.log("-"+localStorage.length)
console.log(info);
bringData();
function bringData(){
    console.log(keyid);
    for(var i=0;i<localStorage.length/3;i++){
        var arr=[]
        arr[0]=window.localStorage.getItem("name"+i);
        arr[1]=window.localStorage.getItem("email"+i);
        arr[2]=window.localStorage.getItem("phone"+i);
        info[i]=arr;
    }
    tableData();
}
function saveData(){
    event.preventDefault();
    validate();
   var uname=document.getElementById('uname').value;
   var uemail=document.getElementById('uemail').value;
   var uphone=document.getElementById('uphone').value;
   window.localStorage.setItem("name"+keyid,uname);
   window.localStorage.setItem("email"+keyid,uemail);
   window.localStorage.setItem("phone"+keyid,uphone);
   
   ++keyid;
  
    var tr=document.createElement("tr");
    
    var trText=document.createTextNode(uname);
    var td=document.createElement("td");
    td.style.border="1px solid";
    td.append(trText);
    console.log(td); 
    tr.append(td);   
    var trText=document.createTextNode(uemail);
    var td=document.createElement("td");
    td.style.border="1px solid";
    td.append(trText);
    console.log(td); 
    tr.append(td);
    var trText=document.createTextNode(uphone);
    var td=document.createElement("td");
    td.style.border="1px solid";
    td.append(trText);
    console.log(td); 
    tr.append(td);
    table.appendChild(tr);
    console.log(table)
    //fetchData();
}

function fetchData(){
    event.preventDefault();
    console.log(keyid);
    
    for(var i=0;i<keyid;i++){
        a=[]
        var n=window.localStorage.getItem("name"+i);
        var e=window.localStorage.getItem("email"+i);
        var p=window.localStorage.getItem("phone"+i);
        a[0]=n;a[1]=e;a[2]=p;
        info[i]=a;
        //console.log(i+""+n+" "+e+" "+p);
    }
    console.log(info);
    //tableData();
    
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
    
    for(let i in info){
        var tr=document.createElement("tr");
        for(let j in info[i]){
        var trText=document.createTextNode(info[i][j]);
        var td=document.createElement("td");
        
        td.style.border="1px solid";
            td.append(trText);
            console.log(td); 
            tr.append(td);   
        }
        table.appendChild(tr);
    }
}
function validate(){
   var uname=document.getElementById('uname').value;
   var uemail=document.getElementById('uemail').value;
   var uphone=document.getElementById('uphone').value;
   if(uname==""){
    alert("No Name Provided");
   }
   inputAlphabet(uname,"Invalid NAME")
    if(uemail==""){
    alert("No Email Provided");
   }else if(uphone==""){
    alert("No Phone Provided");
   }else if(uphone.length!=10){
    alert("Invalid Phone Provided");
   }
}
function inputAlphabet(inputtext, alertMsg){
    var alphaExp = /^[a-zA-Z]+$/;
    if(inputtext.match(alphaExp)){
    return true;
    }else{
    alert(alertMsg);
    inputtext.focus();
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
    