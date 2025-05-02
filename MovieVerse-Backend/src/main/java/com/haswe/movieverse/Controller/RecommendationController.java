package com.haswe.movieverse.Controller;

import com.haswe.movieverse.Service.RecommendationService;
import com.haswe.movieverse.model.Movie;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/recommendations")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class RecommendationController {

    private final RecommendationService recommendationService;

    @GetMapping
    public List<Movie> recommend(
            @RequestParam String genre,
            @RequestParam String keyword) {
        return recommendationService.getRecommendations(genre, keyword);
    }
}
