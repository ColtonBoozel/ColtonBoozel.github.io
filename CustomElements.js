class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       <nav class="navbar"> <!-- Start of NavBar -->
      <div class="navbar__container">
        <a href="/index.html" id="navbar__logo">
          <img
            src="Images/PattersonABQ.png"
            alt="Patterson Dental Techs Logo"
            style="height: 95px"
          />
        </a>
        <div class="Phone">
          <a href="tel:505-884-6747" class="navbar__phone">
            <img src="/Images/Phone.png" alt="Phone Icon" />
            505-884-6747
          </a>
        </div>
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
      <ul class="navbar__menu">
        <li class="navbar__item">
          <a href="/index.html" class="navbar__links"> Home </a>
        </li>
        <li class="navbar__item">
          <a href="/Event.html" class="navbar__links"> Events </a>
        </li>
        <li class="navbar__item">
          <a href="/Resources.html" class="navbar__links"> Resources </a>
        </li>
        <li class="navbar__item">
          <a href="/Contact.html" class="navbar__links"> Contact </a>
        </li>
        <li class="navbar__item">
          <a href="Service.html" class="button" style="width:max-content;height: fit-content;padding: 6px auto; "> Service Techs </a>
        </li>
      </ul>
      </div>
    </nav>
    <div class="wave">
        <svg
          viewBox="0 0 1440 200"
          width="100%"
          height="200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="navbarWaveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="rgb(26, 58, 103)" />
              <stop offset="100%" stop-color="rgb(40, 116, 252)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#navbarWaveGradient)"
            fill-opacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,117.3C672,107,768,149,864,154.7C960,160,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div> <!-- End of NavBar -->
        `;
    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".navbar__menu");

    menu.addEventListener("click", function () {
      menu.classList.toggle("is-active");
      menuLinks.classList.toggle("active");
    });
  }
}
class SpecialServiceHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar">
      <div class="navbar__container">
        <a href="/Service.html" id="navbar__logo">
          <img
            src="Images/PattersonABQService.png"
            alt="Patterson Dental Techs Logo"
            style="height: 95px"
          />
        </a>
        <div class="Phone">
          <a href="tel:505-884-6747" class="navbar__phone">
            <img src="/Images/Phone.png" alt="Phone Icon" />
            505-884-6747
          </a>
        </div>
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
      <ul class="navbar__menu">
        <li class="navbar__item">
          <a href="/Service.html" class="navbar__links"> Home </a>
        </li>
        <li class="navbar__item">
          <a href="/ServiceResources.html" class="navbar__links"> Resources </a>
        </li>
        <li class="navbar__item">
          <a href="/ServiceManuals.html" class="navbar__links"> Manuals </a>
        </li>
        <li class="navbar__item">
          <a href="/ServiceContact.html" class="navbar__links"> Contact </a>
        </li>
         <li class="navbar__item">
          <a href="index.html" class="button" style="width:max-content;height: fit-content;padding: 6px auto; "> Customer </a>
        </li>
      </ul>
      </div>
    </nav>
    <div class="wave">
        <svg
          viewBox="0 0 1440 200"
          width="100%"
          height="200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="navbarWaveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="rgb(26, 58, 103)" />
              <stop offset="100%" stop-color="rgb(40, 116, 252)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#navbarWaveGradient)"
            fill-opacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,197.3C384,192,480,128,576,117.3C672,107,768,149,864,154.7C960,160,1056,128,1152,117.3C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
        `;
    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".navbar__menu");

    menu.addEventListener("click", function () {
      menu.classList.toggle("is-active");
      menuLinks.classList.toggle("active");
    });
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <div class="FooterLeft">
    <p>
    <a id="Email" href="mailto:402.branch@pattersondental.com">Email: 402.branch@pattersondental.com</a>
    <br><br>
    <a id="Email" href="tel:505-884-6747">Phone: (505)-884-6747</a>
  </p>
  </div>
  <div class="FooterCenter">
    <a href="/index.html">
      <img src="/Images/PattersonABQ.png" alt="Patterson Dental Logo" style="height: 85px" />
    </a>
  </div>
  <div class="FooterRight">
    <p>Copyright &copy; 2022 Patterson Dental Albuquerque<br>
    <a id="Email" href="https://www.pattersondentalabq.com/">Patterson Dental Albuquerque</a><br>
    <a id="Email" href="/Privacy.html">Privacy Policy</a><br>
    <a id="Email" href="https://www.pattersondental.com/">Visit Patterson Dental Main</a>
    </p>
    `;
  }
}

class SpecialServiceFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <div class="FooterLeft" onload="precheck()">
    <p>
    <a id="Email" href="mailto:402.branch@pattersondental.com">Email: 402.branch@pattersondental.com</a>
    <br><br>
    <a id="Email" href="tel:505-884-6747">Phone: (505)-884-6747</a>
  </p>
  </div>
  <div class="FooterCenter">
    <a href="/index.html">
      <img src="/Images/PattersonABQ.png" alt="Patterson Dental Logo" style="height: 85px" />
    </a>
  </div>
  <div class="FooterRight">
    <p>Copyright &copy; 2022 Patterson Dental Albuquerque<br>
    <a id="Email" href="https://www.pattersondentalabq.com/">Patterson Dental Albuquerque</a><br>
    <a id="Email" href="/Privacy.html">Privacy Policy</a><br>
    <a id="Email" href="https://www.pattersondental.com/">Visit Patterson Dental Main</a>
    </p>
     <div id="overlay">
      <div id="access-box">
        <p>Enter the code to access the page:</p>
        <input type="text" id="access-code" placeholder="Enter access code" />
        <button onclick="checkCode()">Submit</button>
      </div>
    </div>
    `;
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-service-header", SpecialServiceHeader);
customElements.define("special-footer", SpecialFooter);
customElements.define("special-service-footer", SpecialServiceFooter);
