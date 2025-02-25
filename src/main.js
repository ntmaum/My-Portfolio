import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/styles.css';
import '../styles/components/header.css';
// import '../styles/components/mobile-nav.css';
import '../styles/components/responsive.css';
// import '../styles/components/me.css';
// import '../styles/components/about.css';
// import '../styles/components/footer.css';
// import '../styles/components/work.css';
// import '../styles/utils.css';

// import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import './utils/all-func.js';

// mobileNav();
darkMode();

function openNav(id) {
    document.getElementById("mySidenav" + id).style.width = "100%";
}

function closeNav(id) {
    document.getElementById("mySidenav" + id).style.width = "0";
}

