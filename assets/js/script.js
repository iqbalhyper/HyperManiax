(function() {
    // ===== Easy selector helper function
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    // ===== Easy on scroll event listener 
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    // ===== navbar links active
    let navbarlinks = select('nav.sidebar div.containernavitem div.menu-link a', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active-link')
        } else {
          navbarlink.classList.remove('active-link')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
      /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
      let portfolioContainer = select('.card-wrapper');
      if (portfolioContainer) {
        let portfolioIsotope = (portfolioContainer, {
          itemSelector: '.card'
        });
      }
    });

    /**
     * Initiate portfolio lightbox 
     */
    const portfolioLightbox = GLightbox({
      selector: 'a.portfolio-lightbox'
    });

    // ===== hamburger menu
    let hamburgerMenu = select(".hamburger-menu"); 
    hamburgerMenu.addEventListener("click", function(e) {
        e.target.nextElementSibling.classList.toggle("nav-active");
        hamburgerMenu.classList.toggle("hamburger-menu-active");
    })

})()