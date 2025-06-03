document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".slides-container");
  let currentIndex = 0;

  const slidesData = [
    { src: "img/slider/img1.jpg", title: "Taglio" },
    { src: "img/slider/img2.jpg", title: "Tornitura" },
    { src: "img/slider/img3.jpg", title: "Fresatura" },
    { src: "img/slider/img4.jpg", title: "Misurazione" },
    { src: "img/slider/img5.jpg", title: "Stozzatura" },
    { src: "img/slider/img6.jpg", title: "Imballaggio" },
    { src: "img/slider/img7.jpg", title: "Bilanciatura" },
    { src: "img/slider/img8.jpg", title: "Marcatura" }
  ];

  slidesData.forEach(({ src, title }) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    const img = document.createElement("img");
    img.src = src;
    img.alt = title;

    const caption = document.createElement("div");
    caption.classList.add("caption");
    caption.textContent = title;

    slide.appendChild(img);
    slide.appendChild(caption);
    container.appendChild(slide);
  });

  const showSlide = (index) => {
    const slides = document.querySelectorAll(".slide");
    const total = slides.length;

    if (index >= total) currentIndex = 0;
    else if (index < 0) currentIndex = total - 1;
    else currentIndex = index;

    const slideWidth = slides[0].clientWidth;
    container.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  };

  document.querySelector(".prev").addEventListener("click", () => {
    showSlide(currentIndex - 1);
  });

  document.querySelector(".next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
  });

  window.addEventListener("resize", () => showSlide(currentIndex));
  showSlide(currentIndex);
});
