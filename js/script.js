document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    fixedWidth: "30%",
    start: 3,
    perPage: 1,
    gap: "10px",
    type: "loop",
    snap: "true",
    breakpoints: {
      500: {
        perPage: 1,
      },
      400: {
        perPage: 1,
      },
    },
  });
  splide.mount();
});
