const display = document.getElementById('display');

    function appendToDisplay(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = '';
    }

    function deleteLast() {
      display.value = display.value.slice(0, -1);
    }

    function calculateResult() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }

    // Keyboard input support
    document.addEventListener('keydown', function(event) {
      const key = event.key;
      if (!isNaN(key) || '+-*/().'.includes(key)) {
        appendToDisplay(key);
      } else if (key === 'Enter') {
        event.preventDefault();
        calculateResult();
      } else if (key === 'Backspace') {
        deleteLast();
      } else if (key.toLowerCase() === 'c') {
        clearDisplay();
      }
    });