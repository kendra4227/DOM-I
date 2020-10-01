const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Create Header 
const  nav = document.querySelectorAll('a');
for (let i = 0; i < nav.length; i++){
  nav[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
  nav[i].style.color = "green";
}

//Prepend
const newNav = document.createElement("a");
const newText = document.createTextNode("new Nav");
newNav.prepend(newText);
newNav.style.color="green";
document.querySelector('nav').prepend(newNav);

//Append
const newNavAgain = document.createElement("a");
const newTextAgain = document.createTextNode("new Nav");
newNavAgain.append(newTextAgain);
newNavAgain.style.color="green";
document.querySelector('nav').append(newNavAgain);

//Title 
const cta= document.querySelector('h1')
cta.textContent = siteContent["cta"]["h1"];
cta.innerHTML = 'DOM<br>Is<br>Awesome';

//Button
const button = document.querySelector('button');
button.textContent= siteContent["cta"]["button"];

//images

const header_img = document.getElementById("cta-img");
header_img.setAttribute('src',siteContent["cta"]["img-src"]);

const middle_img = document.getElementById("middle-img");
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Main Content

const mainContentH4 = document.querySelectorAll("h4");

mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4[4].textContent = siteContent["main-content"]["visions-h4"];

const mainContentP = document.querySelectorAll("p");

mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentP[4].textContent = siteContent["main-content"]["visions-content"];

//Contact


mainContentH4[5].textContent = siteContent['contact']['contact-h4'];

mainContentP[5].textContent = siteContent['contact']['address'];
mainContentP[6].textContent = siteContent['contact']['phone'];
mainContentP[7].textContent = siteContent['contact']['email'];

//Footer
mainContentP[8].textContent = siteContent['footer']['copyright'];