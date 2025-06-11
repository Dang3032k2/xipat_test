const toggleButton = document.getElementById("dropdownToggle");
const menu = document.getElementById("dropdownMenu");
const options = menu.querySelectorAll(".dropdown-content__item");
const dropdownContainer = document.querySelector(".dropdown-container");

let currentIndex = -1;
const maxLength = options.length - 1;

const selectItem = (item, index) => {
  const selected = document.getElementById("selectedItem");
  selected.textContent = "Menu item được chọn là: " + item.textContent;
  options.forEach((option) => option.classList.remove("active"));
  options[index].classList.add("active");
};

const handleArrow = (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    selectItem(options[currentIndex], currentIndex);
    return;
  } else if (e.key === "ArrowDown") {
    currentIndex = currentIndex < maxLength ? currentIndex + 1 : maxLength;
  } else if (e.key === "ArrowUp") {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  }
  if (currentIndex !== -1) {
    options.forEach((option) => option.classList.remove("active"));
    options[currentIndex].classList.add("active");
  }
};

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!toggleButton.contains(e.target)) {
    menu.classList.remove("show");
    currentIndex = -1;
  }
});
dropdownContainer.addEventListener("keydown", handleArrow);
