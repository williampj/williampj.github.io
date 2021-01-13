/* eslint-disable linebreak-style */

document.addEventListener('DOMContentLoaded', () => {
  const scrollSectionToTopOfWindow = (e) => {
    e.preventDefault();

    const section = e.target.closest('section');
    window.scroll({
      top: section.offsetTop - 50,
      left: 0,
      behavior: 'smooth',
    });
  };

  document
    .querySelectorAll('.title')
    .forEach((title) =>
      title.addEventListener('click', scrollSectionToTopOfWindow),
    );
});
