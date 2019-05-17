//Option 2 JQuery Smooth Scroll
//Cross platform

$(".navbar a").on("click", function(e) {
  if (this.hash) {
    e.preventDefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

//Third solution - Smooth Scroll Script

// const scroll = new SmoothScroll('.navbar a[href*="#"]', { speed: 800 });
