// Obtener elementos
const secretBtn = document.getElementById('secretBtn');
const secretModal = document.getElementById('secretModal');
const closeBtn = document.getElementById('closeBtn');

// Abrir el modal secreto al hacer clic en el botón
secretBtn.addEventListener('click', () => {
  secretModal.style.display = 'block';
});

// Cerrar el modal al hacer clic en la "X"
closeBtn.addEventListener('click', () => {
  secretModal.style.display = 'none';
});

// Cerrar si se hace clic fuera de la ventana modal
window.addEventListener('click', (event) => {
  if (event.target === secretModal) {
    secretModal.style.display = 'none';
  }
});