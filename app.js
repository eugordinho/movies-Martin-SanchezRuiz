/* import { filterMoviebeByTitle, } from './modules/modules.js' */

const $article = document.getElementById('main-article')

const $select = document.getElementById('select')

const $search = document.querySelector( 'search' )

const $movieSearch = document.getElementById( 'movieSearch' )

const genresSet = new Set()

const createCard = ( movie ) => {
    return `<a href="./movies-details.html?id=${movie.id}"><article class="max-w-sm m-5 border-solid border-4 rounded-lg p-2 bg-blue-500 text-black font-semibold" style="height: 33rem;">
    <img class="" src="${movie.image}" alt="Photo from ${movie.title}">
    <h2 class="font-semibold mt-2.5">${movie.title}</h2>
    <p class="mt-2.5">${movie.overview}</p>
    </article></a>`
}

movies.forEach( movie => { 
    for(genre of movie.genres) {
        genresSet.add(genre)
} } )

genresSet.forEach( genre => $select.innerHTML += `<option value="${genre}">${genre}</option>` )

function filterMoviebeByTitle( movies, inputTitle ) {
    return movies.filter( movie => movie.title.toLowerCase().includes( inputTitle.value.toLowerCase() ) )
}

movies.forEach( movie => $article.innerHTML += createCard(movie) )

$movieSearch.addEventListener( 'input', () => {
    const filteredMovies = filterMoviebeByTitle( movies, $movieSearch )

    $article.innerHTML = ''

    filteredMovies.forEach( movie => $article.innerHTML += createCard(movie) )
})


