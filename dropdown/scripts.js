const toggleButton = document.getElementById("dropdownToggle");
const menu = document.getElementById("dropdownMenu");
const options = menu.querySelectorAll('.dropdown-content__item');

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!toggleButton.contains(e.target)) {
    menu.classList.remove("show");
  }
});

const selectedItem = (item) => {
  const selected = document.getElementById("selectedItem");
  selected.textContent = "Menu item được chọn là: " + item.textContent;
};

let currentIndex = -1
menu.addEventListener('keydown', (e) => {
    const maxLength = options.length - 1
    if(e.key==='ArrowDown') {
        currentIndex = currentIndex < maxLength ? currentIndex + 1 : maxLength
        options[currentIndex].focus()
    }
    else if(e.key==='ArrowUp') {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : 0
        options[currentIndex].focus()
    }
})