onload = () =>{
        document.body.classList.remove("container");
        const message = document.getElementById('message');
        message.innerHTML = 'Estas flores amarillas son para ti mimi <br> ¡¡¡TE QUIERO MUCHO!!!';
        message.classList.add('show');
};

document.querySelectorAll('.clickable-flower').forEach(flower => {
    let isAnimating = false;

    flower.addEventListener('click', () => {
        if (!isAnimating) {
            isAnimating = true;

            const wrapper = flower.querySelector('.flower-wrapper');
            if (wrapper) {
                wrapper.classList.add('is-bouncing');
            }

            setTimeout(() => {
                if (wrapper) {
                    wrapper.classList.remove('is-bouncing');
                }
                isAnimating = false;
            }, 1000);

            // Polen (sin cambios)
            for (let i = 0; i < 10; i++) {
                const pollen = document.createElement('div');
                pollen.className = 'pollen';
                pollen.style.left = `${Math.random() * 100}%`;
                pollen.style.top = `${Math.random() * 100}%`;
                pollen.style.animationDelay = `${Math.random() * 0.5}s`;
                const leafsContainer = flower.querySelector('.flower__leafs') || flower;
                leafsContainer.appendChild(pollen);
                pollen.addEventListener('animationend', () => {
                    pollen.remove();
                });
            }
        }
    });
});
