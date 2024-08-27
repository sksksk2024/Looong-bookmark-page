document.addEventListener('DOMContentLoaded', () => {
  // Function to check if an element is overflowing
  function isOverflowing(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.left < 0 || 
      rect.right > (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to clip overflowing elements
  function clipOverflowingElements() {
    // Select all elements on the page
    const elements = document.querySelectorAll('body *');

    elements.forEach(element => {
      if (isOverflowing(element)) {
        console.log(`Clipping element: ${element.className}`); // Debugging info
        element.style.overflow = 'hidden';
        element.style.maxWidth = '100%'; // Ensure the element fits within the viewport
        element.style.position = 'relative'; // Maintain positioning
        element.style.clipPath = 'inset(0 0 0 0)'; // Clips based on the detected overflow (adjust as needed)
      }
    });
  }

  // Initial clipping on load
  clipOverflowingElements();

  // Optional: Re-check on window resize
  window.addEventListener('resize', clipOverflowingElements);
});

//header setup
 document.addEventListener('DOMContentLoaded', () => {
   const burger = document.querySelector('.header__burger');
   const menu = document.querySelector('.header__menu');
   const body = document.body;

   // Toggle menu and no-scroll class on body when burger is clicked
   burger.addEventListener('click', () => {
     menu.classList.toggle('hidden');
     body.classList.toggle('no-scroll');
   });

   // Restore scrolling and hide menu when window is resized above 1008px
   window.addEventListener('resize', () => {
     if (window.innerWidth > 1008) {
       menu.classList.add('hidden');
       body.classList.remove('no-scroll');
     }
   });
 });


//main__part2/3 setup

document.addEventListener('DOMContentLoaded', () => {
  const h3Buttons = document.querySelectorAll('.main__part2 h3');
  const sections = document.querySelectorAll('.main__part3');

  // Initially display the first section and add focus to the first h3
  sections[0].classList.remove('hide');
  h3Buttons[0].classList.add('focused');

  h3Buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Hide all sections
      sections.forEach(section => section.classList.add('hide'));

      // Remove focus from all buttons
      h3Buttons.forEach(btn => btn.classList.remove('focused'));

      // Show the selected section and add focus to the clicked button
      sections[index].classList.remove('hide');
      button.classList.add('focused');
    });
  });
});

//main__part5 setup
document.addEventListener('DOMContentLoaded', (event) => {
  const elements = [
    { open: 'open1', close: 'close1', content: 'content1', header: 'header1' },
    { open: 'open2', close: 'close2', content: 'content2', header: 'header2' },
    { open: 'open3', close: 'close3', content: 'content3', header: 'header3' },
    { open: 'open4', close: 'close4', content: 'content4', header: 'header4'}
  ];

  elements.forEach(element => {
    const openButton = document.getElementById(element.open);
    const closeButton = document.getElementById(element.close);
    const content = document.getElementById(element.content);
    const header = document.getElementById(element.header);

    const toggleContent = () => {
      const isVisible = !openButton.classList.contains('hide');
      openButton.classList.toggle('hide', isVisible);
      closeButton.classList.toggle('hide', !isVisible);
      content.classList.toggle('hide', !isVisible);
    };
    
    openButton.addEventListener('mouseover', toggleContent);
    openButton.addEventListener('mouseout', toggleContent);
    
    closeButton.addEventListener('mouseover', toggleContent);
    closeButton.addEventListener('mouseout', toggleContent);

    header.addEventListener('mouseover', toggleContent);
    header.addEventListener('mouseout', toggleContent);
  });
});

//footer setup
document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('email-error');
  const submitButton = document.getElementById('submit-button');

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Simple email validation
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      emailInput.classList.add('invalid');
      errorMessage.classList.remove('hide');
      errorMessage.style.display = 'block';
    } else {
      emailInput.classList.remove('invalid');
      errorMessage.classList.add('hide');
      errorMessage.style.display = 'none';
    }
  });
});