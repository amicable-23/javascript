let bf = document.getElementById("button")
bf.onclick = function(){
let name = document.querySelector("#name").value
let email = document.querySelector("#Email").value
let password = document.querySelector("#password").value
let phone = document.getElementById("phone").value

let nameregex = /^[a-z]{3,}$/gi
let emailregex = /.{3,}@[a-z]{3,}\.[a-z]{2,}/gi
let phoneregex = /[\d]/gi
let passwordregex = /(?=.*[A-Z])(?=.*\d)(?=.*\W)/g


if(name === "" || email === "" ||  password === ""|| phone === ""){
alert("enter value for every field");

}else if(!nameregex.test(name)){
    alert("enter valid name");


}else if (!emailregex.test(email)){
    alert("enter valid email");

 
}else if (!phoneregex.test(phone)){
    alert("enter valid phone number");

}else if(! (password.length >= 7 && passwordregex.test(password) )){
    alert("enter valid password");

}else{
    let user= {
        thename: name,
        thepassword: password,
        theemail: email,
        thephone: phone
    }
    localStorage.setItem("user",JSON.stringify(user))
    alert("thanks for signing up");
}

}
let eyeopen = document.getElementById("eyeopen")
let eyeclose = document.getElementById("eyeclose")
let password =document.getElementById("password")
eyeopen.onclick = function(){
    this.style.display = "none"
    eyeclose.style.display = "inline-block"
    password.setAttribute("type","text")
}
eyeclose.onclick = function(){
    this.style.display = "none"
    eyeopen.style.display = "inline-block"
    password.setAttribute("type", "password")
}