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
  setTimeout(function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.style.visibility = "hidden";
      document.getElementById("content").style.display = "block"; // Show the main content
      const navbarLinks = document.querySelectorAll(".navbar a"); // Adjust this selector based on your HTML
      navbarLinks.forEach(function (link) {
        link.classList.remove("preactive");
      });
      const currentPage = window.location.pathname.split("/").pop();
      if (currentPage && currentPage !== "") {
        navbarLinks.forEach(function (link) {
          const linkPage = link.getAttribute("href").split("/").pop();
          if (linkPage === currentPage) {
            link.classList.add("prevActive");
          }
        });
      }
    }, 200); // This timeout corresponds to the fade-out duration
  }, 500); // 500 milliseconds = 0.5 seconds delay before hiding the preloader
});

jQuery(document).ready(function () {
  var tabs = document.querySelectorAll(".tabContent");
  var tabsHeader = document.querySelectorAll(".tabHeader");
  function isMobile() {
    return window.innerWidth <= 768;
  }
  function isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
  }
  function showTabs() {
    tabs.forEach(function (tab) {
      $(tab).find("li").addClass("display-block");
    });
  }
  function hideTabs() {
    tabs.forEach(function (tab) {
      $(tab).find("li").removeClass("display-block");
    });
  }
  if (isMobile()) {
    hideTabs();
    tabsHeader.forEach(function (header) {
      $(header).removeClass("active");
    });

    tabsHeader.forEach(function (tabHeader, index) {
      tabHeader.addEventListener("click", function () {
        if ($(tabHeader).hasClass("active")) {
          $(tabHeader).removeClass("active");
          $(tabs[index]).find("li").slideUp();
          return;
        }
        tabsHeader.forEach(function (header) {
          $(header).removeClass("active");
        });
        tabs.forEach(function (tab) {
          $(tab).find("li").slideUp();
        });
        $(tabHeader).addClass("active");
        $(tabs[index]).find("li").slideDown();
      });
    });
  } else if (isTablet()) {
    showTabs();
  } else {
    showTabs();
  }
});
window.onload = function () {
  setTimeout(() => {
    if (window.location.hash) {
      let targetSection = document.getElementById(
        window.location.hash.substring(1)
      );
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, 500);
};
// Function to lock the body from scrolling
function openLightbox(id) {
  // Prevent scroll on the body
  document.body.classList.add("overflow-hidden");

  // Show the lightbox with the specific ID by adding the 'active' class
  var lightbox = document.getElementById(id);
  lightbox.classList.add("active");
}

// Function to close the lightbox and unlock scrolling
function closeLightbox(event, id) {
  event.preventDefault(); // Prevents default action (hash URL change)

  // Hide the lightbox by removing the 'active' class
  var lightbox = document.getElementById(id);
  lightbox.classList.remove("active");

  // Restore scroll to the body
  document.body.classList.remove("overflow-hidden");

  // Remove the hash from the URL to reset the state
  history.pushState(null, null, " ");
}

// Add event listeners to open the lightbox when clicking on thumbnails
document.querySelectorAll(".lightbox").forEach(function (lightbox) {
  lightbox.addEventListener("click", function (event) {
    var targetId = lightbox.getAttribute("href").substring(1); // Get the ID from the href
    openLightbox(targetId); // Open the lightbox with the corresponding ID
    event.preventDefault(); // Prevent default hash behavior
  });
});

// Add event listeners to close the lightbox
document.querySelectorAll(".lightbox-close").forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function (event) {
    var targetId = closeBtn.getAttribute("id").replace("close-btn-", ""); // Get the target ID from the close button
    closeLightbox(event, targetId); // Close the lightbox with the corresponding ID
  });
});

// Check if the URL has a hash on page load (in case of refresh)
// document.addEventListener("DOMContentLoaded", function () {
//   var hash = window.location.hash;
//   if (hash) {
//     var targetId = hash.substring(1);
//     openLightbox(targetId);
//   }
// });

// Automatically apply image protection attributes
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.setAttribute("data-noimageai", "true");
    img.setAttribute("role", "presentation");
    if (!img.hasAttribute("alt")) {
      img.setAttribute("alt", "");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img").forEach((img) => {
    const div = document.createElement("div");
    div.style.width = img.width + "px";
    div.style.height = img.height + "px";
    div.style.backgroundImage = `url(${img.src})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";
    div.style.display = "inline-block";
    img.replaceWith(div);
  });
});
