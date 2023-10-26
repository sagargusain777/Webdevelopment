
// const name=prompt("What is your Name","Sagar")
// console.log(`You are doing amaing ${name}`)

//querySelector
//-class name
//-tag name
//-id name


//querySelector- tagName
const data =document.querySelector("p")
// console.log(data.innerText)
// const body =document.querySelector("body")
// console.log(body)
// console.log(body.innerHTML)
// console.log(body.innerText)

//Manipulating Data
// body.innerHTML="<h1>You are Currently out of Memory</h1>"

//querySelector- Using Id
const username=document.querySelector("#username")
// console.log(username.innerHTML);
// username.innerText = "Anshul Jubli";
// username.innerHTML="<mark>Kookie</mark>"




//querySelector --Using Class
const  ele =document.querySelectorAll(".block")
console.log(ele)
ele.forEach( function(value){
    console.log(value.innerHTML)
}
    
)
ele.forEach( function(value){
    console.log(value.innerText)
}
    
)