import { createSelector } from 'reselect'

import { getTagTopics } from '../App/selectors';

const getPostId = (_, props) => (props.postId)

const getPosts = (state) => (state.posts)

const getPost = createSelector([getPostId, getPosts], (postId, posts) => (posts.get(postId).toJS()))

const getTitle = createSelector([getPost], (post) => post.title)

const getAuthor = createSelector([getPost], (post) => post.author)

const getURL = createSelector([getPost], (post) => post.url)

const getTopics = createSelector([getPost, getTagTopics], (post, topics) => {
    if(!topics) {
        return []
    }

    const topicIds = post.categories || [];
    const _topics = topics.filter(item => {
        return topicIds.includes(item.id);
    })

    return _topics;
});

const getProvider = createSelector([getPost], (post) => post.provider_name)

//TODO need to revise
const getEmbed = createSelector([getPost], (post) => post.embed)

const getUserId = createSelector([getPost], (post) => post.userId)

const getPostedOn = createSelector([getPost], (post) => post.postedOn)

const getDescription = createSelector([getPost], (post) => post.description)

export { getPostId, getTitle, getAuthor, getURL, getTopics, getProvider, getEmbed, getUserId, getPostedOn, getDescription }
