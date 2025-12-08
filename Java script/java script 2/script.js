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

