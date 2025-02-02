// Toggle Mobile Menu
const bar = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

bar.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  console.log("text");
});

// for donor table collapsed
const donorButtons = document.querySelectorAll(".donor-btn");
donorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the corresponding donor-table that is next to the clicked button
    const donorTable = button.nextElementSibling;
    const icon = button.querySelector(".down-icon");

    // Check if the next sibling exists and has the correct class
    if (donorTable && donorTable.classList.contains("donor-details--table")) {
      donorTable.classList.toggle("open");
      button.classList.toggle("open");
    }
  });
});
