function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}
document.getElementById("home-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    document.getElementById("nav-links").classList.remove("show");
});
document.getElementById("rooms-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
    document.getElementById("nav-links").classList.remove("show");
});
document.getElementById("about-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
    document.getElementById("nav-links").classList.remove("show");
});
document.getElementById("contact-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    document.getElementById("nav-links").classList.remove("show");
});