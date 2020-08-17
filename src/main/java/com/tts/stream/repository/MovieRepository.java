package com.tts.stream.repository;

import java.util.List;

import com.tts.stream.model.Movie;
import com.tts.stream.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findAllByUser(User user);
}