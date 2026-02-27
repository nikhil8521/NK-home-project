/* ================= GLOBAL STATE ================= */

let activeIndex = 0;
let activeSlide = 0;


/* ================= HERO IMAGE SLIDER ================= */

document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".hero-image img");

  if (images.length > 0) {
    let current = 0;
    images[current].classList.add("active");

    setInterval(() => {
      images[current].classList.remove("active");
      current = (current + 1) % images.length;
      images[current].classList.add("active");
    }, 3500);
  }

});


/* ================= PROJECT DATA ================= */

const projectData = [
  {
    title: "Green forest house",
    slides: [
      {
        before: "images/project1before.png",
        after: "images/project1after.png",
        desc: "Green Forest House was designed to create a strong connection between living spaces and nature. The layout prioritizes natural light, cross-ventilation, and open views, allowing the surrounding greenery to become part of the everyday experience. Thoughtful planning ensures smooth circulation, functional zoning, and a calm, balanced flow throughout the home."
      },
      {
        before: "images/project1livingbefore.png",
        after: "images/project1livingafter.png",
        desc: "The bedroom and living areas of Green Forest House are designed to reflect calm, comfort, and a strong connection with nature. Soft earthy tones, natural textures, and warm lighting create a relaxing atmosphere, while large openings allow natural light and ventilation to flow freely."
      },
      {
        before: "images/project1bedbefore.png",
        after: "images/project1bedafter.png",
        desc: "The kitchen and washroom spaces are designed with a balance of practicality and refined aesthetics. The kitchen focuses on efficient workflow, smart storage, and easy maintenance, using durable finishes and well-planned lighting for everyday convenience."
      },
      {
        type: "testimonial",
        text: "“We honestly love how our home turned out. Everything feels so calm, comfortable, and thoughtfully designed. The spaces are easy to use, the lighting is perfect, and the overall look feels modern but still very homely. The quality of work really shows in the finishing. We’re very happy with the result.”",
        author: "Rahul Singh"
      }
    ]
  },

  {
    title: "MT view mansion",
    slides: [
      {
        before: "images/project2before.png",
        after: "images/project2after.png",
        desc: "Before the redesign, the spaces felt dated and less efficient in their layout. After planning and execution, the mansion now reflects a modern, well-balanced design with improved circulation, better use of space, and a refined architectural character.."
      },
      {
        before: "images/project2livingbefore.png",
        after: "images/project2livingafter.png",
        desc: "The bedroom focuses on relaxation with soft tones, warm lighting, and a clutter-free layout that feels cozy and restful. The puja room is designed with simplicity and serenity in mind, using subtle detailing and peaceful colors to create a spiritual, quiet space for daily prayer."
      },
      {
        before: "images/project2bedbefore.png",
        after: "images/project2bedafter.png",
        desc: "The living area now offers better seating flow, balanced lighting, and a warm, modern atmosphere for both family time and guests. The kitchen focuses on smart storage, smooth workflow, and easy maintenance, making everyday cooking more comfortable and efficient."
      },
      {
        type: "testimonial",
        text: "“We honestly love how our home turned out. Everything feels so calm, comfortable, and thoughtfully designed. The spaces are easy to use, the lighting is perfect, and the overall look feels modern but still very homely. The quality of work really shows in the finishing. We’re very happy with the result.”",
        author: "-Virendra Tiwari"
      }
    ]
  },

  {
    title: "Radhika house",
    slides: [
      {
        before: "images/project3before.png",
        after: "images/project3after.png",
        desc: "Before the renovation, the spaces felt less organized and outdated. After thoughtful planning and execution, the interiors now feel brighter, more comfortable, and better structured for daily living."
      },
      {
        before: "images/project3livingbefore.png",
        after: "images/project3livingafter.png",
        desc: "The bedroom now offers a calm and cozy atmosphere with soft colors, balanced lighting, and a clutter-free layout. The living area with the TV unit is designed to feel welcoming and functional, with a clean media wall, proper seating flow, and a modern, elegant look."
      },
      {
        before: "images/project3bedbefore.png",
        after: "images/project3bedafter.png",
        desc: "The washroom offers sleek fixtures and a calming ambiance, while the kitchen combines stylish modular cabinets with smart storage for an efficient, welcoming space. Both areas reflect contemporary elegance and thoughtful design."
      },
      {
        type: "testimonial",
        text: "“Every corner feels welcoming and beautifully crafted, with a harmonious balance of modern elegance and livability.”",
        author: "-Ankita Sharma"
      }
    ]
  },


{
    title: "Pot house",
    slides: [
      {
        type: "images",
        before: "images/project5before.png",
        after: "images/project5after.png",
        desc: "The exterior has evolved from a simple, plain structure into a modern and stylish façade. The new design adds strong lines, layered balconies, warm lighting, and elegant color contrasts, giving the house a premium and welcoming look."
      },
      {
        type: "images",
        before: "images/project5livingbefore.png",
        after: "images/project5livingafter.png",
        desc: "The living room is designed with a simple, clutter-free look that feels open, calm, and comfortable. The bedroom follows the same minimal approach, offering a peaceful and cozy atmosphere that feels light, balanced, and easy to unwind in."
      },
      {
        type: "images",
        before: "images/project5diningbefore.png",
        after: "images/project5diningafter.png",
        desc: "The dining area is simple, elegant, and comfortable, designed for relaxed everyday meals and warm family moments. The washroom follows a clean and functional design, with a fresh, uncluttered look that feels hygienic, modern.",


        type: "testimonial",
        text: "“We are very happy with how our house has turned out. The design feels warm, simple, and comfortable, and every space is thoughtfully planned for daily living. It doesn’t just look good, it truly feels like home.",
        author: "Sakshi Gupta"
      }
    ]
  },

{
 title: "Arvind house",
    slides: [
      {
        type: "images",
        before: "images/project4before.png",
        after: "images/project4after.png",
        desc: "By swapping raw frames for a soft olive and grey palette and adding layered ''golden hour'' lighting, like those glowing copper pendants, the design shifts from a basic utility area to the soulful, high-end heart of the home."
      },
      {
        type: "images",
        before: "images/project4livingbefore.png",
        after: "images/project4livingafter.png",
        desc: "The living room at Arvind House feels warm and comfortable, perfect for everyday moments with family. The bedroom is calm and cozy, offering a peaceful space to relax and unwind."
      },
      {
        type: "images",
        before: "images/project4diningbefore.png",
        after: "images/project4diningafter.png",
        desc: "The puja area feels peaceful and pure, creating a calm space for prayer and reflection. The study area is simple and focused, designed to feel quiet, comfortable, and perfect for concentration.",


        type: "testimonial",
        text: "“It looks beautiful and is also very practical for our daily life. The work truly reflects our needs and feels like home.”",
        author: "-Arvind Patel"
      }
    ]
  },

  {
title: "Shanti bhavan",
    slides: [
      {
        type: "images",
        before: "images/project6before.png",
        after: "images/project6after.png",
        desc: "Earlier, the exterior was plain and lacked visual character, but after the redesign, it now features a clean white façade, well-defined balconies, and warm ambient lighting that highlights the architecture beautifully.",
      },
      {
        type: "images",
        before: "images/project6livingbefore.png",
        after: "images/project6livingafter.png",
        desc: "The living room is bright and welcoming, with a stylish yet comfortable design that makes it perfect for relaxing and spending time with guests. The bedroom feels calm and soothing, with a cozy atmosphere and thoughtful details that create a peaceful and restful space.",
      },
      {
        type: "images",
        before: "images/project6diningbefore.png",
        after: "images/project6diningafter.png",
        desc: "The puja room feels peaceful and pure, designed to create a calm and spiritual atmosphere for daily prayers. The kitchen is well-planned and functional, with a modern look and smart storage that makes cooking comfortable.",
      },
      {
        type: "testimonial",
        text: "“The entire space feels comfortable, modern, and very well planned. Every detail has been thoughtfully done, and the house looks beautiful while still being practical for everyday living. It truly feels like our dream home.”",
        author: "Anuj Jha"
      }
    ]
  }
];







