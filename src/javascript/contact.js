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
