import React, { useState } from 'react'
import Filter from './Filter'
import MovieCard from './MovieCard'


function MovieList({ movies, setMovies }) {
    const [input, setInput] = useState('')
    return (
        <div>

            <div className='movies'>

                {movies
                .filter(el => el.title.toUpperCase().includes(input.toUpperCase()))
                .map((el,key) => <MovieCard movie={el} key={el.id} />)}
                <Filter input={input} setInput={setInput} />
            </div>




        </div>
    )
}

export default MovieList
