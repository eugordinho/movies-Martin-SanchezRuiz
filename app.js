import { filterMovieByTitle, filterByGenre, createCard } from "./modules/modules.js" 

const $article = document.getElementById('main-article')

const $search = document.querySelector( 'search' )

const $movieSearch = document.getElementById( 'movieSearch' )

const $mainArticleFavorites = document.getElementById( 'main-article-favorites' )

const $select = document.getElementById('select')

const genresSet = new Set()

const init = {
    method: 'GET',
    headers: {
      'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}

fetch( "https://moviestack.onrender.com/api/movies", init )
.then( response => response.json() )
.then( movie => {
    const movies = movie.movies

    movies.forEach( movie => { 
        for(let genre of movie.genres) {
            genresSet.add(genre)
    } } )

    genresSet.forEach( genre => $select.innerHTML += `<option value="${genre}">${genre}</option>` )
    
    movies.forEach( movie => $article.innerHTML += createCard(movie) )

    $movieSearch.addEventListener( 'input', () => {
        const filteredByGenres = filterByGenre(movies, $select)

        const filteredMovies = filterMovieByTitle( filteredByGenres, $movieSearch )
        
        $article.innerHTML = ''

        filteredMovies.forEach( movie => $article.innerHTML += createCard(movie) )
    })
    
    $select.addEventListener( "input", () => {
        const filteredMovies = filterMovieByTitle( movies, $movieSearch )

        const filteredByGenres = filterByGenre(filteredMovies, $select)
        
        $article.innerHTML = ''

        filteredByGenres.forEach( movie => $article.innerHTML += createCard(movie) )
    })

    const $checkbox = document.querySelectorAll("input[type=checkbox]")

    let favorites = JSON.parse(localStorage.getItem('favorites')) || []

    $checkbox.forEach(checkbox => {
        checkbox.addEventListener("change", () => {

        if (!favorites.includes(checkbox.value)) {
            favorites.push(checkbox.value)
        } else {
            favorites.splice(favorites.indexOf(checkbox.value), 1)
        }

        localStorage.setItem('Favorites', JSON.stringify(favorites))
        })
    })
})
.catch(err => console.log(err));