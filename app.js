let email = "solangitv@gmail.com"
let pass = "designneverdie"
var emailinput = document.getElementById("emailinput")
var passinput = document.getElementById("passinput")
var next = document.getElementById("next")
var span1 = document.getElementById("span1")
function signin(){
    if (email === emailinput.value){
        window.location = "index2.html";
            //     next.innerHTML = window.open("index2.html")
    //   window.location = "index2.html";
    // console.log(signin)

}
    else {
        document.getElementById("span1").style.display = "block";    
    }
}


function password(){
    if (pass === passinput.value){
        window.location = "welcome.html";
    }
    else{
        document.getElementById("span2").style.display = "block";    

    }
}