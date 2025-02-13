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

document.querySelectorAll('.logo img').forEach(logo => {
    logo.addEventListener('click', () => {
        const cardImg = document.querySelector('.card img');
        const imgLinks = {
            nissan: './assets/nissan/nissan-gtr.jpg',
            audi: './assets/audi/audi-a6.webp',
            bmw: './assets/bmw/bmw-i7.png',
            lexus: './assets/lexus/lexus-lx570-removebg.png',
            maybach: './assets/mercedes/Mercedes-Maybach-S650-2020-8-removebg-preview.png',
            mercedes: './assets/mercedes/mercedes-amg.png',
            porsche: './assets/porsche/718-cayman-style-edition.png'
        };
        cardImg.src = imgLinks[logo.alt.toLowerCase()] || cardImg.src;
    });
});
