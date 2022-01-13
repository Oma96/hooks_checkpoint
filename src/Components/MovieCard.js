import React from 'react'

function MovieCard({movie}) {
    return (
        <div>
            <h2>{movie.title}</h2>
            <h2>{movie.description}</h2>
            <img src={movie.image}/>
        </div>
    )
}

export default MovieCard
