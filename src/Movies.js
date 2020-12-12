import React from 'react';
import './App.css';
import axios from 'axios';





class Movies extends React.Component {
  constructor() {
    super()

    this.state = {}
  }
  render() {

    return (
    <div className="App">
      movies-app
     
     
    </div>
    );
  }


  getMovies = () => {
    axios.get('/movies').then((response) => {
      console.log(response)
    })
  }

  componentDidMount() {
    this.getMovies()
  }
  postMovies = () => {
    axios.post('/movies/new', {
      movieName: '',
      directorName: '',
      movieRating: ",",
      prices: ""
    })

    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  updateMovies = () => {
    axios.patch('/movies/new').then((response) => {
      console.log(response)
    })
  }
  deleteMovies = () => {
    axios.delete('/movies').then((deleted) => {
      console.log(deleted)
    })
  }
}




export default Movies;
