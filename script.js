// console.log(2* 5)
// console.log(89008) 
// a= 4;
// b= 5;
// c= a + b;
// console.log(c)
// let a = 10;
// let b = 6;
// let c = a + b;
// console.log(c)

// let m = 10;
// let n = 2;
// let o = m % n;
// let p = ('the answer is')
// console.log(p, o);


// let e = 7;
// let f = 8;
// let g = e + f;
// let h = ('the final result is')
// console.log(h, g)

// let a = 4;
// let b = 5;
// let c = ('the final result is')
// let d = a ** b;
// console.log(c, d)


// let i = 5;
// let j =  2;
// let k = ('the answer is ')
// let l = i - j;
// console.log(k, l)
// the above are arithematic operator. anything inside a quote is a string

// let a = 2;
// let b = 3;
// // console.log(a === b)
// console.log(a >= b)
// let regemail = 'a@b.com';
// let regpassword = 12345;
// console.log(regemail == 'a@b.com' && regpassword == 12345)
// let login = true
// console.log(!login)

// let a = 2
// a/=3
// console.log(a)

 //let a = Math.PI  //this gives us the value of pi constant for calculating area of a circle

 //let b = Math.tan(60) for angle
 //let c = Math.cbrt(64)
// let d = Math.ceil(19.8) //for rounding up to whole number
 //let e = Math.floor(19.8)

 //let c = Math.round(19.5) convert to number to nearest integer

 //let c = Math.random() *100
 //d = Math.round(c)
 //d = Math.min(10, 30,6)
//console.log(d)
//a = 100
//datatype = typeof(a)
// console.log(datatype);

// let person1 = {
//     name: "Queen",
//     skin: "fair",
//     age: 1,
//     savings: 3000
// }
// person1.savings+= 6000
// console.log(person1);
// let car1 ={
//     brand: 'toyota',
//     name: 'camry',
//     color: 'red',
// }

// console.log(car1.color)
// the above is object type of complex

//let data = [1,2,3,4,5, "hi", true]
//console.log(data[3])
//the above is array type of complex data

// let products = [
//     {item: "shoe", color: "red",size: 42, image: ""},
//     {item: "bag", color: "black", size: "md", image: ""},
// ]

// console.log(products);
// let instafeed = [
//     1,
//     {name: "mhiz queen", date: "25th", time:"6:10pm", image: "img1.jpg"},
//     {name: "mhiz queen", date: "26th", time:"12:10pm",image: "img2.jpg"},
//     {name: "mhiz queen", date: "30th", time:"1:am", image: "img3.jpg"},
// ]

// console.log(instafeed[2].date)


let num = [1,2,3,4,5]
//let total = num.length //total number of itemin tbe array
//console.log(total);
//num.pop() it remove the last item in the array
//num.shift() it remove the first item
//num.push(89) it add to the end of array
//num[3]= "smile"  //to override a number
//num.unshift(20) add towards the start
//let data = num.toString() to string representation of array
//let data = num.join("+")
//let data = num.slice(0,2)
//let data = num.splice(2,3)
//let data = num.includes(4)
//console.log(data);

//for(let i =0; i< 20; i++){
    //let num = Math.random()*20
   // console.log(Math.round(num));
    //console.log(i);
//}
// for(let i =5; i > 0; i--){
//     console.log(i);
// }
// let a = 0;
// while(a < 10){
//     console.log(a)
//     a++
// }
// let b = 0
// do{
//     console.log(b);
//     b++
// }while(b<10)
//let score = 79
//if(score >= 75){
 //   console.log("excellent");
// }else if(score < 75){
//     console.log("good");
// }else if(score < 40){
//     console.log("fail")
// }
//for(let i = 0; i < 10; i++){
    // console.log("hello world");
   // console.log("will you marry me")
//}
// let score = prompt("enter score for the student")
// //alert(score)
// if(score >= 75){
//     alert("A")
// }else if (score < 75 && score >= 60){
//     alert("B")
// }else if (score < 60 && score>= 50){
//     alert("C")
// }else if(score < 50 && score >= 40){
//     alert("D")
// }else if (score < 40 && score >= 30){
//     alert("E")
// }else {
//     alert("F")
// }


// >= 75 A 
// < 75 && >=60 B
// <60 && >=50 C
// < 50 && >= 40 D
// else E

// let day = prompt("enter weekday i.e monday")
// switch(day){
//     case "monday":
//         alert("today is monday")
//         break;
//     case "tuesday":
//        alert("today is tuesday")
//         break;
//     case "wednesday":
//         alert("today is wednesday")
//           break;
//    case "thursday":
//        alert("today is thursday")
//       break;
//   case "friday":
//          alert("fun is about to start")
//                  break;
//   case "saturday":
//         alert("weekend is about to start and is party time")
//         break;
//     default:
//         alert("looking forward to the weekend")
//         break;    

