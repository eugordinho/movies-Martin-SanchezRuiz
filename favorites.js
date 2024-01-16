import { createCard } from "./modules/modules.js" 

const $mainArticleFavorites = document.getElementById( 'main-article-favorites' )

const jsonFav = JSON.parse(localStorage.getItem('Favorites')) || []

const init = {
    method: 'GET',
    headers: {
      'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
}

fetch( "https://moviestack.onrender.com/api/movies", init )
.then( response => response.json() )
.then( movieGet => {
    const movies = movieGet.movies

    const moviesFav = jsonFav.map( id => {
        const movie = movies.find(movie => movie.id == id)
        return movie
    })

    moviesFav.forEach( element => {
        $mainArticleFavorites.innerHTML += createCard( element )
    })
} )
.catch( err => console.log( err ))



/* moviesFav.foreach( movie => console.log( movie)) */

/* const moviesFav = idsArray.map( id => {
    const moviesFav = movies.find(movie => movie.id == id)
    return moviesFav
})

moviesFav.forEach( movie => $mainArticleFavorites.innerHTML += createCard(movie))
 */



    