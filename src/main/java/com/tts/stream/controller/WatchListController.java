package com.tts.stream.controller;

import com.tts.stream.model.Movie;
import com.tts.stream.model.User;
import com.tts.stream.service.MovieService;
import com.tts.stream.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)

public class WatchListController {

    @Autowired
    public UserService userService;

    // @PostMapping("/watchlist")
    // public void addMovieToWatchlist(User user, @RequestBody Movie movie) {
    //     userService.addMovieToWatchlist(user, movie);
    // }

// MovieRepository movieRepository

// @GetMapping("/movies/{id}")
// public Movie retrieveMovie(@PathVariable long id){
// Optional<Movie> movie =
// movieRepository.findById(id);if(!movie.isPresent())throw new
// MovieNotFoundException("id-"+id);return movie.get();
// }

}
