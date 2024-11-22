package edu.miu.project.controllers;

import edu.miu.project.commons.CustomMapper;
import edu.miu.project.models.Rating;
import edu.miu.project.models.dtos.RatingDto;
import edu.miu.project.models.dtos.UserRatingDto;
import edu.miu.project.services.ProductService;
import edu.miu.project.services.RatingService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
@Tag(name = "Ratings", description = "Rating endpoints for the application")
public class RatingController {
    private final RatingService ratingService;
    private final CustomMapper mapper;
    private final ProductService productService;

    @PostMapping("/products/{productId}/ratings")
    @SecurityRequirement(name = "bearerAuth")
    @PreAuthorize("hasRole('BUYER')")
    public UserRatingDto createRating(@PathVariable Long productId, @RequestBody @Validated RatingDto dto) {
        return this.mapper.map(ratingService.create(productId, this.mapper.map(dto, Rating.class)), UserRatingDto.class);
    }

    @GetMapping("/products/{productId}/ratings")
    public List<UserRatingDto> getProductRatings(@PathVariable Long productId) {
        return this.mapper.map(this.ratingService.getRatingsByProductId(productId), UserRatingDto.class);
    }

    @DeleteMapping("/ratings/{ratingId}")
    @PreAuthorize("hasRole('ADMIN')")
    @SecurityRequirement(name = "bearerAuth")
    public void deleteRating(@PathVariable Long ratingId) {
        this.ratingService.deleteById(ratingId);
    }
}
