// Toggle icon navbar
menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
}

// scroll sections
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    SpeechRecognitionResult.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +' ]').classList.add('active');
            });
        }
    });
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

// remove toggle when click navbar link(scroll)
menuIcon.onclick = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    }