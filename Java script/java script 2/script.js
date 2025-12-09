document.getElementById('demo') .innerText="hi from java script";
document.getElementById('demo') .innerHTML="<h1>Hello world</h1>"


function sumTwoNumbers(x,y){
console.log(x+y)

}
function aveTwoNumbers(x,y){
    console.log((x+y)/2)
}

// let x=10;
// var y=30;
// console.log(x+y)

sumTwoNumbers(10,30)
aveTwoNumbers(10,30)
var Person={
    FirstName:"Lidiya",
    LastName:"Fikadu",
    Age: 18,
    Gender:"Female",
    Adress:{
    country:"Ethiopia",
    City:"A.A",
    SubCtiy:"Bole",
    Woreda:3
    }
}
console.log(Person)
console.log(Person.Adress.SubCtiy)
console.log(Person.Age)

function changeColor(){
    document.getElementById('demo').style.color="red"
}
var names="abebe's "
console.log(names.trim())
console.log(names.concat("age"))
console.log(names.at(5))
console.log(names.length)
console.log(names.slice(3,5))


var num=23e4
console.log(num)

// Array

let arr=["Abebe","Kebede","Sara","Abel"]
arr.push=("Lidya")
arr.pop()

console.log(arr)
// console.log(arr[3])

let date=new Date();
let oldDate=new Date(2023,5,29)

console.log(date)
console.log(oldDate)
// maths
console.log(Math.round(4,5))
console.log(Math.pow(10,5))
console.log(!false)
console.log(1=="1")
console.log(true && false)
console.log(true || false)
console.log(((10>=9)&&(100==="100"))|| !(70<=20))

let zz=10<5 ? 100:50 

console.log(zz)

let age=12
console.log(age??"age not found")


let numbers= [1,2,3,45,67,89,362,125];

for(let number of numbers){
    console.log('the number' ,": ",[number])
}
for(let key in Person){

    console.log(key,":",Person[key])
}
let day= 8;

switch(day){
  case 1:
    console.log("Mon");
    break;
    case 2:
        console.log("Tus");
        break;
    case 3:
        console.log("Wend");
        break;
    case 4:
        console.log("Thu");
        break;
    case 5:
        console.log("Fri");
        break;
    case 6:
        console.log("Sat");
        break;
    case 7:
        console.log("Sun");
    break;
    default: 
    console.log("the day not found")
        
}
let i=0;
while(i<5){
    console.log("while loop :",i)
    i++;
}
for(let j=0; j<5;j++){
    console.log("for loop :",j)

}
const students=[
{id: 1, name:"Elshaday", Gender: "Male",score:[99,98,97]},
{id: 2, name:"Tselote", Gender: "Male",score:[99,98,97]},
{id: 3, name:"Israel", Gender: "Male",score:[99,98,97]},
{id: 4, name:"Mesay", Gender: "Male",score:[99,98,97]},
{id: 5, name:"Atsede", Gender: "Female",score:[99,98,97]},
{id: 6, name:"Lidya", Gender: "Female",score:[99,98,97]},
]
console.log(students[5].name)
students[5].name="Fikadu";
console.log(students[5].name)
 
students.forEach(function(student){

    console.log(student.Gender);

    student.score.forEach((s)=>{
        console.log(s);
    })
 })
 const h1=document.querySelector(".first-class")

 h1.style.color='red'

//   h1.className="Test"

 const newDiv=document.createElement('div');
 newDiv.innerText= 'newdiv from javascript';
 document.body.appendChild(newDiv)

//  document.getElementById('btn') .addEventListener('click',(e)=>{
//     h1.style.color="blue";
//  });
$('#btn').click(function(){

    h1.style.color='blue';
})
// $('#btn').hide()
$('#btn').slideUp()


$('#Box').css('width','200px')
.css('height','200px')
 .css('background-color','hotpink')
 .slideUp(2000)
 .slideDown(2000)