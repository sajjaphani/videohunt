import { createSelector } from 'reselect'

const getPostId = (_, props) => (props.postId)

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId).toJS()))

const getTitle = createSelector([getPost], (post) => post.title)

const getAuthor = createSelector([getPost], (post) => post.author)

const getURL = createSelector([getPost], (post) => post.url)

const getCategory = createSelector([getPost], (post) => toTitleCase(post.category))

const getProvider = createSelector([getPost], (post) => post.provider_name)

//TODO need to revise
const getEmbed = createSelector([getPost], (post) => post.embed)

const getUserId = createSelector([getPost], (post) => post.userId)

const getPostedOn = createSelector([getPost], (post) => post.postedOn)

const getDescription = createSelector([getPost], (post) => post.description)

export { getPostId, getTitle, getAuthor, getURL, getCategory, getProvider, getEmbed, getUserId, getPostedOn, getDescription }

function toTitleCase(str) {
    if (!str)
        return str
    str = str.split("-").join(" ")
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
}