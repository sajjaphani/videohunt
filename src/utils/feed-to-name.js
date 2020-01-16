const FEED_TO_NAME = {
    'action': 'Action', 'comedy': 'Comedy', 'romance': 'Romance',
    'inspirational': 'Inspirational', 'science': 'Science', 'short-films': 'Short Films',
    'sports': 'Sports', 'technology': 'Technology', 'trailers': 'Trailers', 'viral': 'Viral'
}

export default function getDisplayName(feed) {
    return FEED_TO_NAME[feed];
}