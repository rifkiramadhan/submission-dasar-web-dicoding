const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('nav ul');
const link = document.querySelectorAll('.link');
const main = document.querySelector('main');

hamburger.addEventListener('click', () => {
  ul.classList.toggle('open');
});
ul.addEventListener('click', () => {
  ul.classList.remove('open');
})
main.addEventListener('click', () => {
  ul.classList.remove('open');
})

link.forEach(clickedTab => {
  clickedTab.addEventListener('click', () => {
    link.forEach(tab => {
      tab.classList.remove('active');
    })
    clickedTab.classList.add('active')
  })
})