package com.tts.stream.controller;

import com.tts.stream.model.MovieResponse;
import com.tts.stream.model.TVResponse;
import com.tts.stream.repository.MovieRepository;
import com.tts.stream.service.MovieService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)

public class MovieController {

    @Autowired
    private MovieService movieService; // why not MovieRepository movieRepository to save to db

    // @GetMapping("/movies/{id}")
    // public Movie retrieveMovie(@PathVariable long id){
    // Optional<Movie> movie = movieRepository.findById(id);if(!movie.isPresent())throw new MovieNotFoundException("id-"+id);return movie.get();
    // }

    
   
}
