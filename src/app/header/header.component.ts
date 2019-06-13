import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Api } from '../services/api.service';
// import { genreListComponent } from '../genreList/genreList.component';

interface GenreData {
  genres: Genres[];
}

interface Genres {
  id: number;
  number: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  main: boolean = false;
  movie: any;
  movieString: string;

  mainfilter: boolean = false;
  // search_result: [];

  search_result: [];
  genreList: Genres[];
  genreId: number = 0;


constructor(private route: ActivatedRoute, private api: Api, ) { }

ngOnInit() {
        
    //   this.api.getGenreMovies().subscribe((data:GenreData) => {
    //     this.genreList = data.genres;
    //   });
     
}

  toggleSearchInput = () => {
    this.main = !this.main;
 };

 toggleFilters = () => {
  this.mainfilter = !this.mainfilter;
};

searchMovie = () => {
//   this.api.searchMovie(this.movieString).subscribe((data: {results: []}) => {
//     console.log(data.results);
//     this.api.updateMovieList(data.results);
//     this.genreId = 0;
//   });
}

// getTopRatedMovies = () => {
//   this.api.getTopRatedMovies().subscribe((data: {results: []}) => {
//     console.log(data.results);
//     this.api.updateMovieList(data.results);
//   });
// }

// getNowPlayingMovies = () => {
//   this.api.getNowPlayingMovies().subscribe((data: {results: []}) => {
//     console.log(data.results);
//     this.api.updateMovieList(data.results);
//   });
// }

// getPopularMovies = () => {
//   this.api.getPopularMovies().subscribe((data: {results: []}) => {
//     console.log(data.results);
//     this.api.updateMovieList(data.results);
//   });
// }

onChange = (event) => {
//   this.api.getGenreList(this.genreId).subscribe((data: {results: []}) => this.api.updateMovieList(data.results));
//   console.log(this.genreId);
}

onClick = () => {
  this.genreId = 0;
  console.log(this.genreId);
}

}