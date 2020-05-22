import React, { useState } from 'react';

let initialState = {
    title: '',
    director: '',
    metascore: '',
    stars: ''
}

let UpdateForm = () => {
    let [movie, setMovie] = useState(initialState);

    let handleSubmit = e => {
        e.preventDefault();
        //need to add put request
    }

    let handleChanges = e => {
        let value = e.target.value
        setMovie(...movie, value)
    }

    return (
        <form>
            <input
            type='text'
            name='title'
            placeholder='Title'
            onChange={handleChanges}
            value={movie.name}
            />
            
            <input
            type='text'
            name='director'
            placeholder='Director'
            onChange={handleChanges}
            value={movie.director}
            />

<input
            type='text'
            name='metascore'
            placeholder='Metascore'
            onChange={handleChanges}
            value={movie.metascore}
            />

<input
            type='text'
            name='stars'
            placeholder='Stars'
            onChange={handleChanges}
            value={movie.stars}
            />
        </form>
    )
}

export default UpdateForm;