// ==================================== JS for mobile navbar --------------------==================== 


let bars=document.querySelector(".three-bars");
bars.addEventListener("click",()=>{
 document.querySelector(".navbar").classList.toggle("mb-nan-visible");
})


// --------=====----------------===----------- JS for job sections -------------------------===================== 

let allJob = document.querySelector("#all-job");
let webDev = document.querySelector("#web-development");
let android = document.querySelector("#Android");
let dataScience = document.querySelector("#data-science");
let alljobLink = document.querySelector(".all-category .link-one");
let androidLink = document.querySelector(".all-category .link-two");
let webdevLink = document.querySelector(".all-category .link-three");
let datascienceLink = document.querySelector(".all-category .link-four");


webdevLink.addEventListener("click",(e)=>{
  e.preventDefault();
  android.style.display="none"
  dataScience.style.display="none"
  allJob.style.display="none"
  webDev.style.display="block"

})


androidLink.addEventListener("click",(e)=>{
    e.preventDefault();
    webDev.style.display="none"
    dataScience.style.display="none"
    allJob.style.display="none"
    android.style.display="block"
   
  })

  datascienceLink.addEventListener("click",(e)=>{
    e.preventDefault();
    android.style.display="none"
    webDev.style.display="none"
    allJob.style.display="none"
    dataScience.style.display="block"
   
  })