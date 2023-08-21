const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const navLinks = document.querySelectorAll("nav a");
const navKeys = Object.keys(siteContent.nav);

navLinks.forEach((link, index) => {
  let linkKey = navKeys[index];
  link.setAttribute("class", "italic", linkKey);
  link.textContent = siteContent.nav[linkKey];
});

const logoImg = document.querySelector("#logo-img");
logoImg.setAttribute("src", siteContent.images["logo-img"]);

const h1 = document.querySelector("h1");
h1.textContent = siteContent.cta.h1;

const button = document.querySelector("button");
button.textContent = siteContent.cta.button;

const rightPic = document.querySelector("#cta-img");
rightPic.setAttribute("src", siteContent.images["cta-img"]);

const firstH4 =
  document.getElementsByClassName("top-content")[0].children[0].children[0];
firstH4.textContent = siteContent["ana-içerik"]["özellikler-h4"];
const firstP =
  document.getElementsByClassName("top-content")[0].children[0].children[1];
firstP.textContent = siteContent["ana-içerik"]["özellikler-içerik"];

const secondH4 =
  document.getElementsByClassName("top-content")[0].children[1].children[0];
secondH4.textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const secondP =
  document.getElementsByClassName("top-content")[0].children[1].children[1];
secondP.textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const midPic = document.querySelector("#middle-img");
midPic.setAttribute("src", siteContent.images["accent-img"]);

const thirdH4 =
  document.getElementsByClassName("bottom-content")[0].children[0].children[0];
thirdH4.textContent = siteContent["ana-içerik"]["servisler-h4"];
const thirdP =
  document.getElementsByClassName("bottom-content")[0].children[0].children[1];
thirdP.textContent = siteContent["ana-içerik"]["servisler-içeriği"];

const fourthH4 =
  document.getElementsByClassName("bottom-content")[0].children[1].children[0];
fourthH4.textContent = siteContent["ana-içerik"]["ürünler-h4"];
const fourthP =
  document.getElementsByClassName("bottom-content")[0].children[1].children[1];
fourthP.textContent = siteContent["ana-içerik"]["ürünler-içeriği"];

const fifthH4 =
  document.getElementsByClassName("bottom-content")[0].children[2].children[0];
fifthH4.textContent = siteContent["ana-içerik"]["vizyon-h4"];
const fifthP =
  document.getElementsByClassName("bottom-content")[0].children[2].children[1];
fifthP.textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

const contact = document.querySelector(".contact h4");
contact.textContent = siteContent.iletisim["iletişim-h4"];

const contactP1 = document.getElementsByClassName("contact")[0].children[1];
contactP1.textContent = siteContent.iletisim.adres;

const contactP2 = document.getElementsByClassName("contact")[0].children[2];
contactP2.textContent = siteContent.iletisim.telefon;

const contactP3 = document.getElementsByClassName("contact")[0].children[3];
contactP3.textContent = siteContent.iletisim.email;

const footer = document.querySelector("footer a");
footer.textContent = siteContent.footer.copyright;
footer.classList.add("bold");
