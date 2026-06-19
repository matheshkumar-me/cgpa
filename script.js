let subjects=[];


function addSubject(){

let sem=document.getElementById("sem").value;
let name=document.getElementById("subject").value;
let credit=Number(document.getElementById("credit").value);
let grade=Number(document.getElementById("grade").value);


subjects.push({
sem,
name,
credit,
grade,
point:credit*grade
});


display();

}


function display(){

let table=document.getElementById("table");

table.innerHTML="";


subjects.forEach((s,index)=>{

table.innerHTML+=`

<tr>

<td>${s.sem}</td>

<td>${s.name}</td>

<td>${s.credit}</td>

<td>${s.grade}</td>

<td>${s.point}</td>

<td>
<button onclick="deleteSubject(${index})">
Delete
</button>
</td>

</tr>

`;

});

}


function deleteSubject(index){

subjects.splice(index,1);

display();

}



function calculateCGPA(){

let totalPoint=0;
let totalCredit=0;


subjects.forEach(s=>{

totalPoint+=s.point;
totalCredit+=s.credit;

});


let cgpa=totalPoint/totalCredit;


document.getElementById("result").innerHTML=
"Your DOTE CGPA = "+cgpa.toFixed(2);

}
