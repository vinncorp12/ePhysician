const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

jQuery(document).ready(function(){
  jQuery('.nav-link').click(function(){
    jQuery('.nav-link').removeClass("active");
    jQuery(this).addClass("active");
});
});

jQuery(document).ready(function() {
	jQuery(".hamburger").click(function() {
    if(jQuery(".hamburger").has(".active")){
      jQuery('html').toggleClass('html-burger-open');
    jQuery('body').toggleClass('html-burger-open');
    }
});
});




const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});