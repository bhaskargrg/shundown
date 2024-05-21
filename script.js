function swiper() {
 var swiper = new Swiper(".swiper-container", {
   slidesPerView: "auto",
   spaceBetween: 30,
   centeredSlides: true,
 
  //  breakpoints: {
  //    // when window width is <= 768px
  //    600: {
  //      slidesPerView: 3,
  //    },
  //  },
 });
}
function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
function featureProductsAnimation() {
  var fixexImg = document.querySelector(".fixed_img");
  var elemWrapper = document.querySelector(".elem_wrapper");
  var elem = document.querySelectorAll(".elem");

  elemWrapper.addEventListener("mouseenter", function () {
    fixexImg.style.display = "block";
  });
  elemWrapper.addEventListener("mousleave", function () {
    fixexImg.style.display = "none";
  });

  elem.forEach((e) => {
    e.addEventListener("mouseenter", function () {
      var attri = e.getAttribute("data-img");
      fixexImg.style.display = "block";
      fixexImg.style.backgroundImage = `url(${attri})`;
    });
    e.addEventListener("mouseleave", function () {
      fixexImg.style.display = "none";
    });
  });
}
function handleH1Click() {
  var page3H1 = document.querySelectorAll(".page3_left_inner h1");

  // Loop through each h1 element
  page3H1.forEach(function (element) {
    element.addEventListener("click", function () {
      page3H1.forEach(function (element) {
        element.style.color = "gray";
        element.style.border = "none";
        element.style.display = "block";
      });
      this.style.color = "white";
      this.style.borderBottom = "1px solid white";
      this.style.display = "inline-block";
      var attrii = this.getAttribute("data-img");
      document.querySelector(
        ".page3_full_right"
      ).style.backgroundImage = `url(${attrii})`;
    });
  });
}
function swiperScrool() {
  var mySwiper_wrap = document.querySelector(".mySwiper");
  var fixed_cursor = document.querySelector(".fixed_cursor");
  mySwiper_wrap.addEventListener("mouseenter", function () {
    console.log("mouse entered in wiper");
    fixed_cursor.style.display = "block";
    document.body.style.cursor = "none";
  });

  mySwiper_wrap.addEventListener("mouseleave", function () {
    console.log("mouse entered in wiper");
    fixed_cursor.style.display = "none";
    document.body.style.cursor = "auto";
  });
  mySwiper_wrap.addEventListener("mousemove", function (dets) {
    fixed_cursor.style.left = dets.clientX - 60 + "px";
    fixed_cursor.style.top = dets.clientY - 60 + "px";
  });
}
function fullScreenAnimatio(){
    var fullscreen = document.querySelector(".fullscreen_animation");
    setTimeout(()=>{
    fullscreen.style.top="-100%";
    },6000)
}
function phone(){
  var flag=0;
document.querySelector("#menu").addEventListener("click",function(){
  if (flag==0) {
     document.querySelector(".nav img").style.opacity = 0;
     document.querySelector(".fixed_nav").style.top = 0;
     flag=1;
  } else {
     document.querySelector(".nav img").style.opacity = 1;
     document.querySelector(".fixed_nav").style.top = "-100%";
     flag = 0;
  }
 
})
}
loco();
swiper();
fullScreenAnimatio();
featureProductsAnimation();
handleH1Click();
swiperScrool();
phone();
