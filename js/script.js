const form = document.querySelector('.needs-validation');

      form.addEventListener('submit', (e) => {
        if (!form.checkValidity()) {
          e.preventDefault();
        } else {
          alert('Submitted! We will reach out to you.');
        }

        form.classList.add('was-validated');
      });