// alert(" Hey There I am Learning Javascript")
// const name =prompt("What is your name idiot","Sagar")
// alert(" Hey Babe "+ name +"You are not Idiot")

//querySelector
/* tag name
class .
id #

*/

//querySelector using Tag Name
const body = document.querySelector("body")
console.log(document.querySelector("body"))
// body.innerHTML="<h1>Hacked!!!</h1>"
/*
Important ->using Different Script file
When you use script tag Above the data in body
window.onload = function() {
    const body = document.querySelector("body");
    body.innerHTML = "<h1>Hacked!!!</h1>";
}
*/

console.log(body.innerHTML)

//Accessing the data inside tag and Displaying in  form of string
const divmaterial =document.querySelector("div")
console.log(divmaterial.innerHTML);


// const htmlmaterial = document.querySelector("html")
// console.log(htmlmaterial)
// const codematerial= document.querySelector("code")
// codematerial.innerHTML="alert(Hey i am working on a code)"


//querySelector using Id Name
const username = document.querySelector("#username")
// console.log(username.innerHTML) //Nothing Will come Beacause there is not html code inside it
console.log(username.innerText)
//Correct Way to change Text inside a tag
username.innerText ="Simran Singh"
console.log(username.innerText)


//querySelector using classname

const element =document.querySelector(".block")
console.log(element.innerHTML)

//Check the Children of tag
console.log(element.children)
// element.innerHTML="<h4>I am playing league of legends</h4>"



//querySelectorAll
const ele =document.querySelectorAll(".block")
console.log(ele)
function print (value){
    console.log(value);

}
// ele.forEach((e)=>(console.log(e.innerHTML)))
ele.forEach(print)