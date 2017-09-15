import { createSelector } from 'reselect'

const getPostId = (state, ownProps) => {
    return (ownProps.postId)
}

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId).toJS()))

const getTitle = createSelector([getPost], (post) => post.title)

const getAuthor = createSelector([getPost], (post) => post.author)

const getURL = createSelector([getPost], (post) => post.url)

const getCategory = createSelector([getPost], (post) => toTitleCase(post.category))

const getProvider = createSelector([getPost], (post) => post.provider_name)

const getEmbed = createSelector([getPost], (post) => post.html)

export { getPostId, getTitle, getAuthor, getURL, getCategory, getProvider, getEmbed }

function toTitleCase(str) {
    if (!str)
        return str
    str = str.split("-").join(" ")
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
}