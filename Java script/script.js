            var x=2;
            let y=2;
            console.log(x+y);
            function sayhello(){
                alert("hello from function")
            } 
            function sum(x,y){
                return x+y;

            }
            sayhello()
            console.log(sum(2,2))
            let age =18;
if(age>=18){
    console.log("you are adult")
}
else{
    console .log("you are minor")
}
let i=1;
for(leti=0;i<10;i++){
    console.log(i);
}

let j=1;
while(j<=5){
    console.log(j)
    j++;
}
function changetext(){
    let title=document.getElementById('title')
    title.innerText="new text!"
    

}