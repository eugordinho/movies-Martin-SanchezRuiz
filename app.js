const $article = document.getElementById('main-article')

const createCard = (movie) => {
    return `<article class="w-1/4">
    <img class="w-100%" src="${movie.image}" alt="Foto de parametro ${movie.title}">
    <h2 class="font-semibold text-xl pt-3">${movie.title}</h2>
    <p>${movie.overview}</p>
    </article>`
}

movies.forEach(movie => $article.innerHTML += createCard(movie) )
