// mobile navigation ---------------------------------------
let bars=document.querySelector(".three-bars");
bars.addEventListener("click",()=>{
 document.querySelector(".navbar").classList.toggle("mb-nan-visible");
})


// ============================================= slider section ================================= 

function first(){
    document.getElementById("img-tag").src="../images/Netflix4.jpg";

    }
    function second(){
    
    document.getElementById("img-tag").src="../images/meta3.jpeg";
    
    } 
    function third(){
    document.getElementById("img-tag").src="../images/Google2.jpg";
    }  

    setInterval(first,2000);
    setInterval(second,4000);
    setInterval(third,6000);