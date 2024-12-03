    const menuIcon = document.querySelector('.menu-icon');
    const ulHolder = document.querySelector('.ul-holder');

    menuIcon.addEventListener('click', () => {
        ulHolder.classList.toggle('show'); // Add/Remove "show" class
    });
