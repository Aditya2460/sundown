const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function eleC(){
    var eleC=document.querySelector("#elem-container");
var fixed= document.querySelector("#fixed");
eleC.addEventListener('mouseenter',function(){
    fixed.style.display="block"
})
eleC.addEventListener('mouseleave',function(){
    fixed.style.display="none"
})

var elems= document.querySelectorAll(".elm");
elems.forEach(function(e){
     e.addEventListener("mouseenter",function(){
         var image = e.getAttribute("data-image");
         fixed.style.backgroundImage=`url(${image})`
    })
})
}

function swiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });  
}
function loaderAnimation(){
  var loader= document.querySelector(".loader");
setTimeout(function(){
  loader.style.top="-100%"
},4200)
}

eleC();
swiper();
loaderAnimation();


var manu= document.querySelector("nav .manu h3");
var b1=document.querySelector(".b1");
var navimg=document.querySelector("nav img")
var flag=0;
manu.addEventListener("click",function(){
  if(flag==0){

    b1.style.top="0%";
    navimg.style.opacity=0
    flag=1;
  }else{
    b1.style.top="-100%";
    navimg.style.opacity=1
    flag=0;
  }
})





