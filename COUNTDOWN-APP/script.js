document.addEventListener('DOMContentLoaded', () => {
    const count = document.querySelector('#seconds');
    (function decrement() {
        setTimeout(() => {
            count.textContent = +count.textContent - 1;
            if (+count.textContent > 0) decrement();
            else document.querySelector('#buttons').style.setProperty('display', 'none');
        }, 1000);
    })();

    document.querySelector('#buttons').addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON') count.textContent = +count.textContent + +e.target.dataset.seconds;
    });
});