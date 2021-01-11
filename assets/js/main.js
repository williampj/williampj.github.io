/* eslint-disable linebreak-style */

document.addEventListener('DOMContentLoaded', () => {
  // const smoothScrollToTop = (e) => {
  //   const offsetTop = document.querySelector(href);

  //   scroll({
  //     top: offsetTop,
  //     behavior: 'smooth',
  //   });
  // };

  document.querySelectorAll('.title').forEach((title) => {
    title.addEventListener('click', (e) => {
      e.preventDefault();
      const section = e.target.parentElement;
      window.scroll({
        top: section.offsetTop - 50,
        left: 0,
        behavior: 'smooth',
      });
    });
  });

  // const titles = document.querySelectorAll('.title');
  // titles.forEach((title) => title.addEventListener('click', (e) => {
  //   window.scroll({
  //     e.clientY
  //     // top: this.offsetTop,
  //     // behavior: 'smooth',
  //   });
});
// for (const title of titles) {
//   title.addEventListener('click', smoothScrollToTop);
// }

// titles.addEventListener('click', () => {
//   window.scrollTo(this.o, 0);
//   window.scrollTo(0, 0);
// });

// window.scrollTo(x - coordinate, y - coordinate);
