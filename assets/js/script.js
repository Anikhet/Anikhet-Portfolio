$(document).ready(function() {

  //sticky header
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $(".header-areas").addClass("sticky");
      } else {
        $(".header-areas").removeClass("sticky");
      }
  
      // Update the active section in the header
      updateActiveSection();
    });
  
    $(".header1 ul li a").click(function(e) {
      e.preventDefault(); 
  
      var target = $(this).attr("href");
  
      if ($(target).hasClass("active-section")) {
        return; 
      }
  
      if (target === "#Home") {
        $("html, body").animate(
          {
            scrollTop: 0 
          },
          500
        );
      } else {
        var offset = $(target).offset().top - 40; 
  
        $("html, body").animate(
          {
            scrollTop: offset
          },
          500
        );
      }
  
      $(".header1 ul li a").removeClass("active");
      $(this).addClass("active");
    });
  

    //Initial content revealing js
    ScrollReveal({
      distance: "100px",
      duration: 2000,
      delay: 150
    });
  
    ScrollReveal().reveal(".header1 a, .profile-photo, .About-content1, .education", {
      origin: "left"
    });
    ScrollReveal().reveal(".header1 ul, .profile-text, .About-mskills1, .internships", {
      origin: "right"
    });
    ScrollReveal().reveal(".Exercise-title, .project-title", {
      origin: "top"
    });
    ScrollReveal().reveal(".jump-exer, .project", {
      origin: "bottom"
    });


  });
  
  function updateActiveSection() {
    var scrollPosition = $(window).scrollTop();
  
    // Checking if scroll position is at the top of the page
    if (scrollPosition === 0) {
      $(".header1 ul li a").removeClass("active");
      $(".header1 ul li a[href='#Home']").addClass("active");
      return;
    }
  
    // Iterate through each section and update the active class in the header
    $("section").each(function() {
      var target = $(this).attr("id");
      var offset = $(this).offset().top;
      var height = $(this).outerHeight();
  
      if (
        scrollPosition >= offset - 40 &&
        scrollPosition < offset + height - 40
      ) {
        $(".header1 ul li a").removeClass("active");
        $(".header1 ul li a[href='#" + target + "']").addClass("active");
      }
    });
  }
  