document.addEventListener('DOMContentLoaded', () => {
    const countDisplay = document.getElementById('count');
    const errorDisplay = document.getElementById('error');
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const clearButton = document.getElementById('clear');
    
    let count = 0;

    const updateDisplay = () => {
        countDisplay.innerHTML = count;
        errorDisplay.classList.toggle('hidden', count > 0);
        clearButton.classList.toggle('hidden', count === 0);
        decrementButton.disabled = count === 0;
    };

    incrementButton.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
        }
        updateDisplay();
    });

    clearButton.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });

    updateDisplay();
});
