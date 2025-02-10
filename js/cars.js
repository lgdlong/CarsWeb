document.querySelectorAll('.cars li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.cars li').forEach(li => li.classList.remove('selected'));
        item.classList.add('selected');

        if (item.textContent.trim() === 'Porsche') {
            const models = ['718', '911', 'Taycan', 'Panamera', 'Macan', 'Cayenne'];
            const container = document.querySelector('.types');
            container.innerHTML = ''; // Clear previous content

            const ul = document.createElement('ul');
            ul.classList.add('models');

            models.forEach(model => {
                const li = document.createElement('li');
                li.textContent = model;
                ul.appendChild(li);
            });

            container.appendChild(ul);
        } else {
            const container = document.querySelector('.types');
            container.innerHTML = ''; // Clear previous content
        }
    });
});