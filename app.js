const $article = document.getElementById('main-article')

const createCard = (movie) => {
    return `<article class="max-w-sm h-98 m-2.5 border-solid border-4 rounded-lg p-2 bg-blue-500 text-black font-semibold ">
    <img class="" src="${movie.image}" alt="Foto de parametro ${movie.title}">
    <h2 class="font-semibold">${movie.title}</h2>
    <p>${movie.overview}</p>
    </article>`
}

movies.forEach( movie => $article.innerHTML += createCard(movie) )



