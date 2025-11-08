// Mobile menu toggle
let dropdown_button = document.querySelector('.toggle-button');
let dropdown_list = document.querySelector('.pages-links');

function toggleDropdown() {
  if (dropdown_button && dropdown_list) {
    dropdown_button.addEventListener('click', () => {
      if (dropdown_list.style.display === 'none' || !dropdown_list.style.display) {
        dropdown_list.style.display = 'block';
      } else {
        dropdown_list.style.display = 'none';
      }
    });
  }
}

toggleDropdown();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      if (dropdown_list && window.innerWidth <= 852) {
        dropdown_list.style.display = 'none';
      }
    }
  });
});

// Toggle section for About page accordion
function toggleSection(element) {
  const content = element.nextElementSibling;
  const dropdown = element.querySelector('.dropdown');
  
  if (content && dropdown) {
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = null;
      dropdown.classList.remove('active');
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      dropdown.classList.add('active');
    }
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  if (dropdown_list && dropdown_button) {
    const isClickInsideNav = event.target.closest('.nav-bar');
    const isToggleButton = event.target.closest('.toggle-button');
    
    if (!isClickInsideNav && !isToggleButton && window.innerWidth <= 852) {
      dropdown_list.style.display = 'none';
    }
  }
});

// Update active navigation link on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.pageYOffset + 150;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.pages-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

