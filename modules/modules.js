const $titleContainer = document.getElementById( 'titleContainer' )

const queryParams = new URLSearchParams( location.search  )
const id = queryParams.get( 'id' )

const movie = movies.find( movie => movie.id == id)

$titleContainer.innerHTML = `
<div class="flex m-3 gap-5 justify-center">
    <img src="${movie.image}" alt="Photo from ${movie.title}">
    
    <article class="w-1/3">
        <h1 class="my-3 font-extrabold text-2xl">${movie.title}</h1>
        <h2 class="my-3 font-semibold ">${movie.tagline}</h2>
        <p class="italic">${movie.genres}</p>
        <p class="my-3 text-lg">${movie.overview}</p>
    </article>
</div>

<div class="flex m-5 w-1/2 justify-between">
    <table>
        <tbody>
            <tr>
                <td>Original language</td>
                <td>${movie.original_language}</td>
            </tr>

            <tr>
                <td >Release date</td>
                <td>${movie.release_date}</td>
            </tr>

            <tr>
                <td>Runtime</td>
                <td>${movie.runtime}</td>
            </tr>

            <tr>
                <td>Status</td>
                <td>${movie.status}</td>
            </tr>
        </tbody>
    </table>

    <table>
        <tbody>
            <tr>
                <td>Vote average</td>
                <td>${movie.vote_average}</td>
            </tr>

            <tr>
                <td>Budget</td>
                <td>${movie.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
            </tr>

            <tr>
                <td>Revenue</td>
                <td>${movie.revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
            </tr>
        </tbody>
    </table>
</div>
`