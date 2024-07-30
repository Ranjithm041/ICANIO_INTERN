document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');

    document.querySelectorAll('.box').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent.trim();
            const icon = button.querySelector('i');

            if (button.classList.contains('operator')) {
                // Determine the operator symbol from the icon
                const operator = icon.classList.contains('fa-plus') ? '+' :
                                 icon.classList.contains('fa-minus') ? '-' :
                                 icon.classList.contains('fa-multiply') ? '*' :
                                 icon.classList.contains('fa-divide') ? '/' :
                                 icon.classList.contains('fa-percentage') ? '%' : '';

                display.value += ` ${operator} `;
            } else if (button.classList.contains('slice')) {
                // Handle backspace
                display.value = display.value.slice(0, -1);
            } else if (value === 'AC') {
                // Clear the display
                display.value = '';
            } else if (value === '=') {
                // Evaluate the expression
                if(value===' ') return;
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                // Append the number 
                display.value += value;
            }
        });
    });
});
