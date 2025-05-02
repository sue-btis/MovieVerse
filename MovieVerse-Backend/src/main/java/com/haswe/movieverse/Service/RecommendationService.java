package com.haswe.movieverse.Service;

import com.haswe.movieverse.model.Movie;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecommendationService {

    public List<Movie> getRecommendations(
        String genre,
        String keyword
    ) {
        //temporal en lo que se implementa el ML

        ArrayList<Movie> movies = new ArrayList<Movie>(); //TODO
        Movie m = new Movie();
        m.setTitle("Interstellar");
        m.setOverview("Sci-fi journey through space and time.");
        m.setGenre("Sci-Fi");
        m.setRating("8.6 (IMDb)");
        m.setTrailerUrl("https://youtube.com/trailer_interstellar");
        m.setStreamingPlatform("Netflix");

        movies.add(m);
        return movies;
    }

}
