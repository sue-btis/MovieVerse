# model/recommender.py

def get_recommendations(genre, keyword):
    # Placeholder de modelo ML
    # Luego cargarías un joblib y haces inferencia real
    return [
        {
            "title": "Inception",
            "overview": "Dreams within dreams. Sci-fi thriller.",
            "genre": genre,
            "rating": "8.8 (IMDb)",
            "trailerUrl": "https://youtube.com/trailer_inception",
            "streamingPlatform": "HBO Max"
        },
        {
            "title": "The Matrix",
            "overview": "Hack the system. Reality is a simulation.",
            "genre": genre,
            "rating": "8.7 (IMDb)",
            "trailerUrl": "https://youtube.com/trailer_matrix",
            "streamingPlatform": "Netflix"
        }
    ]
