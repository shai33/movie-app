import React from 'react';
import LiveSearchBox from './LiveSearchBox';
import './MoviesPage.css'
import MovieCard from './MovieCard'
import axios from 'axios';

class MoviesPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results: [],
            selectedMovies: [],
            idResults: []
        };
    };
    addMovie = (index) => {
        const movie = this.state.results[index]; // superman... spiderman
        const movie_id = this.state.idResults[index];
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=ac83d758014c8755ad90d90f6da3379c`)
            .then((res) => {
                const length_in_minutes = res.data.runtime;
                const poster = 'https://image.tmdb.org/t/p/original' + res.data.poster_path;
                this.setState({
                    selectedMovies: this.state.selectedMovies.concat({id: movie_id, name: movie, 
                        runtime: length_in_minutes, poster: poster}),
                    results: []
                });
            });
    };
    searchMovies = (searchText) => {
        if( ! searchText ) {
            this.setState({
                results: []
            })
            return;
        };
        // Array.filter -> An array method
        // Takes a callback
        // for each item in the array -> the callback is run with a different item
        // if the callback returns true, the item stays
        // if false it is not in the new array
        // Returns a new filtered array, does not effect the original array
        
        // const searchResults = this.staticActorsJson.filter( (actor) => {
        //     return actor.toLowerCase().includes(searchText.toLowerCase());
        // })
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ac83d758014c8755ad90d90f6da3379c&query=${searchText}`)
            .then((r) => {
                const names = r.data.results.map( (item) => {
                    return item.title;
                })
                const ids = r.data.results.map( (item) => {
                    return item.id;
                })
                this.setState({
                    results: names,
                    idResults: ids
                })
                console.log('idresults', ids)
            });
    };
    // getMovieDetails = (index) => {
    //     const movie_id = this.state.idResults[index];
    //     console.log('myindex1', index);
    //     console.log('mymovie_id', movie_id);
    //     axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=ac83d758014c8755ad90d90f6da3379c`)
    //         .then((res) => {
    //             const length_in_minutes = res.data.runtime
    //             const poster = 'https://image.tmdb.org/t/p/original' + res.data.poster_path
    //             console.log('length_in_minutes', length_in_minutes)
    //             console.log('poster', poster)
    //             this.setState({

    //                 length: length_in_minutes,
    //                 poster: poster
    //             })
    //         })
    // }
    render(){
        const movieCards = this.state.selectedMovies.map( (movie, index) => {
            return <MovieCard movieName={movie.name} movieLength={movie.runtime} 
            moviePoster={movie.poster}></MovieCard>
        });
        return (
            <div className="c-movies-page">
                <LiveSearchBox 
                searchTextChanged={this.searchMovies}
                resultSelected={this.addMovie}
                placeholderText="Search for Movie" 
                results={this.state.results} />
                
                <div>{movieCards}</div>
            </div>      
        );
    };
}

export default MoviesPage;