let profile=document.querySelector(".setting_menu");
let dark_mode=document.getElementById("dark-btn");
let settingmenutoggle=()=>{
    profile.classList.toggle("new_height");
}
dark_mode.onclick=()=>{
    dark_mode.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}
if(localStorage.getItem("theme")==="light")
{
    
}
localStorage.setItem("theme","dark");
