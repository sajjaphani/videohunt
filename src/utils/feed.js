const CATEGORIES = {
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
};

function getDisplayName(feed) {
    return CATEGORIES[feed];
}

function getFeedItems() {
    const feedItems = Object.keys(CATEGORIES).map((key) => CATEGORIES[key]);
    return feedItems;
}

function getCategories() {
    return CATEGORIES;
}

module.exports = { getDisplayName, getFeedItems, getCategories }
