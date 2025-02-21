let inputSequence = '';
    const targetSequence = 'LOGIN';  

    document.addEventListener('keydown', function(event) {
      inputSequence += event.key.toUpperCase(); 

      if (inputSequence.length > targetSequence.length) {
        inputSequence = inputSequence.slice(1);
      }

      if (inputSequence === targetSequence) {
        window.location.href = '/admin-login.html';  
      }
    });