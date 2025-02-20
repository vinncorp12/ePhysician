// Function to set the active class based on the current URL hash
document.addEventListener("DOMContentLoaded", function () {
  function updateActiveMenu() {
    const links = document.querySelectorAll(".nav-item a");
    links.forEach((link) => link.classList.remove("prevActive"));
    const currentPage = window.location.pathname.split("/").pop();
    links.forEach((link) => {
      const linkHref = link.getAttribute("href");
      if (linkHref.includes(currentPage)) {
        link.classList.add("prevActive");
      }
    });
  }
  updateActiveMenu();
});
// for add or remove menu active class
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
jQuery(document).ready(function () {
  jQuery(".nav-link").click(function () {
    jQuery(".nav-link").removeClass("active");
    jQuery(this).addClass("active");
  });
});
jQuery(document).ready(function () {
  jQuery(".hamburger").click(function () {
    if (jQuery(".hamburger").has(".active")) {
      jQuery("html").toggleClass("html-burger-open");
      jQuery("body").toggleClass("html-burger-open");
    }
  });
});

// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector("#password");

// togglePassword.addEventListener("click", function (e) {

//   const type =
//     password.getAttribute("type") === "password" ? "text" : "password";
//   password.setAttribute("type", type);

//   this.classList.toggle("fa-eye-slash");
// });

jQuery(window).scroll(function () {
  var scroll = jQuery(window).scrollTop();
  if (scroll >= 100) {
    jQuery("header").addClass("fixed");
  } else {
    jQuery("header").removeClass("fixed");
  }
});

jQuery(document).ready(function () {
  "use strict";
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  jQuery(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});
// if (jQuery("html:not(.mobile-user-agent)")) {
//   jQuery(".video-preview-image")
//     .unbind("click")
//     .bind("click", function () {
//       jQuery(this).hide();
//     });
// }
if (jQuery("html:not(.mobile-user-agent)")) {
  jQuery("video").each(function () {
    this.pause();
  });
  jQuery(".video-preview-image")
    .unbind("click")
    .bind("click", function () {
      var videoElement = jQuery(this).siblings("video")[0];
      jQuery("video").each(function () {
        this.pause();
      });
      if (videoElement) {
        videoElement.play();
      }
      jQuery(this).hide();
    });
}
// Get all videos with the class 'my-video'
const videos = document.querySelectorAll(".my-video");

// Loop through all videos and add event listeners
videos.forEach((video) => {
  video.addEventListener("play", () => {
    // Pause all other videos when one starts playing
    videos.forEach((otherVideo) => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});

// Wait for the page to fully load
window.addEventListener("load", function () {
  // Add a delay before hiding the preloader (e.g., 2 seconds)
  setTimeout(function () {
    // Hide the preloader
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";

    // After the transition (0.5s), hide the preloader completely
    setTimeout(function () {
      preloader.style.visibility = "hidden";
      document.getElementById("content").style.display = "block"; // Show the main content

      // Select all navbar links and add the 'active' class
      const navbarLinks = document.querySelectorAll(".navbar a"); // Adjust this selector based on your HTML
      navbarLinks.forEach(function (link) {
        link.classList.add("prevActive");
      });
    }, 200); // This timeout corresponds to the fade-out duration
  }, 500); // 500 milliseconds = 0.5 seconds delay before hiding the preloader
});
