
// $(document).ready(function () {
//     $(".owl-theme").owlCarousel({
//         items:1,
//         loop:true,
//         nav:true,
//         dots:true,
//         autoplay:true,
//         autoplaySpeed:1000,
//         smartSpeed:1500,
//         autoplayHoverPause:true
//     });
//     // ------------------------
//     $(".owl-agencies").owlcarousel({
//         autoplay:true,
//         autoplayTimeout:8000,
//         loop:true,
//         margin:1,
//         nav:true,
//         dots:true,
//         navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
        
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:5
//             }
//         }
//     });
// });




$(document).ready(function () {
  $(".owl-theme").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      dots:true,
      autoplay:true,
      autoplaySpeed:1000,
      smartSpeed:1500,
      autoplayHoverPause:true
  });
  // ----------------------
  $(".owl-agencies").owlCarousel(
      {       
              
              autoplay:true,
              autoplayTimeout:8000,
              loop:true,
              margin:10,

              nav:true,
              dots:true,
              navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
              
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:2
                  },
                  1000:{
                      items:2
                  }
              }
      });
      // ----------------
      $(".owl-business").owlCarousel(
          {       
                  
                  autoplay:true,
                  autoplayTimeout:8000,
                  loop:true,
                  margin:10,
                  nav:true,
                  dots:true,
                  navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
                  
                  responsive:{
                      0:{
                          items:2
                      },
                      600:{
                          items:3
                      },
                      1000:{
                          items:4
                      }
                  }
          });
      // ----------------
      // ----------------
      $(".owl-find").owlCarousel(
          {       
                  
                  autoplay:true,
                  autoplayTimeout:8000,
                  loop:true,
                  margin:10,
                  nav:true,
                  dots:true,
                  navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
                  
                  responsive:{
                      0:{
                          items:2
                      },
                      600:{
                          items:3
                      },
                      1000:{
                          items:4
                      }
                  }
          });
      // ----------------
      $(".owl-hot").owlCarousel(
          {       
                  
                  autoplay:true,
                  autoplayTimeout:8000,
                  loop:true,
                  margin:10,
                  nav:true,
                  dots:true,
                  navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
                  
                  responsive:{
                      0:{
                          items:1
                      },
                      600:{
                          items:3
                      },
                      1000:{
                          items:5
                      }
                  }
          });

});
//     --------------------------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("active");
var panel = this.nextElementSibling;
if (panel.style.maxHeight) {
panel.style.maxHeight = null;
} else {
panel.style.maxHeight = panel.scrollHeight + "px";
} 
});
}