document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  var html = document.querySelector('html'),
    globalWrap = document.querySelector('.global-wrap'),
    headerOverlay = document.querySelector('.header__overlay'),
    menuToggle = document.querySelector(".hamburger"),
    menuList = document.querySelector(".main-nav"),
    searchOpenIcon = document.querySelector(".icon__search"),
    searchCloseIcon = document.querySelector(".search__close"),
    searchInput = document.querySelector(".search__text"),
    search = document.querySelector(".search"),
    searchBox = document.querySelector(".search__box");


  /* =======================================================
  // Menu + Search
  ======================================================= */
  menuToggle.addEventListener("click", () => {
    menu();
  });

  searchOpenIcon.addEventListener("click", () => {
    searchOpen();
  });

  searchCloseIcon.addEventListener("click", () => {
    searchClose();
  });

  headerOverlay.addEventListener("click", () => {
    searchClose();
  });

  // Menu
  function menu() {
    menuToggle.classList.toggle("is-open");
    menuList.classList.toggle("is-visible");
  }

  // Search
  function searchOpen() {
    search.classList.add("is-visible");
    html.classList.add("search-is-visible");
    globalWrap.classList.add("is-active");
    headerOverlay.classList.add("is-visible");
    menuToggle.classList.remove("is-open");
    menuList.classList.remove("is-visible");
    setTimeout(function () {
      searchInput.focus();
    }, 250);
  }

  function searchClose() {
    search.classList.remove("is-visible");
    html.classList.remove("search-is-visible");
    globalWrap.classList.remove("is-active");
    headerOverlay.classList.remove("is-visible");
  }

  function headerOverlay() {
    search.classList.remove("is-visible");
    html.classList.remove("search-is-visible");
    globalWrap.classList.remove("is-active");
    headerOverlay.classList.remove("is-visible");
  }

  searchBox.addEventListener("keydown", function(event) {
    if (event.target == this || event.keyCode == 27) {
      search.classList.remove('is-visible');
      html.classList.remove("search-is-visible");
      globalWrap.classList.remove("is-active");
      headerOverlay.classList.remove("is-visible");
    }
  });


  // =====================
  // Simple Jekyll Search
  // =====================
  SimpleJekyllSearch({
    searchInput: document.getElementById("js-search-input"),
    resultsContainer: document.getElementById("js-results-container"),
    json: "/search.json",
    searchResultTemplate: '<a class="search-results__item col col-6 col-m-12" href="{url}"><div class="search-results__image"><img src="{image}" alt="{title}"></div> <div class="search-results__title">{title}</div></a>',
    noResultsText: '<h3 class="col no-results">No results found</h3>'
  });


  /* ============================
  // Featured Slider
  ============================ */
  if (document.querySelector(".posts-slider")) {
    var slider = tns({
      container: ".posts-slider",
      items: 3,
      loop: false,
      swipeAngle: false,
      slideBy: 1,
      nav: false,
      mouseDrag: true,
      autoplay: false,
      controlsContainer: "#customize-controls",
      responsive: {
        1025: {
          items: 3,
        },
        769: {
          items: 2,
        },
        0: {
          items: 1,
        }
      }
    });
  }


  /* ======================================
  // Photo Carousel Enhancements
  ====================================== */
  // Initialize Splide.js carousel
  if (document.querySelector(".photo-carousel")) {
    try {
      const carousel = new Splide('.photo-carousel', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: 0,
        autoplay: true,
        interval: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        resetProgress: false,
        arrows: false,
        drag: false,
        keyboard: false,
        wheel: false,
        focus: 'center',
        trimSpace: false,
        updateOnMove: true,
        speed: 800,
        easing: 'linear',
        lazyLoad: 'nearby',
        breakpoints: {
          1024: {
            perPage: 2,
            gap: 0,
          },
          768: {
            perPage: 1,
            gap: 0,
          }
        }
      });

      // Mount the carousel
      carousel.mount();

      // Ensure continuous autoplay
      carousel.on('mounted', () => {
        carousel.Components.Autoplay.play();
      });

      // Add intersection observer for performance
      const carouselElement = document.querySelector('.photo-carousel');
      if (carouselElement && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              carousel.Components.Autoplay.play();
            } else {
              carousel.Components.Autoplay.pause();
            }
          });
        }, { threshold: 0.1 });
        
        observer.observe(carouselElement);
      }

      // Add keyboard navigation improvements
      carousel.on('mounted', () => {
        const track = carouselElement.querySelector('.splide__track');
        if (track) {
          track.setAttribute('tabindex', '0');
          track.setAttribute('role', 'region');
          track.setAttribute('aria-label', 'Photo carousel');
        }
      });

      // Enhanced lazy loading integration
      carousel.on('moved', () => {
        // Trigger lazy loading for newly visible images
        if (window.lazyLoadInstance) {
          window.lazyLoadInstance.update();
        }
      });

      // Preload next few images for smooth transitions
      carousel.on('mounted', () => {
        setTimeout(() => {
          if (window.lazyLoadInstance) {
            window.lazyLoadInstance.update();
          }
        }, 100);
      });

      // Additional lazy loading optimizations
      carousel.on('active', (splide, slide) => {
        // Ensure lazy loading is triggered when slides become active
        setTimeout(() => {
          if (window.lazyLoadInstance) {
            window.lazyLoadInstance.update();
          }
        }, 50);
      });

      // Handle lazy loading errors gracefully
      carousel.on('mounted', () => {
        const images = carouselElement.querySelectorAll('img.lazy');
        images.forEach(img => {
          img.addEventListener('error', () => {
            img.classList.add('error');
            img.alt = 'Image failed to load';
          });
        });
      });

    } catch (error) {
      console.warn('Splide.js carousel initialization failed:', error);
      // Fallback to basic carousel functionality
      const carouselElement = document.querySelector('.photo-carousel');
      if (carouselElement) {
        carouselElement.innerHTML = '<p>Carousel loading...</p>';
      }
    }
  }


  /* ======================================
  // Stop Animations During Window Resizing
  ====================================== */
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 100);
  });


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    callback_enter: function(element) {
      // Add loaded class to media cards when they enter viewport
      if (element.classList.contains('grid__post')) {
        element.classList.add('loaded');
      }
    },
    callback_loaded: function(element) {
      // Ensure loaded class is added for media cards
      if (element.classList.contains('grid__post')) {
        element.classList.add('loaded');
      }
    }
  });
  
  // Make lazyLoadInstance globally accessible
  window.lazyLoadInstance = lazyLoadInstance;


  // =====================
  // Load More Posts
  // =====================
  var load_posts_button = document.querySelector('.load-more-posts');

  load_posts_button&&load_posts_button.addEventListener("click",function(e){e.preventDefault();var o=document.querySelector(".pagination"),e=pagination_next_url.split("/page")[0]+"/page/"+pagination_next_page_number+"/";fetch(e).then(function(e){if(e.ok)return e.text()}).then(function(e){var n=document.createElement("div");n.innerHTML=e;for(var t=document.querySelector(".grid"),a=n.querySelectorAll(".grid__post"),i=0;i<a.length;i++)t.appendChild(a.item(i));new LazyLoad({elements_selector:".lazy"});pagination_next_page_number++,pagination_next_page_number>pagination_available_pages_number&&(o.style.display="none")})});


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page__content img, .post__content img, .gallery__image img"),
  imageLink = document.querySelectorAll(".page__content a img, .post__content a img, .gallery__image a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page__content img:not(.no-lightense), .post__content img:not(.no-lightense), .gallery__image img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});