var settingsmenu = document.querySelector(".nav__dropdown");
var darkBtn = document.getElementById("btn-dark");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("nav__dropdown-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("btn-dark-on");
    document.body.classList.toggle("dark-theme");



    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}



if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("btn-dark-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("btn-dark-on");
    document.body.classList.add("dark-theme");
}
else{
localStorage.setItem("theme", "light");
}

