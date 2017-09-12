import { createSelector } from 'reselect'

const newPost = (state) => (state.newPost)

export const getNewPost = createSelector([newPost], (newPost) => (newPost.get('data') ? newPost.get('data').toJS() : undefined))
