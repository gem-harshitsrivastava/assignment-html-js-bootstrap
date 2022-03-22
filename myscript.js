var keyid=0;
createTable();
function saveData(){
    var uname=document.getElementById('uname').value;
   var uemail=document.getElementById('uemail').value;
   var uphone=document.getElementById('uphone').value;
   localStorage.setItem(""+keyid+"name",uname);
   localStorage.setItem(""+keyid+"email",uemail);
   localStorage.setItem(""+keyid+"phone",uphone);
   ++keyid;
   fetchData();
}
function fetchData(){
    var i=0;
    for(var i=0;i<keyid;i++){
    // document.write("--"+localStorage.getItem(i+"name"));
    // document.write("--"+localStorage.getItem(i+"email"));
    // document.write("--"+localStorage.getItem(i+"phone"));
    // document.write("--"+keyid);
    }
    
}
function createTable(){
    // var table=document.createElement("table");
    // console.log(document.body);
    // document.body.append(table);
    // table.style.border="1px solid";
    // table.style.width="80%";
    // const rows=['Name','Age','DOB','email','Company'];
    // for(let row in rows){
    //     var th=document.createElement("th");
    //     var thText=document.createTextNode(rows[row]);
    //     th.appendChild(thText);
    //     table.appendChild(th);
    //     th.style.border="1px solid";
    //     th.style.fontWeight="bold";
    // }
    
    
    
   // console.log(document.body.table);
     var tablem=document.createElement("table");
    // document.body.table.appendChild(tablem);
    // tablemain.appendChild(table);
    
    const rows=['Name','Age','DOB','email','Company'];
    for(let row in rows){
        var th=document.createElement("th");
        var thText=document.createTextNode(rows[row]);
        th.appendChild(thText);
       // table.appendChild(th);
        console.log(th);
        tablem.append(th);
        //table.append(th);
        th.style.border="1px solid";
        th.style.fontWeight="bold";
    }
    console.log(table);
    
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
    