/* ================= PROJECT POPUP ================= */

function openProjectPopup(index) {
  activeIndex = index;
  activeSlide = 0;

  const popup = document.getElementById("projectPopup");
  if (!popup) return;

  popup.classList.add("active");
  document.body.style.overflow = "hidden";

  renderProject();
}

function closeProjectPopup() {
  const popup = document.getElementById("projectPopup");
  if (!popup) return;

  popup.classList.remove("active");
  document.body.style.overflow = "";
}


/* ================= RENDER PROJECT ================= */

function renderProject() {

  const project = projectData[activeIndex];
  const slide = project.slides[activeSlide];

  const imageSection = document.querySelector(".popup-images");
  const desc = document.getElementById("popupDesc");
  const testimonial = document.getElementById("testimonialSlide");

  if (!project || !slide) return;

  document.getElementById("popupTitle").innerText = project.title;

  /* TESTIMONIAL SLIDE */
  if (slide.type === "testimonial") {

    if (imageSection) imageSection.style.display = "none";
    if (desc) desc.style.display = "none";
    if (testimonial) testimonial.style.display = "block";

    const textEl = document.getElementById("testimonialText");
    const authorEl = document.getElementById("testimonialAuthor");

    if (textEl) textEl.innerText = slide.text;
    if (authorEl) authorEl.innerText = "– " + slide.author;

  } else {

    /* IMAGE SLIDE */
    if (imageSection) imageSection.style.display = "grid";
    if (desc) desc.style.display = "block";
    if (testimonial) testimonial.style.display = "none";

    const beforeImg = document.getElementById("popupBefore");
    const afterImg = document.getElementById("popupAfter");

    if (beforeImg) beforeImg.src = slide.before;
    if (afterImg) afterImg.src = slide.after;
    if (desc) desc.innerText = slide.desc;
  }

  updateArrows();
}


