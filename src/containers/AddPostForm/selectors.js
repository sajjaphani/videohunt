import { createSelector } from 'reselect'

const newPost = (state) => (state.newPost)

export const getDuplicatePost = createSelector([newPost], (newPost) => (newPost.get('duplicate-data') ? newPost.get('duplicate-data').toJS() : undefined))

export const getErrorData = createSelector([newPost], (newPost) => (newPost.get('errorData') ? newPost.get('errorData').toJS() : undefined))
