document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.querySelector('#add');
    const list = document.querySelector('#list-items');
    const input = document.querySelector('#task-input');
    const labelText = document.querySelector('.entries-text');

    function addItem(value) {
        const item = document.createElement('li');
        const fragment = document.createDocumentFragment();
        const checkbox = document.createElement('input');
        const closeBtn = document.createElement('span');
        closeBtn.id = 'close';
        closeBtn.textContent = 'X';
        checkbox.setAttribute('type', 'checkbox');
        fragment.append(checkbox, document.createTextNode(value), closeBtn);
        item.append(fragment);
        list.append(item);
        labelText.classList.add('hidden');
        list.classList.remove('hidden');
    }

    addBtn.addEventListener('click', (e) => {
        if (!input.value) return;
        addItem(input.value);
        input.value = '';
    });

    list.addEventListener('click', (e) => {
        if (e.target.tagName == 'INPUT') {
            if (e.target.checked) e.target.parentNode.style.setProperty('text-decoration', 'line-through');
            else e.target.parentNode.style.removeProperty('text-decoration')
        } else if (e.target.tagName == 'SPAN') {
            e.target.parentNode.remove();
            if (list.childElementCount == 0) {
                labelText.classList.remove('hidden');
                list.classList.add('hidden');
            }
        }
    });
});