const races = [
    "umano",
    "nano",
    "elfo",
    "gnomo",
    "folletto",
    "stregone"
];



const jobs = [
    "ambasciatore",
    "conciliatore",
    "diplomatico",
    "capitano di mare",
    "capitano di terra",
    "mercante",
    "esattore",
    "custode del tesoro",
    "cuoco",
    "fattorino",
    "nobile",
    "mercenario",
    "custode del portale",
    "cacciatore di taglie",
    "guardia cittadina",
    "guardiano del tempio",
    "soldato",
    "custode della foresta",
    "sceriffo",
    "spazzino",
    "mago",
    "stregone",
    "incantatore",
    "mago del fuoco",
    "mago dell'acqua",
    "mago dell'aria",
    "mago della terra",
    "alchimista",
    "fabbro",
    "cavaliere",
    "paladino",
    "scudiero",
    "barbaro",
    "cacciatore",
    "ranger",
    "ladro",
    "assassino",
    "bardo",
    "druido",
    "chierico",
    "sacerdote",
    "monaco",
    "necromante",
    "sommelier di pozioni",
    "abilissimo giocoliere",
    "spadaccino",
    "arciere",
    "guerriero del tempio",
    "artigiano di frecce",
    "custode di tombe",
    "sciamano",
    "stregone delle ombre",
    "combattente dell'oscurita'",
    "stregone del vento",
    "pittore di illusioni",
    "custode del libro dei segreti",
    "magistrato delle leggi arcane",
    "maestro della trappola",
    "creatore di golem",
    "burattinaio",
    "inventore di armi meccaniche",
    "cercatore di antiche reliquie",
    "ricercatore di conoscenza proibita",
    "custode della porta dimensionale",
    "fabbro di armature magiche",
    "inventore di dispositivi volanti",
    "custode di una biblioteca magica"
];


const causesOfDeath = [
    "avvelenamento",
    "colpo alla testa",
    "annegamento",
    "stordimento",
    "assideramento",
    "esplosione",
    "incendio",
    "impiccagione",
    "soffocamento",
    "fulminazione",
    "maledizione",
    "esposizione alla magia nera",
    "morso di un mostro",
    "ferita da arma da taglio",
    "ferita da arma da fuoco",
    "caduta da grande altezza",
    "sbranato da animali selvaggi",
    "tramortito da una pozione",
    "congelamento",
    "pugnalato da una lama avvelenata",
    "vittima di una magia malvagia",
    "morte per avvelenamento da cioccolato",
    "presa in giro a morte",
    "lacerazione da un libro stregato",
    "morte per affaticamento mentale",
    "annientamento da un raggio distruttivo",
    "morte per intossicazione da formaggio",
    "influenza da polvere di fata",
    "fusa dopo essere stato trasformato in un gatto"
];

const culprits = [
    "cuscino maledetto",
    "gnoll",
    "orco",
    "goblin",
    "lich",
    "drago",
    "assassino",
    "vampiro",
    "demone",
    "necromante",
    "elementale dell'aria",
    "elementale dell'acqua",
    "elementale della terra",
    "elementale del fuoco",
    "minotauro",
    "kraken",
    "fantasma",
    "ladro",
    "traditore",
    "spia",
    "fratello geloso",
    "sorella gelosa",
    "padre adottivo",
    "madre adottiva",
    "maestro",
    "studente",
    "compagno di avventura",
    "rivale",
    "amante respinto",
    "membro di un culto",
    "ospite invidioso",
    "sconosciuto (bersaglio sbagliato)",
    "colpo accidentale",
    "destino infausto",
    "sedia assassina",
    "quadro incantato",
    "pianta carnivora",
    "peluche posseduto",
    "penna stregata",
    "tappeto vounante impazzito",
    "tazza malefica",
    "forchetta assassina",
    "tisana avvelenata",
    "biscotto maledetto",
    "matita posseduta",
    "pennello incantato",
    "calzino demoniaco",
    "libro incendiario",
    "poltrona assassina",
    "rasoio ribelle",
    "candela velenosa",
    "pupazzo di nonna",
    "tagliacarte assassino",
    "borsa demoniaca",
    "cappello stregato",
    "scarpa maledetta",
    "portafoglio insidioso",
    "cintura assassina",
    "pettine malefico",
    "spazzola posseduta",
    "chiave incantata",
    "torcia assassina",
    "cacciavite infernale"
];


// generate button
const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', function () {

    // info generation
    const randomRace = races[Math.floor(Math.random() * races.length)];
    const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
    const randomDeath = causesOfDeath[Math.floor(Math.random() * causesOfDeath.length)];
    const randomCulprit = culprits[Math.floor(Math.random() * culprits.length)];

    document.getElementById("generateMemoriesBody").innerHTML = `
				<p id="race-text"><b>Razza:</b>  <code>${randomRace}</code></p>
				<p id="job-text"><b>Professione:</b>  <code>${randomJob}</code></p>
				<p id="death-text"><b>Causa del decesso:</b>  <code>${randomDeath}</code></p>
				<p id="culprit-text"><b>Il colpevole:</b>  <code>${randomCulprit}</code></p>
     `;
});



function shareMalavoria() {
	if (navigator.share){
		navigator.share({
			title: "Malavoria",
			url: "https://malavoria.com",
		});
	}
}


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()