// }
// function addTwoNumber(a,b){
//     let result = a + b
//     console.log(result)
// }
// addTwoNumber(6,7)
// function checkuserage(){
//     let age = prompt("how old are you")
//     if(age >= 18){
//         alert("you are free to drive")
//     }else{
//         alert("wait till you are 18")
//     }
// }
// checkuserage()
 
// function circle(){
//     let r = prompt("enter the radius of the circle")
//     let a = 3.142*r **2
//     alert(a)
// }

// circle()
// function add(){
//     let a= parseInt(prompt("enter first number"))
//     let b = parseInt(prompt("enter second number"))
//     let c = parseInt(prompt("enter third number"))
//     let result = a * b * c
//     alert(result)
// }
// add()

// function moneyconversion(){
// let from = prompt("from what currency")
// let to = prompt("to what currency")
// let amt = parseInt(prompt("enter the amount to convert"))

//     if(from == "naira" && to == "dollar"){
//         alert(amt/ 1000);

//     }else if(from == "dollar" && to == "naira"){
//         alert(amt *1000);

//     }else if(from == "pounds" && to == "naira"){
//         alert(amt *1300);

//     }else if(from == "naira" && to == "pounds"){
//         alert(amt / 1300);

//     }else{
//         alert("that exchange is not available at the amount");
//     }
// }

// moneyconversion()

// //setTimeout(function(){
//    // moneyconversion("pounds", "naira", 1000)
// //}, 5000)

// let data = []
// function pushnumbertoarray(){
//     let num1 =parseInt(prompt("enter a number"))
//     let operator = prompt("enter the operator")
//     let num2 = prompt("enter a number")

//     data.push(num1)
//     data.push(operator)
//     data.push(num2)

//     result = data.join("")
//     console.log(eval(result));
// }
// pushnumbertoarray()
// for(let i = 0; i < 10; i++){
//     pushnumbertoarray()
// }

// let data = [1,2,3,4,5]
// let result = data.reverse()
// console.log(result);

function greeting(){
    let name = prompt("enter your name")
    alert("wecome " + name)
}
//let a = document.getElementById("test")
//console.log(a);
//let b = document.getElementsByTagName("button")
//console.log(b);
//let a = document.getElementsByClassName("testclass")
//console.log(a);
//let a = document.querySelectorAll(".testclass")
//let a = document.head.lastElementChild
//let a = document.body.lastElementChild
// let a = document.getElementById("bay")
// let b = document.getElementById("text")
//a.onclick = function(){
//b.remove()
//}
// a.onclick = function(){

//     b.style.backgroundColor = "green"
//     b.style.padding = "2rem"
//     b.style.transform = "skew(30deg)"
//     b.style.transition = "all 5s ease-in-out"
    
// }
// a.ondblclick = function(){
//     // b.style.backgroundColor = "yellow"
//     // b.style.transform = "skew(-30deg)"

//     let newelement = document.createElement("img")
//     newelement.setAttribute("alt", "this is image")
//     newelement.setAttribute("src","./map.png")
//     newelement.style. width = "15rem"
//       newelement.style.height = "7rem" 
   //newelement.setAttribute("width", 50)
   //newelement.setAttribute("height", 50)
   // console.log(newelement);
   //document.body.appendChild(newelement)
//}
//console.log(a);
//a.onclick = function(){
   // alert("Ndewo")
//}

//let a = document.getElementById("text")
//a.onkeyup = function(){
  //  alert("hello world")
//}
//let a = document.getElementById("text")
//a.onkeyup = function(){
  //  a.remove()
//}
//let he =  document.getElementById("bay")
//let she = document.getElementById("text")

//he.onclick = function(){
  //she.classList.add("ngozi")
  //she.classList.remove("tasteclass")
  //she.classList.toggle("a")
  //console.log(she);
//}

// let a = document.getElementById("btn")
// let ul = document.querySelector("ul a")
// ul.classList.toggle("ctrl")
// a.onclick = function(){

  //alert("hello nne")

//}
//let a = document.getElementById("btn")
//let b = document.getElementById("about").innerHTML

//a.onclick = function(){
  //let b = document.querySelector("#gas").value
 // console.log(b);
//}
let counter = 0;
let display = document.getElementById("hug")
let love = document.getElementById("joy")
let sub = document.getElementById("sub")
display.innerText = counter

love.onclick = function(){
  counter = counter +1
  display.innerText = counter
}
sub.onclick = function(){
  counter = counter -1
  display.innerText = counter
}