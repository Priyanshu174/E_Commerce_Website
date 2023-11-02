 var menuBtn = document.getElementById("menu-btn");
 var closeBtn = document.getElementById("close-btn");

 menuBtn.addEventListener("click",()=>{
    document.getElementById("side-menu").style.display="block";
    menuBtn.style.display="none";
    closeBtn.style.display="block";
 })
 closeBtn.addEventListener("click",()=>{
    document.getElementById("side-menu").style.display="none";
    menuBtn.style.display="block";
    closeBtn.style.display="none";
 })