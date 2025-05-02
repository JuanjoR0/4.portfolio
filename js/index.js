document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nameInput = this.querySelector('input[name="name"]');
    const emailInput = this.querySelector('input[name="email"]');
    const errorMsg = this.querySelector('.error-msg');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validar nombre
    if (nameInput.value.trim() !== "") {
      nameInput.classList.add('valid');
      nameInput.classList.remove('invalid');
    } else {
      nameInput.classList.remove('valid');
      nameInput.classList.add('invalid');
    }
  
    // Validar email
    if (emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('valid');
      emailInput.classList.remove('invalid');
      errorMsg.style.display = 'none'; // ocultar mensaje de error
    } else {
      emailInput.classList.remove('valid');
      emailInput.classList.add('invalid');
      errorMsg.style.display = 'block'; // mostrar mensaje de error
    }
  
    // Enviar si todo es válido
    if (
      nameInput.classList.contains('valid') &&
      emailInput.classList.contains('valid')
    ) {
      this.submit();
    }
  });