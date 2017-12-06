$(function() {
  var swiper = new Swiper("#services .swiper-container", {
    effect: "coverflow",
    parallax: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });

  var swiper = new Swiper("#about .swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    grabCursor: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 6000
    }
  });

  if ($("#feedback").width() > 768) {
    particlesJS("feedback", {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 1100
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 30,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          snow: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
});
 $(function(){

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center:  { lat: 51.417754, lng:  -0.528043 }
  });

var marke1sr = new google.maps.Marker({
    position: { lat: 51.417753, lng:  -0.528043 },
    map: map,
    title: "Connoisseur International"
  });
 



 });

 