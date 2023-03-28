const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const message = 'Thank you for joining the cause!';
  alert(message);
  form.reset();
});