function chooseOption(option) {
    const story = document.getElementById('story');
    if (option === 'praia') {
        story.textContent = 'Você foi para a praia e encontrou pistas do seu gato perto de uma barraca de acarajé. O que você faz agora?';
        updateButtons(['Seguir as pistas', 'Perguntar aos vendedores']);
    } else if (option === 'mercado') {
        story.textContent = 'No mercado, você vê um cartaz de "gato perdido". O que você faz agora?';
        updateButtons(['Ligar para o número no cartaz', 'Perguntar aos lojistas']);
    }
}

function updateButtons(options) {
    const container = document.querySelector('.container');
    container.innerHTML = `<h1>Aventura na Bahia: Em Busca do Gato Perdido</h1><p id="story">${document.getElementById('story').textContent}</p>`;
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => chooseOption(option.toLowerCase().replace(' ', ''));
        container.appendChild(button);
    });
}