/* ================= ARROW LOGIC ================= */

function updateArrows() {

  const slides = projectData[activeIndex].slides;
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  if (!leftArrow || !rightArrow) return;

  /* First slide → hide left */
  if (activeSlide === 0) {
    leftArrow.style.display = "none";
  } else {
    leftArrow.style.display = "flex";
  }

  /* Last slide → hide right */
  if (activeSlide === slides.length - 1) {
    rightArrow.style.display = "none";
  } else {
    rightArrow.style.display = "flex";
  }
}


/* ================= SLIDE NAVIGATION ================= */

function nextSlide() {
  const slides = projectData[activeIndex].slides;

  if (activeSlide < slides.length - 1) {
    activeSlide++;
    renderProject();
  }
}

function prevSlide() {
  if (activeSlide > 0) {
    activeSlide--;
    renderProject();
  }
}


/* ================= ESC KEY CLOSE ================= */

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeProjectPopup();
  }
});


/* ================= SERVICES SLIDER ================= */

const servicesSlider = document.getElementById("servicesSlider");
let currentServiceSlide = 0;
const gap = 10;

function slideServices(dir) {

  if (!servicesSlider) return;

  const img = servicesSlider.querySelector("img");
  if (!img) return;

  const slideWidth = img.offsetWidth + gap;

  currentServiceSlide += dir;

  if (currentServiceSlide < 0) currentServiceSlide = 0;

  servicesSlider.scrollTo({
    left: currentServiceSlide * slideWidth,
    behavior: "smooth"
  });
}


/* ================= CONTACT SUCCESS POPUP ================= */

document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".contact-form");
  const popup = document.getElementById("successPopup");

  if (form && popup) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      popup.classList.add("active");
      form.reset();
    });
  }

});


function closeSuccess() {
  const popup = document.getElementById("successPopup");
  if (popup) popup.classList.remove("active");
}


/* ================= SERVICE CHIP SELECT ================= */

document.addEventListener("DOMContentLoaded", () => {

  const chips = document.querySelectorAll(".service-chip");

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("active");
    });
  });

});

/* ================= 3D LAYOUT SLIDER ================= */

document.addEventListener("DOMContentLoaded", () => {

  const slider3d = document.getElementById("slider3d");
  const scrollBtn = document.getElementById("scrollRight");

  if (!slider3d) return;

  const scrollAmount = 480; // 441 width + approx gap

  /* Button scroll */
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      slider3d.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    });
  }

  /* Mouse wheel horizontal scroll */
  slider3d.addEventListener("wheel", (e) => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    slider3d.scrollLeft += e.deltaY;
  });

  /* Keyboard scroll (only when section in view) */
  document.addEventListener("keydown", (e) => {

    const rect = slider3d.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight &&
      rect.bottom > 0;

    if (!inView) return;

    if (e.key === "ArrowRight") {
      slider3d.scrollLeft += scrollAmount;
    }

    if (e.key === "ArrowLeft") {
      slider3d.scrollLeft -= scrollAmount;
    }

  });

});