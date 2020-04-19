import { createSelector } from 'reselect'

import { getTagTopics } from '../App/selectors';

const newPost = (state) => (state.newPost)

export const getNewPost = createSelector([newPost], (newPost) => (newPost.get('data') ? newPost.get('data').toJS() : undefined))

export { getTagTopics }