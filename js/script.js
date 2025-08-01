// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Image Only
document.querySelectorAll(".product-image img").forEach(function (img) {
  img.style.cursor = "pointer";
  img.addEventListener("click", function () {
    document.getElementById("modal-img").src = img.src;
    document.getElementById("image-modal").style.display = "block";
  });
});

// Close modal dengan tombol X
document
  .getElementById("close-image-modal")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("image-modal").style.display = "none";
  });

// Close modal jika klik di luar container
document.getElementById("image-modal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});
