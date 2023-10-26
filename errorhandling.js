
// let a = 8
// console.log(8);

// let b = 10
// console.log(b);
// try{
//     let a = 8
//     console.log(i),
// }catch(e){
//     console.log(e);
// }

//let b = 67
//console.log(b);
let today = new Date()

//let year = today.getFullYear()
//let month = today.getMonth()
//let minute = today.getMinutes()
//let second = today.getSeconds()
//let time = today.toDateString()
let time = today.toDateString()
console.log(time); 


let num = [1,2,3,4,5,6]

// num.forEach(function(a){
//     console.log(`the number is ${a}`);
// })

// num.map(function(a){
//     console.log(`the number is ${a}`);
// })

//let result = num.find((a)=> a ==4)
//console.log(result);

//let countries = ["finland", "netherland","nigeria","ghana", "poland"]

//let result = countries.filter((a)=> a.endsWith("land"))
//let result = countries.filter((a)=> a.startsWith("n"))
//console.log(result)
let result = num.sort((a,b) => b - a)
console.log(result);
