const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Navbar

const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
// navLinks[0].textContent = `${siteContent.nav["nav-item-1"]}`;
// navLinks[1].textContent = `${siteContent.nav["nav-item-2"]}`;
// navLinks[2].textContent = `${siteContent.nav["nav-item-3"]}`;
// navLinks[3].textContent = `${siteContent.nav["nav-item-4"]}`;
// navLinks[4].textContent = `${siteContent.nav["nav-item-5"]}`;
// navLinks[5].textContent = `${siteContent.nav["nav-item-6"]}`;

const navArray = Array.from(navLinks);
navArray.forEach(item => {
  item.textContent =
    siteContent["nav"][`nav-item-${navArray.indexOf(item) + 1}`];
});

// Cta Banner

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// const ctaBanner = document.getElementsByClassName("cta");
// const ctaBannerText = ctaBanner.firstElementChild;
// console.log(ctaBannerText);

const ctaText = document.querySelector("h1");
ctaText.textContent = `${siteContent.cta["h1"]}`;

const ctaButton = document.querySelector("button");
ctaButton.textContent = `${siteContent.cta["button"]}`;

// Main Content
// Top Content

const mainContentHeaders = document.querySelectorAll(".text-content > h4");
mainContentHeaders[0].textContent = `${siteContent["main-content"]["features-h4"]}`;
mainContentHeaders[1].textContent = `${siteContent["main-content"]["about-h4"]}`;
mainContentHeaders[2].textContent = `${siteContent["main-content"]["services-h4"]}`;
mainContentHeaders[3].textContent = `${siteContent["main-content"]["product-h4"]}`;
mainContentHeaders[4].textContent = `${siteContent["main-content"]["vision-h4"]}`;

const mainContentText = document.querySelectorAll(".text-content > p");
mainContentText[0].textContent = `${siteContent["main-content"]["features-content"]}`;
mainContentText[1].textContent = `${siteContent["main-content"]["about-content"]}`;
mainContentText[2].textContent = `${siteContent["main-content"]["services-content"]}`;
mainContentText[3].textContent = `${siteContent["main-content"]["product-content"]}`;
mainContentText[4].textContent = `${siteContent["main-content"]["vision-content"]}`;

// Middle Img

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", "img/mid-page-accent.jpg");

// Contact

const contactHead = document.querySelector(".contact > h4");
const contactAddress = document.querySelectorAll(".contact > p");

contactHead.textContent = siteContent["contact"]["contact-h4"];
contactAddress[0].textContent = siteContent["contact"]["address"];
contactAddress[1].textContent = siteContent["contact"]["phone"];
contactAddress[2].textContent = siteContent["contact"]["email"];

// Footer

const copyright = document.querySelector("footer > p");
copyright.textContent = siteContent["footer"]["copyright"];

// Step #3

// Green Nav
const greenNav = navLinks => {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].style.color = "green";
  }
};
greenNav(navLinks);

// Append & Prepend

const newNavItem = document.createElement("a");
newNavItem.textContent = "FAQ";
newNavItem.style.color = "green";
nav.appendChild(newNavItem);

const newNavItem2 = document.createElement("a");
newNavItem2.textContent = "Home";
newNavItem2.style.color = "green";
nav.prepend(newNavItem2);

// Added Services to Link to stretch Timer

navLinks[0].setAttribute(
  "href",
  "/stretch-assignment/digital_timer/index.html"
);
