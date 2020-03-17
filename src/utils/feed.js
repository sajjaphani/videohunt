const FEED_TO_NAME = {
    "all": "All",
    "business": "Business",
    "comedy": "Comedy",
    "communication": "Communication",
    "community": "Community",
    "design": "Design",
    "funny": "Funny",
    "games": "Games",
    "health": "Health",
    "hobbies": "Hobbies",
    "humanity": "Humanity",
    "identity": "Identity",
    "innovation": "Innovation",
    "inspirational": "Inspirational",
    "nature": "Nature",
    "parodies": "Parodies",
    "personal-growth": "Personal Growth",
    "pranks": "Pranks",
    "product-review": "Product Review",
    "science": "Science",
    "short-films": "Short Films",
    "society": "Society",
    "sports": "Sports",
    "technology": "Technology",
    "trailers": "Trailers",
    "unboxing": "Unboxing",
    "viral": "Viral"
}

function getDisplayName(feed) {
    return FEED_TO_NAME[feed];
}

function getFeedItems() {
    const feedItems = Object.keys(FEED_TO_NAME).map((key) => FEED_TO_NAME[key]);
    return feedItems;
}

module.exports = { getDisplayName, getFeedItems }
