import React, { Component } from 'react'
import '../css/Movie.css'


class MyMovie extends Component {

    render() {
        const {key, id, year, title, summary, poster, genres} = this.props;

        console.log(this.props);

        return (
            <div className='movie'>
                <img src={poster} width='180' height='150'/><br/>
                <h3 className='movie_title'>{title}</h3><br/>
                <h5 className='movie_year'>{year}</h5><br/>
                <p className='movie_summary'>{summary}</p>
                <b>장르</b>
                <ul className='movie_genres'>
                    {genres.map((genre, i) => (
                        <li key={i} className='movie__genres'> {genre} </li>
                    ))}
                </ul>
                
                
            </div>
        )//return end
    }
}

export default MyMovie
