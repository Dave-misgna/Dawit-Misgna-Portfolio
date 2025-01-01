let dropdown_button = document.querySelector('.toggle-button');
let dropdown_list = document.querySelector('.pages-links');

function toggleDropdown() {
  dropdown_button.addEventListener('click', () => {
    if (dropdown_list.style.display === 'none') {
      dropdown_list.style.display = 'block';
    }else{
      dropdown_list.style.display = 'none';
    }
  });
}

toggleDropdown();


function toggleSection(element) {
  const content = element.nextElementSibling;
  const dropdown = element.querySelector('.dropdown');
  if (content.style.maxHeight) {
      content.style.maxHeight = null;
      dropdown.classList.remove('active');
  } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      dropdown.classList.add('active');
  }
}


const menu = document.querySelector('.tooggle-list');
  menu.style.maxHeight = "0px"
function toggleMenu() {
  if (menu.style.maxHeight == "0px") {
      menu.style.maxHeight = "300px";
  }else{
      menu.style.maxHeight = "0px";
  }
  
}