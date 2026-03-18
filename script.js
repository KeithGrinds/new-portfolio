// Dark/Light Theme Toggle
const themeToggle = document.getElementById('theme-icon');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.classList.toggle('fa-moon');
  themeToggle.classList.toggle('fa-sun');
});

// Modal Logic
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeModal = document.getElementById('close-modal');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = card.dataset.img;
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target == modal) modal.style.display = 'none';
});
