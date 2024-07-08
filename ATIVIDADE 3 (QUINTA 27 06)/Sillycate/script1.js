const imagensPerPage = 6;
let currentPage = 1;

const imagens = [
    "https://github.com/Luis-Tanese/Atividade-Avaliativa-13-06/blob/main/fotos/gato-1-trimestre-1.png?raw=true",
    "https://github.com/Luis-Tanese/Atividade-Avaliativa-13-06/blob/main/fotos/gato-1-trimestre-2.png?raw=true",
    "https://github.com/Luis-Tanese/Atividade-Avaliativa-13-06/blob/main/fotos/gato-1-trimestre-3.png?raw=true",
    "https://github.com/Luis-Tanese/Atividade-Avaliativa-13-06/blob/main/fotos/gato-1-trimestre.png?raw=true",
    "https://github.com/Luis-Tanese/Atividade-Avaliativa-13-06/blob/main/fotos/gato-2-trimestre-2.png?raw=true",
    "https://github.com/Luis-Tanese/Atividade-Avaliativa-13-06/blob/main/fotos/gato-2-trimestre-4.png?raw=true",
    "https://github.com/Luis-Tanese/Atividade-Avaliativa-13-06/blob/main/fotos/gato-2-trimestre.png?raw=true",
    "https://github.com/Luis-Tanese/Atividade-Avaliativa-13-06/blob/main/fotos/gato-3-trimestre-1.png?raw=true",
    "https://github.com/Luis-Tanese/Portfolio-2024/blob/main/gato-3-trimestre-2.png?raw=true",
    "https://github.com/Luis-Tanese/Portfolio-2024/blob/main/gato-3-trimestre-3.png?raw=true",
    "https://github.com/Luis-Tanese/Portfolio-2024/blob/main/gato-3-trimestre.png?raw=true",
    "https://github.com/Luis-Tanese/Portfolio-2024/blob/main/gato-3-trimestre-4.png?raw=true",
    "https://github.com/Luis-Tanese/Portfolio-2024/blob/main/CuhBG.png?raw=true",
    "https://github.com/Luis-Tanese/Portfolio-2024/blob/main/CuhBG1.png?raw=true",
    "https://github.com/Luis-Tanese/Portfolio-2024/blob/main/CUHBG2.png?raw=true",
    "https://github.com/Luis-Tanese/Portfolio-2024/blob/main/CuhBG3.png?raw=true",
    "https://github.com/Luis-Tanese/Portfolio-2024/blob/main/CuhBG4.png?raw=true",
    "https://github.com/Luis-Tanese/Portfolio-2024/blob/main/CuhBG5.png?raw=true"
];

function showPage(page) {
    const start = (page - 1) * imagensPerPage;
    const end = start + imagensPerPage;
    const imagensToShow = imagens.slice(start, end);

    const imagemContainer = document.getElementById('imagem-container');
    imagemContainer.innerHTML = '';
    imagensToShow.forEach(imagem => {
        const img = document.createElement('img');
        img.src = imagem;
        img.alt = 'Imagem de gato';
        imagemContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Página ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= imagens.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * imagensPerPage < imagens.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);